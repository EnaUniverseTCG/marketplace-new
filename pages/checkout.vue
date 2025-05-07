<template>
  <div class="px-4 py-8 font-ena text-white min-h-screen bg-enaBlack">
    <h1 class="text-4xl text-enaYellow mb-6">Checkout</h1>

    <div v-if="!cart.items.length" class="text-gray-400">
      🛒 Your cart is empty.
      <NuxtLink to="/marketplace" class="text-enaYellow hover:underline">
        Back to Marketplace
      </NuxtLink>
    </div>

    <div v-else class="space-y-8">
      <div class="space-y-4">
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
            <p class="text-gray-300">
              {{ item.price }} {{ item.currency }} × {{ item.quantity }}
            </p>
          </div>
          <p class="text-enaYellow font-bold">
            {{ (item.price * item.quantity).toFixed(2) }} EUR
          </p>
        </div>
      </div>

      <div class="bg-gray-800 p-4 rounded-lg space-y-2">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>{{ subtotal.toFixed(2) }} EUR</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping fee</span>
          <span>{{ shippingFee.toFixed(2) }} EUR</span>
        </div>
        <div class="flex justify-between font-bold text-2xl mt-2">
          <span>Total</span>
          <span>{{ total.toFixed(2) }} EUR</span>
        </div>
      </div>

      <div class="bg-gray-800 p-6 rounded-lg">
        <h3 class="text-2xl font-semibold mb-4">Shipping Information</h3>
        <form @submit.prevent="submitOrder" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input v-model="form.name" type="text" placeholder="Full Name" required
              class="w-full p-3 rounded bg-gray-700 text-white" />
            <input v-model="form.address" type="text" placeholder="Address" required
              class="w-full p-3 rounded bg-gray-700 text-white" />
            <input v-model="form.postal" type="text" placeholder="Postal Code" required
              class="w-full p-3 rounded bg-gray-700 text-white" />
            <input v-model="form.city" type="text" placeholder="City" required
              class="w-full p-3 rounded bg-gray-700 text-white" />
            <input v-model="form.country" type="text" placeholder="Country" required
              class="w-full p-3 rounded bg-gray-700 text-white" />
          </div>

          <h3 class="text-2xl font-semibold mt-6 mb-2">Delivery Method</h3>
          <div class="flex gap-6 mb-4">
            <label class="inline-flex items-center">
              <input type="radio" value="physical" v-model="form.delivery" />
              <span class="ml-2">Physical Only</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="hybrid" v-model="form.delivery" />
              <span class="ml-2">Physical + NFT (Hybrid)</span>
            </label>
          </div>

          <div v-if="form.delivery === 'hybrid'">
            <input v-model="form.wallet" type="text"
              placeholder="e.g. 0xAbC12345... (your ETH wallet)"
              required
              class="w-full p-3 rounded bg-gray-700 text-gray-400 italic" />
          </div>

          <div class="text-right">
            <button type="submit"
              class="px-6 py-3 bg-enaYellow text-black font-semibold rounded hover:brightness-90 transition">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const router = useRouter()

const shippingFee = 6
const subtotal = computed(() =>
  cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
)
const total = computed(() => subtotal.value + shippingFee)

const form = reactive({
  name: '',
  address: '',
  postal: '',
  city: '',
  country: '',
  delivery: 'physical' as 'physical' | 'hybrid',
  wallet: ''
})

function submitOrder() {
  alert(`✅ Order placed!
Name: ${form.name}
Address: ${form.address}, ${form.postal}, ${form.city}, ${form.country}
Delivery: ${form.delivery === 'physical' ? 'Physical Only' : 'Hybrid (+ NFT)'}
${form.delivery === 'hybrid' ? `Wallet: ${form.wallet}` : ''}
Total: ${total.value.toFixed(2)} EUR`)
  cart.clearCart()
  router.push('/marketplace')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
