import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const Home = () => {
  const { addItem } = useCart()
  const categories = [
    { id: 'cat1', name: 'Masculino', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlxk7rSVlcdZnHq1MRgvbd8EXFm0kcBgSVPdyqyr8OFajUhCEaiStG7FJCTMwSnSknwk0a67e0AfkoqxLFVHmm5PEkFxbFQe-I8qlXCWabJCJW8Iz71xTKvpwl36vz1ES2QEmmXCp-VUsGex7S8I0agT4Ao6on9WUBrrQns3CL0g_maVqhkxUh3JdWgj0KfzLxekfbPp4uy8wFQLtgqEm8reErZrta1FX-0iBgthtHjL9nBWOJldBWk5mIwGQ3LHebB36E7JmQOQA' },
    { id: 'cat2', name: 'Feminino', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqDrvklNP7Yq7QiGlAnogA3yDJZf97I6s8LLjPvwevn1NxmsMEoZfFm9YVpH4bP4YX9PVeSptNAgSeOAblHNC56cOz0VY1BY_4NazHBXU0BZenX_grtLZFpzpgLqdSyHu4fjGwB4DUWD0BKMVzB4hvDe2yr1UDU7AxISzY5k6YaSWLaorqe4JH1s3ksE_6vK6IMvMadm7PkSTKP2XVM3ZmjTcy0hQ-9GnePYCXt7bbHoqQw7m-wqExF2I5rUyBiPaRSuJRrulyq24' },
    { id: 'cat3', name: 'Infantil', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUIF6WzbAuYQdHQcIbFC4BwOy_qp2MJOEVixYyBRMPO_j0scF5aJGD6PI9MsYFYeNEtUXJmUOqC6N8rlnm6EElPUFUc4mHxBv033riU1TK6HZzLa4WrWPUT1TeeCeDKJxMcI6JGqjG8RCKByrijFqvzw5wdJY_qb5_PgdNRy77OAfFn-2zf3IWZu2sfNawDc3fpRt6Fx1FjWUf4uTBdSAlvUBbnlUvNWzSWOF3UPVBEkFutXwKlyxP7JIQB6mUFY0PEy2jLQINQtM' },
    { id: 'cat4', name: 'Impresso', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-83WAfQuzNFe8hKajSNFwhNxzvGsXrgKsUzIMj3CZonDjl5FyW5ceTnEBVb4mNi5arZMLD-e3e_TY9hmDlHSKK2UX8m5FaG4wQ4NmKE_hARyWIPVUVisO-0poJeFm9brlFqovsLbksObT1Qufm0Ht8YTioHfbw-uXxGTQ-yjJNN6TOav2U-5QpP8sLYaEfw53j9WCj4ZUDmZRLarcG8VflL-No8eBCPJV0Rgy0fRu31bpdAOzf0kjJacgj4W1O_M4gvCkX3l0XCY' },
    { id: 'cat5', name: 'Básico', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwoSvtM8pNRAANFaRJozDrB9jewRbPwVcvHOpQllZhCVFFoxyUs9P07feRfMceeCCPf4vRzevypAFnayon0p7rOnAadxfyXfxMy1ZiFZfEgVFAZgH7ic3QcHlTqGqGvI6T6FJx4sVy-TiHf3mux-jZTGMoF4ynep1AutiPeYWwVVjni3EIiziaOm3h5gUAt-LDL4VUpUFHx2bMT1Y_TFs0bLZdYeHthav3irSB9Gtz2_PDa2v8HfuumGDAQ13TngoRj2oNdLxAuqg' },
  ]

  const featuredProducts = [
    { id: 1, title: 'KINETIC CORE TEE', price: 'R$ 189,90', tag: 'LIMITED', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLy5bBGtwLJwtvYZCchceU7dkgTzJ4yd24roK2QJb4H1NxE1hyk7Q3qXMhnowj8-stbLI7kKl1bKkIhAadcqqVsGW4ZN_JHL6n_YXWknUKvjyez0VCjZ1RFuzUbJxsfCggC2z6u7KVBCQx1UINDZGczRdwHNs0kLWUS4A5zdFN1HX1lqrSSjqZh0y0cgcvFjoYemLLQtb4dlrPNOtGu3fgKT9RZVMRgiLfLGQc4oHqNIKCfEX5_jyZRQwKhMm8rDLdlUxhwgPicYc' },
    { id: 2, title: 'ARCHITECT TEE', price: 'R$ 159,90', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtTXwUITEEo_KpzGR44lnLKbOiwyfLkGFjm25PhJ2f3P-stL7cHUgvmBOnbm1A1eyB75iG-seRIFLEWh7ntg6Vk2pVb3KJa-dd9LKVD2GSUbNM4BZk8Wbvt1ZvQp-VAhIRRS6ORx9fPZYRfkSaMlDcgVaJK-aWzWuvYjoPTFShnQIlg-CBp-xzHujpYjWs8l4wPw_fjJOJWgZIakUoTfS1EPkv-F7wG_0TSXde6uziH6qp_yahQEWcRCUAP-YYj1b5By8XUp5Km4E' },
    { id: 3, title: 'FLUID BLUE TEE', price: 'R$ 149,90', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChiNPVE14VFPCLezgSC6cPOHZJIGUU_IKUNLpjz4cbxlltcraa3SgK6TEYyVSIfSd_ryKghAJtFL3_rcSN1Opw_bqeaE0dJY4PB_XQWpll5TbKZkF4pRNO1b-u02G-a5qj9bdhOfjuWnptDqr1BhkWjcgtcK_V2tv-P02WJPlrGsIWBCFYcYpm2Kf3vdsH4s2TYqTfNHLKlpuqKis-FjhHov8YfEsJrSzEeRidgY09X28UfmGjqxoetChuP49n06hsQGBLOQXaP1k' },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pb-20"
    >
      {/* Hero Section */}
      <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-7 relative z-10"
          >
            <h1 className="font-headline font-extrabold text-6xl md:text-8xl leading-none tracking-tighter text-on-surface mb-6">
              MOVIMENTO <br/>
              <span className="text-primary italic">URBANO</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-md mb-8 leading-relaxed">
              Curadoria premium de streetwear que une a fluidez do design contemporâneo com a energia das ruas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/produtos" className="kinetic-gradient text-white font-label font-bold uppercase tracking-wider px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg flex justify-center items-center">
                Ver Coleção
              </Link>
              <Link to="/produtos" className="bg-surface-container-high text-primary font-label font-bold uppercase tracking-wider px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 flex justify-center items-center">
                Básicos
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqN00zy8vZY3fD7WS7HjMirUgPNDxi-QVmM_M1JzZh1BS8HLBnL2_aNec1q2zY8p0P5m1UrDbWhgwAyvt9n6-V3wRRUkXiadOfe5gPe3UA4NLMFi4IPt22bgeV3Tuk_EYRe0CtMovVFzOMSxDUUhuUbtga2Sn0zJSdI9GYBiI2mDnGIPldttlt1PP0j9YQisHk8DNU8PK4KZKwF3P0n2dearg56OTEFqFWGz8ynu7LYhD0HRcoGCyqTJg95n0izl9U6oUMAoKUEfA" 
                alt="Editorial placement image"
              />
            </div>
            <motion.div 
              initial={{ rotate: 10, scale: 0 }}
              animate={{ rotate: -3, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute -bottom-6 -left-6 bg-tertiary text-white px-6 py-3 rounded-xl font-label font-bold text-sm shadow-xl"
            >
              NEW DROP: KINETIC 24'
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-surface-container-low py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-label text-primary font-bold uppercase tracking-widest text-xs">Explore</span>
            <h2 className="font-headline font-bold text-4xl text-on-surface mt-2">Categorias</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.button 
                key={cat.name}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="group relative overflow-hidden aspect-square rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-on-background/10 group-hover:bg-transparent transition-colors z-10" />
                <img src={cat.image} className="w-full h-full object-cover" alt={cat.name} />
                <span className="absolute bottom-4 left-4 font-headline font-bold text-on-surface bg-white/90 backdrop-blur px-3 py-1 rounded-lg z-20">
                  {cat.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Drop */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-headline font-extrabold text-5xl text-on-surface tracking-tighter">
            FEATURED <span className="text-outline-variant font-normal">DROP</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProducts.map((prod, i) => (
            <motion.div 
              key={prod.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-low mb-8 relative">
                {prod.tag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-tertiary text-white text-[10px] font-label font-bold px-2 py-1 rounded-full">{prod.tag}</span>
                  </div>
                )}
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={prod.image} 
                  alt={prod.title} 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-1">{prod.title}</h3>
                  <p className="font-label text-on-surface-variant text-sm tracking-wider">PREMIUM / OVERSIZED</p>
                </div>
                <p className="font-headline font-bold text-primary">{prod.price}</p>
              </div>
              <button 
                onClick={() => addItem(prod)}
                className="mt-6 w-full py-4 rounded-full bg-surface-container-high text-on-surface font-label font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-colors"
              >
                Comprar
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Aesthetic Banner */}
      <section className="relative h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-on-background">
          <img 
            className="w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxMdyiQTg2e3-P7dh6FcExu36L2ssGPIpCQ9LGhHRRWvlDgPClTgIAYQ6CvqEbA03aJtu7QBcVpoENJdbmt9LPdtb5nLAk-QpQwbPr0leG4NmqLJrQcTNgecZBdYNsBakhEobxfcg04FifnYrKaRLHC5W-2Dgd7tUFr6lQIIcZoe7bccCocmH386x7LynHbphl0bbQHckyY3Xi_HUEvmQcV_DY4FXLzXur9xHb2TKN_2sRUvJ7Mvn6P3tjwDLi9b3-pAE0JnAEylY" 
            alt="Cinematic street vibe"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-white tracking-tighter leading-none mb-6">
              QUALIDADE QUE <br/> <span className="italic text-primary-container">PERMANECE.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 font-body">
              Algodão 100% sustentável com gramatura pesada para garantir o caimento perfeito que você busca.
            </p>
            <button className="bg-white text-on-background font-label font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-xl">
              Nossa História
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
