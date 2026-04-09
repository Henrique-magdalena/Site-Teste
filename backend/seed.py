import asyncio
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import SessionLocal, engine
from app.models.models import Base, User, Product
from app.core.security import get_password_hash
from app.core.config import settings

async def seed_data():
    async with SessionLocal() as session:
        # Create first superuser
        print(f"Creating superuser {settings.FIRST_SUPERUSER}...")
        admin = User(
            email=settings.FIRST_SUPERUSER,
            hashed_password=get_password_hash(settings.FIRST_SUPERUSER_PASSWORD),
            full_name="System Admin",
            is_admin=True
        )
        session.add(admin)

        # Create initial products from frontend
        print("Seeding initial products...")
        products = [
            {
                "title": "KINETIC CORE TEE",
                "price": "R$ 189,90",
                "category": "Camisetas",
                "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDLy5bBGtwLJwtvYZCchceU7dkgTzJ4yd24roK2QJb4H1NxE1hyk7Q3qXMhnowj8-stbLI7kKl1bKkIhAadcqqVsGW4ZN_JHL6n_YXWknUKvjyez0VCjZ1RFuzUbJxsfCggC2z6u7KVBCQx1UINDZGczRdwHNs0kLWUS4A5zdFN1HX1lqrSSjqZh0y0cgcvFjoYemLLQtb4dlrPNOtGu3fgKT9RZVMRgiLfLGQc4oHqNIKCfEX5_jyZRQwKhMm8rDLdlUxhwgPicYc",
                "description": "Premium oversized black t-shirt"
            },
            {
                "title": "ARCHITECT TEE",
                "price": "R$ 159,90",
                "category": "Camisetas",
                "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtTXwUITEEo_KpzGR44lnLKbOiwyfLkGFjm25PhJ2f3P-stL7cHUgvmBOnbm1A1eyB75iG-seRIFLEWh7ntg6Vk2pVb3KJa-dd9LKVD2GSUbNM4BZk8Wbvt1ZvQp-VAhIRRS6ORx9fPZYRfkSaMlDcgVaJK-aWzWuvYjoPTFShnQIlg-CBp-xzHujpYjWs8l4wPw_fjJOJWgZIakUoTfS1EPkv-F7wG_0TSXde6uziH6qp_yahQEWcRCUAP-YYj1b5By8XUp5Km4E",
                "description": "White premium cotton t-shirt"
            },
            {
                "title": "FLUID BLUE TEE",
                "price": "R$ 149,90",
                "category": "Camisetas",
                "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuChiNPVE14VFPCLezgSC6cPOHZJIGUU_IKUNLpjz4cbxlltcraa3SgK6TEYyVSIfSd_ryKghAJtFL3_rcSN1Opw_bqeaE0dJY4PB_XQWpll5TbKZkF4pRNO1b-u02G-a5qj9bdhOfjuWnptDqr1BhkWjcgtcK_V2tv-P02WJPlrGsIWBCFYcYpm2Kf3vdsH4s2TYqTfNHLKlpuqKis-FjhHov8YfEsJrSzEeRidgY09X28UfmGjqxoetChuP49n06hsQGBLOQXaP1k",
                "description": "Electric blue t-shirt"
            },
            {
                "title": "URBAN HOODIE",
                "price": "R$ 299,90",
                "category": "Moletons",
                "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDqN00zy8vZY3fD7WS7HjMirUgPNDxi-QVmM_M1JzZh1BS8HLBnL2_aNec1q2zY8p0P5m1UrDbWhgwAyvt9n6-V3wRRUkXiadOfe5gPe3UA4NLMFi4IPt22bgeV3Tuk_EYRe0CtMovVFzOMSxDUUhuUbtga2Sn0zJSdI9GYBiI2mDnGIPldttlt1PP0j9YQisHk8DNU8PK4KZKwF3P0n2dearg56OTEFqFWGz8ynu7LYhD0HRcoGCyqTJg95n0izl9U6oUMAoKUEfA",
                "description": "Premium oversized hoodie"
            }
        ]

        for p_data in products:
            product = Product(**p_data)
            session.add(product)
        
        await session.commit()
        print("Database seeded successfully!")

async def main():
    async with engine.begin() as conn:
        print("Recreating database tables...")
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    
    await seed_data()

if __name__ == "__main__":
    asyncio.run(main())
