from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from app.core.config import settings

# Create async engine for PostgreSQL (Supabase)
engine = create_async_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    # Supabase recommends connection pooling for high-concurrency
    pool_size=10,
    max_overflow=20,
)

SessionLocal = async_sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

async def get_db():
    async with SessionLocal() as session:
        yield session
