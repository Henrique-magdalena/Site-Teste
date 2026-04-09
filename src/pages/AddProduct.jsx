import { motion } from 'framer-motion'
import { 
  Info, 
  Plus, 
  Trash2, 
  Upload, 
  CreditCard, 
  Settings2, 
  ChevronDown,
  Image as ImageIcon,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Check
} from 'lucide-react'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <div className="bg-background min-h-screen text-on-background">
      <AdminSidebar />
      
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="h-20 px-10 flex items-center justify-between sticky top-0 bg-surface/70 backdrop-blur-md z-30 border-b border-outline-variant/5">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-on-background font-headline">Adicionar Novo Produto</h1>
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest font-label mt-1">Kinetic Admin Ecosystem</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="px-6 py-2.5 rounded-full font-bold text-sm text-primary hover:bg-surface-container transition-colors font-label">
              Descartar
            </Link>
            <button className="px-8 py-2.5 kinetic-gradient text-white rounded-full font-bold text-sm shadow-xl shadow-primary/25 hover:scale-105 transition-all active:scale-95 font-label">
              Salvar Produto
            </button>
          </div>
        </header>

        <div className="px-10 pb-20 max-w-6xl mx-auto mt-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Primary Info */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              {/* Basic Information Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Info size={18} />
                  </div>
                  <h3 className="text-lg font-bold font-headline">Informações Básicas</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Nome do Produto</label>
                    <input 
                      className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface font-medium font-body" 
                      placeholder="ex: Over-sized Kinetic Tee v1" 
                      type="text"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Descrição</label>
                    <div className="bg-surface-container-low rounded-2xl p-4 min-h-[220px] border-none focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                      <div className="flex gap-4 border-b border-outline-variant/30 pb-3 mb-4">
                        <button className="text-outline hover:text-primary transition-colors"><Bold size={18} /></button>
                        <button className="text-outline hover:text-primary transition-colors"><Italic size={18} /></button>
                        <button className="text-outline hover:text-primary transition-colors"><List size={18} /></button>
                        <button className="text-outline hover:text-primary transition-colors"><LinkIcon size={18} /></button>
                      </div>
                      <textarea 
                        className="w-full bg-transparent border-none resize-none focus:ring-0 outline-none h-32 font-body text-sm leading-relaxed" 
                        placeholder="Conte a história deste drop..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Categoria</label>
                    <div className="relative">
                      <select className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface font-medium font-body appearance-none cursor-pointer">
                        <option>Selecione uma categoria</option>
                        <option>Streetwear</option>
                        <option>Limited Edition</option>
                        <option>Essentials</option>
                        <option>Outerwear</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-outline pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Media Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ImageIcon size={18} />
                  </div>
                  <h3 className="text-lg font-bold font-headline">Mídia</h3>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-4 h-48 border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center bg-surface-container-low group hover:bg-surface-container hover:border-primary/50 transition-all cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-outline group-hover:text-primary transition-colors mb-3">
                      <Upload size={24} />
                    </div>
                    <p className="font-bold text-sm font-headline">Arraste imagens ou <span className="text-primary">clique para subir</span></p>
                    <p className="text-[10px] uppercase font-label font-bold text-outline mt-1 tracking-wider">PNG, JPG ou WebP até 10MB</p>
                  </div>
                  
                  {/* Image Previews */}
                  <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden relative group border border-outline-variant/5">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlx-TVkP36wpBIGRmrSToqI9oz9mfwO2f7a70Hp0pb-lOWJILtmlvl3m4_WsvEU-Rih_4ro-v8XLJydjC_5ifIZGWfm0ots3LBfs4OxjCVBpC9HdzRv2ksr1Y7S-zUwwUZJ_lkRXqkH6K5lwtOXgEi0mzmxWRSPgl124KadsPZFlSvwjf8oHEUaiY6Jtb63nN6bYIb8rurDgS2RRIN35L6WinmllnGkhYU1sMl47ZWyHcZnLWf77KHxpC77ozbzDUXMUOxPLLmXLc"
                      alt="Product preview"
                    />
                    <div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
                      <button className="w-10 h-10 rounded-full bg-error text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"><Trash2 size={18} /></button>
                    </div>
                  </div>
                  
                  <div className="aspect-square bg-surface-container-low rounded-2xl border-2 border-dashed border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary hover:bg-primary/5 cursor-pointer transition-all">
                    <Plus size={24} />
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right Column: Secondary Settings */}
            <div className="col-span-12 lg:col-span-5 space-y-8">
              {/* Pricing & Inventory */}
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CreditCard size={18} />
                  </div>
                  <h3 className="text-lg font-bold font-headline">Preço e Estoque</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Preço base</label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-sm text-outline group-focus-within:text-primary transition-colors">R$</span>
                      <input className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-bold text-lg font-headline" placeholder="249.90" type="number"/>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Preço Promo</label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-sm text-outline group-focus-within:text-primary transition-colors">R$</span>
                      <input className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-bold text-lg font-headline" placeholder="199.90" type="number"/>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8 pt-8 border-t border-outline-variant/20">
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">SKU</label>
                    <input className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface font-mono text-xs uppercase tracking-widest" placeholder="KIN-TEE-WHT-01" type="text"/>
                  </div>
                  <div className="space-y-3">
                    <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Estoque Inicial</label>
                    <input className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface font-bold text-lg font-headline" placeholder="50" type="number"/>
                  </div>
                </div>
              </motion.section>

              {/* Attributes Section */}
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Settings2 size={18} />
                  </div>
                  <h3 className="text-lg font-bold font-headline">Atributos</h3>
                </div>
                
                <div className="space-y-6 mb-10">
                  <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Tamanhos</label>
                  <div className="flex flex-wrap gap-2">
                    {['P', 'M', 'G', 'GG'].map((size) => (
                      <button 
                        key={size}
                        className={`w-12 h-12 rounded-xl font-bold font-headline text-sm transition-all ${
                          size === 'M' 
                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' 
                            : 'bg-surface-container text-on-surface-variant hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                    <button className="w-12 h-12 rounded-xl border-2 border-dashed border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="font-label text-xs font-bold uppercase text-outline tracking-wider block">Cores</label>
                  <div className="flex flex-wrap gap-4">
                    <button className="w-10 h-10 rounded-full bg-on-background ring-4 ring-offset-4 ring-primary relative flex items-center justify-center transition-all hover:scale-110">
                      <Check size={14} className="text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-outline-variant/30 hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-[#f4a261] hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-[#2a9d8f] hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </motion.section>

              {/* Preview Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-on-background p-1 rounded-[2.5rem] transform rotate-1 shadow-2xl"
              >
                <div className="bg-on-background rounded-[2.3rem] p-8 text-on-secondary">
                  <div className="flex justify-between items-start mb-10">
                    <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter">Live Preview</span>
                    <button className="text-outline hover:text-white transition-colors">
                      <Settings2 size={18} />
                    </button>
                  </div>
                  <div className="aspect-square bg-white/5 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center">
                    <ImageIcon size={48} className="text-white/10" />
                  </div>
                  <h4 className="font-bold text-xl font-headline tracking-tight mb-2">Over-sized Kinetic Tee v1</h4>
                  <p className="text-3xl font-black text-primary font-headline tracking-tighter mb-6">R$ 249,90</p>
                  <div className="flex gap-2">
                    <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddProduct
