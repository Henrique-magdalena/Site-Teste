import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      
      addItem: (product) => {
        const currentCart = get().cart
        const existingItem = currentCart.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          set({ cart: [...currentCart, { ...product, quantity: 1 }] })
        }
      },

      removeItem: (productId) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set({
          cart: get().cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => set({ cart: [] }),

      // Computed/Derived values
      getTotalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
      getTotalPrice: () => 
        get().cart.reduce((acc, item) => {
          const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'))
          return acc + price * item.quantity
        }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    }),
    {
      name: 'kinetic-cart-storage', // name of the item in storage
    }
  )
)
