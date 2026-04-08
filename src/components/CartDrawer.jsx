import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-on-background/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-outline-variant/10">
              <h2 className="font-headline font-extrabold text-2xl flex items-center gap-2">
                <ShoppingBag size={24} className="text-primary" /> CARRINHO 
                <span className="text-sm font-label text-on-surface-variant bg-surface-container px-2 py-1 rounded-full ml-2">
                  {getTotalItems()}
                </span>
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-full transition-all">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant/30">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="font-headline font-bold text-lg text-on-surface-variant">Seu carrinho está vazio</p>
                  <button 
                    onClick={onClose}
                    className="text-primary font-label font-bold uppercase tracking-widest text-xs"
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 items-start bg-surface-container-low p-4 rounded-2xl"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-headline font-bold text-sm leading-tight max-w-[150px]">{item.title}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-on-surface-variant/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-primary font-headline font-bold text-sm">{item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-surface-container rounded transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center font-label font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-surface-container rounded transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-surface-container-low space-y-4 rounded-t-3xl shadow-inner">
                <div className="flex justify-between items-end">
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Subtotal</p>
                  <p className="font-headline font-extrabold text-2xl text-on-surface">{getTotalPrice()}</p>
                </div>
                <button className="w-full kinetic-gradient text-white font-label font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                  FINALIZAR COMPRA
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
