// stores/cart.ts
import { defineStore } from 'pinia'

export interface CartItem {
  id: string
  name: string
  price: number
  currency: string
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, i) => sum + i.quantity, 0)
  },
  actions: {
    addToCart(item: Omit<CartItem, 'quantity'>) {
      const existing = this.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(id: string) {
      this.items = this.items.filter(i => i.id !== id)
    },
    updateQuantity(payload: { id: string; quantity: number }) {
      const idx = this.items.findIndex(i => i.id === payload.id)
      if (idx !== -1) {
        this.items[idx].quantity = payload.quantity
      }
    },
    clearCart() {
      this.items = []
    }
  }
})
