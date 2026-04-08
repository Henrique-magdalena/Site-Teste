import { motion } from 'framer-motion'
import { Filter, Grid, List } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const Products = () => {
  const { addItem } = useCart()
  const products = [
    { id: 1, title: 'KINETIC CORE TEE', price: 'R$ 189,90', category: 'Camisetas', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLy5bBGtwLJwtvYZCchceU7dkgTzJ4yd24roK2QJb4H1NxE1hyk7Q3qXMhnowj8-stbLI7kKl1bKkIhAadcqqVsGW4ZN_JHL6n_YXWknUKvjyez0VCjZ1RFuzUbJxsfCggC2z6u7KVBCQx1UINDZGczRdwHNs0kLWUS4A5zdFN1HX1lqrSSjqZh0y0cgcvFjoYemLLQtb4dlrPNOtGu3fgKT9RZVMRgiLfLGQc4oHqNIKCfEX5_jyZRQwKhMm8rDLdlUxhwgPicYc' },
    { id: 2, title: 'ARCHITECT TEE', price: 'R$ 159,90', category: 'Camisetas', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtTXwUITEEo_KpzGR44lnLKbOiwyfLkGFjm25PhJ2f3P-stL7cHUgvmBOnbm1A1eyB75iG-seRIFLEWh7ntg6Vk2pVb3KJa-dd9LKVD2GSUbNM4BZk8Wbvt1ZvQp-VAhIRRS6ORx9fPZYRfkSaMlDcgVaJK-aWzWuvYjoPTFShnQIlg-CBp-xzHujpYjWs8l4wPw_fjJOJWgZIakUoTfS1EPkv-F7wG_0TSXde6uziH6qp_yahQEWcRCUAP-YYj1b5By8XUp5Km4E' },
    { id: 3, title: 'FLUID BLUE TEE', price: 'R$ 149,90', category: 'Camisetas', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChiNPVE14VFPCLezgSC6cPOHZJIGUU_IKUNLpjz4cbxlltcraa3SgK6TEYyVSIfSd_ryKghAJtFL3_rcSN1Opw_bqeaE0dJY4PB_XQWpll5TbKZkF4pRNO1b-u02G-a5qj9bdhOfjuWnptDqr1BhkWjcgtcK_V2tv-P02WJPlrGsIWBCFYcYpm2Kf3vdsH4s2TYqTfNHLKlpuqKis-FjhHov8YfEsJrSzEeRidgY09X28UfmGjqxoetChuP49n06hsQGBLOQXaP1k' },
    { id: 4, title: 'URBAN HOODIE', price: 'R$ 299,90', category: 'Moletons', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqN00zy8vZY3fD7WS7HjMirUgPNDxi-QVmM_M1JzZh1BS8HLBnL2_aNec1q2zY8p0P5m1UrDbWhgwAyvt9n6-V3wRRUkXiadOfe5gPe3UA4NLMFi4IPt22bgeV3Tuk_EYRe0CtMovVFzOMSxDUUhuUbtga2Sn0zJSdI9GYBiI2mDnGIPldttlt1PP0j9YQisHk8DNU8PK4KZKwF3P0n2dearg56OTEFqFWGz8ynu7LYhD0HRcoGCyqTJg95n0izl9U6oUMAoKUEfA' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface">COLEÇÃO 24'</h1>
          <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs mt-2">Editorial Series</p>
        </div>
        
        <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-full">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold">
            <Filter size={16} /> Filtrar
          </button>
          <div className="flex gap-2 text-on-surface/40 px-2">
            <Grid size={20} className="text-primary cursor-pointer" />
            <List size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((prod, i) => (
          <motion.div 
            key={prod.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-low mb-6 relative">
              <img 
                src={prod.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={prod.title} 
              />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    addItem(prod)
                  }}
                  className="w-full bg-white text-on-background font-label font-bold py-4 rounded-xl shadow-2xl"
                >
                  Quick Add +
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-start px-1">
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface leading-snug">{prod.title}</h3>
                <p className="font-label text-on-surface-variant text-[10px] uppercase tracking-widest mt-1">{prod.category}</p>
              </div>
              <p className="font-headline font-bold text-primary">{prod.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products
