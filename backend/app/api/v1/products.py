from typing import Any, List, Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete
from app.db.session import get_db
from app.models import models
from app.schemas import schemas
from app.api import deps

router = APIRouter()

@router.get("/", response_model=List[schemas.Product])
async def read_products(
    db: Annotated[AsyncSession, Depends(get_db)],
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve list of products.
    """
    result = await db.execute(select(models.Product).offset(skip).limit(limit))
    return result.scalars().all()

@router.post("/", response_model=schemas.Product, status_code=status.HTTP_201_CREATED)
async def create_product(
    *,
    db: Annotated[AsyncSession, Depends(get_db)],
    product_in: schemas.ProductCreate,
    current_user: Annotated[models.User, Depends(deps.get_current_active_admin)],
) -> Any:
    """
    Create a new product (Admin only).
    """
    db_obj = models.Product(**product_in.model_dump())
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.put("/{id}", response_model=schemas.Product)
async def update_product(
    *,
    db: Annotated[AsyncSession, Depends(get_db)],
    id: int,
    product_in: schemas.ProductUpdate,
    current_user: Annotated[models.User, Depends(deps.get_current_active_admin)],
) -> Any:
    """
    Update a product (Admin only).
    """
    result = await db.execute(select(models.Product).where(models.Product.id == id))
    db_obj = result.scalars().first()
    
    if not db_obj:
        raise HTTPException(status_code=404, detail="Product not found")
    
    update_data = product_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_obj, field, value)
    
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.get("/{id}", response_model=schemas.Product)
async def read_product(
    *,
    db: Annotated[AsyncSession, Depends(get_db)],
    id: int,
) -> Any:
    """
    Get product by ID.
    """
    result = await db.execute(select(models.Product).where(models.Product.id == id))
    db_obj = result.scalars().first()
    
    if not db_obj:
        raise HTTPException(status_code=404, detail="Product not found")
    return db_obj

@router.delete("/{id}", response_model=schemas.Product)
async def delete_product(
    *,
    db: Annotated[AsyncSession, Depends(get_db)],
    id: int,
    current_user: Annotated[models.User, Depends(deps.get_current_active_admin)],
) -> Any:
    """
    Delete a product (Admin only).
    """
    result = await db.execute(select(models.Product).where(models.Product.id == id))
    db_obj = result.scalars().first()
    
    if not db_obj:
        raise HTTPException(status_code=404, detail="Product not found")
    
    await db.delete(db_obj)
    await db.commit()
    return db_obj
