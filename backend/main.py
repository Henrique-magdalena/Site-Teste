from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from app.api.v1 import auth, products
from app.core.config import settings
from app.db.session import engine
from app.models.models import Base

# Create database tables (using sync wrapper for initial setup if needed, 
# but usually Alembic is better. For this demo, we'll use a simple setup)
# Note: In a real production app with Supabase, you'd use Alembic migrations.

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    description="Backend seguro para Kinetic Streetwear com FastAPI e Supabase"
)

# Custom Security Headers Middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response

app.add_middleware(SecurityHeadersMiddleware)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

@app.on_event("startup")
async def startup():
    # In search of simplicity for the initial connection check
    # In a production app, we would use Alembic
    async with engine.begin() as conn:
        # await conn.run_sync(Base.metadata.drop_all) # Careful with this!
        await conn.run_sync(Base.metadata.create_all)

# Routes
app.include_router(auth.router, prefix=f"{settings.API_V1_STR}", tags=["login"])
app.include_router(products.router, prefix=f"{settings.API_V1_STR}/products", tags=["products"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to Kinetic API",
        "docs": "/docs",
        "version": "1.0.0"
    }
