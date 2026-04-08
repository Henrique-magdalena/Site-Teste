import { Globe, Camera, MessageSquare } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-on-background text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="text-2xl font-black italic font-headline tracking-tighter">
          KINETIC
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="text-white/50 hover:text-primary-container transition-colors font-label text-xs uppercase tracking-widest">
            Privacy Policy
          </a>
          <a href="#" className="text-white/50 hover:text-primary-container transition-colors font-label text-xs uppercase tracking-widest">
            Terms of Service
          </a>
          <a href="#" className="text-white/50 hover:text-primary-container transition-colors font-label text-xs uppercase tracking-widest">
            Shipping
          </a>
        </div>
        
        <div className="flex gap-6 mt-4">
          <Globe className="text-white/40 cursor-pointer hover:text-white transition-colors" size={24} />
          <Camera className="text-white/40 cursor-pointer hover:text-white transition-colors" size={24} />
          <MessageSquare className="text-white/40 cursor-pointer hover:text-white transition-colors" size={24} />
        </div>
        
        <p className="text-white/30 font-label text-[10px] uppercase tracking-widest mt-8">
          © 2024 KINETIC STREETWEAR. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}

export default Footer
