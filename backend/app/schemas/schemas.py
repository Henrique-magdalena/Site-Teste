from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Optional, List
from datetime import datetime

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    is_admin: bool = False

class UserCreate(UserBase):
    password: str

class UserUpdate(UserBase):
    password: Optional[str] = None

class UserInDBBase(UserBase):
    id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class User(UserInDBBase):
    pass

# Product Schemas
class ProductBase(BaseModel):
    title: str
    price: str
    category: str
    image: str
    description: Optional[str] = None
    is_active: bool = True

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    title: Optional[str] = None
    price: Optional[str] = None
    category: Optional[str] = None
    image: Optional[str] = None

class ProductInDBBase(ProductBase):
    id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class Product(ProductInDBBase):
    pass

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenPayload(BaseModel):
    sub: Optional[str] = None
