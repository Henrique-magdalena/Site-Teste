from datetime import timedelta
from typing import Any, Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core import security
from app.core.config import settings
from app.db.session import get_db
from app.models import models
from app.schemas import schemas
from app.api import deps

router = APIRouter()

@router.post("/login/access-token", response_model=schemas.Token)
async def login_access_token(
    db: Annotated[AsyncSession, Depends(get_db)],
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    result = await db.execute(select(models.User).where(models.User.email == form_data.username))
    user = result.scalars().first()
    
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            user.email, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }

@router.post("/register", response_model=schemas.User)
async def register_user(
    db: Annotated[AsyncSession, Depends(get_db)],
    user_in: schemas.UserCreate
) -> Any:
    """
    Register a new user (default as non-admin)
    """
    result = await db.execute(select(models.User).where(models.User.email == user_in.email))
    user = result.scalars().first()
    
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system",
        )
    
    db_obj = models.User(
        email=user_in.email,
        hashed_password=security.get_password_hash(user_in.password),
        full_name=user_in.full_name,
        is_admin=False, # Forced to False for public registration
    )
    db.add(db_obj)
    await db.commit()
    await db.refresh(db_obj)
    return db_obj

@router.get("/me", response_model=schemas.User)
async def read_user_me(
    current_user: Annotated[models.User, Depends(deps.get_current_user)],
) -> Any:
    """
    Get current user.
    """
    return current_user
