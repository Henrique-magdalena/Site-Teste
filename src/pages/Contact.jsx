import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="font-headline font-extrabold text-6xl tracking-tighter text-on-surface mb-6">
            ENTRE EM <br/> <span className="text-primary-container">CONTATO.</span>
          </h1>
          <p className="text-on-surface-variant text-lg mb-12 max-w-sm">
            Tem alguma dúvida sobre seu pedido ou quer saber mais sobre nossos drops? Nossa equipe está pronta para ajudar.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Email</p>
                <p className="font-headline font-bold">contact@kinetic.store</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Phone</p>
                <p className="font-headline font-bold">+55 (11) 99999-9999</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Showroom</p>
                <p className="font-headline font-bold">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low p-8 md:p-12 rounded-3xl"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-2">Nome Completo</label>
              <input 
                type="text" 
                className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-2">E-mail</label>
              <input 
                type="email" 
                className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="seu@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-2">Mensagem</label>
              <textarea 
                rows="4"
                className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            
            <button className="w-full kinetic-gradient text-white font-label font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] shadow-xl transition-all">
              <Send size={18} /> Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
