<template>
  <div class="px-4 py-8 font-ena text-white">
    <!-- não chame mais <Navbar /> aqui -->

    <h1 class="text-4xl text-enaYellow mb-6">Seu Carrinho</h1>

    <div v-if="cart.items.length === 0" class="text-gray-400">
      🛒 Seu carrinho está vazio.
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex items-center bg-gray-900 rounded-lg p-4"
      >
        <img
          :src="item.image"
          alt=""
          class="w-24 h-36 object-cover rounded mr-4"
        />
        <div class="flex-1">
          <h2 class="text-xl font-semibold">{{ item.name }}</h2>
          <p class="text-gray-300">{{ item.price }} {{ item.currency }}</p>
          <label class="flex items-center space-x-2 mt-2">
            <span>Qtd:</span>
            <input
              type="number"
              v-model.number="item.quantity"
              @change="updateQuantity(item.id, item.quantity)"
              min="1"
              class="w-16 p-1 bg-gray-800 rounded text-center"
            />
          </label>
        </div>
        <button
          @click="removeFromCart(item.id)"
          class="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Remover
        </button>
      </div>

      <div class="mt-8 text-right">
        <p class="text-2xl font-bold">Total: {{ cartTotal }} EUR</p>
        <button
          @click="checkout"
          class="mt-4 px-6 py-3 bg-enaYellow text-black font-semibold rounded hover:brightness-90 transition"
        >
          Ir para Checkout
        </button>
      </div>
    </div>

    <!-- não chame mais <Footer /> aqui -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const router = useRouter()

// total
const cartTotal = computed(() =>
  cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
)

// actions
function removeFromCart(id: string) {
  cart.removeFromCart(id)
}

function updateQuantity(id: string, quantity: number) {
  cart.updateQuantity({ id, quantity })
}

function checkout() {
  router.push('/checkout')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
