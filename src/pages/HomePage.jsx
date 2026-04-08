import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePos({
          x: (window.innerWidth / 2 - e.pageX) / 25,
          y: (window.innerHeight / 2 - e.pageY) / 25
        });
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#e9e5ff]/70 backdrop-blur-xl">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <a className="text-2xl font-black italic text-[#2b2a51] font-headline tracking-tight" href="#">KINETIC</a>
            <div className="hidden md:flex items-center gap-6 font-headline font-bold tracking-tight">
              <a className="text-[#0846ed] border-b-2 border-[#0846ed] pb-1 transition-all duration-300 hover:opacity-80" href="#">Início</a>
              <a className="text-[#585781] hover:text-[#0846ed] transition-all duration-300" href="#">Produtos</a>
              <a className="text-[#585781] hover:text-[#0846ed] transition-all duration-300" href="#">Categoria</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="transition-transform scale-95 active:scale-90 text-[#585781] hover:text-[#0846ed]">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <button className="transition-transform scale-95 active:scale-90 text-[#585781] hover:text-[#0846ed]">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            <div className="col-span-12 md:col-span-7 relative z-10">
              <h1 className="font-headline font-extrabold text-6xl md:text-8xl leading-none tracking-tighter text-on-surface mb-6">
                MOVIMENTO <br/>
                <span className="text-[#0846ed] italic">URBANO</span>
              </h1>
              <p className="text-[#585781] text-xl max-w-md mb-8 leading-relaxed">
                Curadoria premium de streetwear que une a fluidez do design contemporâneo com a energia das ruas.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-br from-[#0846ed] to-[#859aff] text-white font-label font-bold uppercase tracking-wider px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg">
                  Ver Coleção
                </button>
                <button className="bg-[#e2dfff] text-[#0846ed] font-label font-bold uppercase tracking-wider px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95">
                  Básicos
                </button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 relative">
              <div 
                className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-[#e9e5ff] transition-transform duration-200"
                style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg) scale(1.02)` }}
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqN00zy8vZY3fD7WS7HjMirUgPNDxi-QVmM_M1JzZh1BS8HLBnL2_aNec1q2zY8p0P5m1UrDbWhgwAyvt9n6-V3wRRUkXiadOfe5gPe3UA4NLMFi4IPt22bgeV3Tuk_EYRe0CtMovVFzOMSxDUUhuUbtga2Sn0zJSdI9GYBiI2mDnGIPldttlt1PP0j9YQisHk8DNU8PK4KZKwF3P0n2dearg56OTEFqFWGz8ynu7LYhD0HRcoGCyqTJg95n0izl9U6oUMAoKUEfA" 
                  alt="Hero Image" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#9c3f00] text-white px-6 py-3 rounded-xl font-label font-bold text-sm transform -rotate-3 shadow-xl">
                NEW DROP: KINETIC 24'
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
