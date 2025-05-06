<template>
  <div
    ref="cardRef"
    :class="[
      'deck-card relative w-60 rounded-xl overflow-visible transform transition-shadow duration-300 hover:z-20 border-2',
      'hover:shadow-[0_0_20px_rgba(255,214,0,0.7)]',
      borderClass,
      { 'animate-pop': added }
    ]"
    @animationend="added = false"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0 rounded-xl"
      :style="{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }"
    />

    <!-- Badge + ATK/DEF -->
    <div class="relative z-10 p-3 flex justify-between items-start">
      <span class="px-2 py-1 text-xs font-bold text-black rounded bg-enaYellow">
        {{ rarityLabel }}
      </span>
      <div class="space-x-2 text-white text-xs font-bold">
        <span>ATK: {{ deck.attack }}</span>
        <span>DEF: {{ deck.defense }}</span>
      </div>
    </div>

    <!-- Card image -->
    <img
      :src="deck.image"
      :alt="deck.name"
      class="relative z-10 w-full aspect-[5/8] object-cover rounded-t-xl"
      loading="lazy"
    />

    <!-- Footer -->
    <div class="relative z-10 bg-black/80 p-4 rounded-b-xl flex flex-col space-y-3">
      <!-- name + price -->
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-white truncate">{{ deck.name }}</h3>
        <span class="text-enaYellow font-bold">{{ deck.price }} {{ deck.currency }}</span>
      </div>

      <!-- buttons row -->
      <div class="flex space-x-2">
        <button
          @click="goToDetails"
          class="flex-1 flex items-center justify-center px-3 py-2 bg-enaBlue text-black font-semibold rounded hover:brightness-110 transition"
        >
          <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 0 1116 0A8 8 0 012 10z"/>
            <path d="M10.875 7.625a.875.875 0 10-1.75 0v2.5a.875.875 0 001.75 0v-2.5zM10 13a1 1 0 100-2 1 1 0 000 2z"/>
          </svg>
          Details
        </button>

        <button
          @click="addToCart()"
          class="flex-1 flex items-center justify-center px-3 py-2 bg-purple-600 text-white font-semibold rounded hover:brightness-110 transition"
        >
          <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h2l.6 3M7 13h8l1-5H6.6m0 0L5 4H3m2 9a2 2 0 104 0m6 0a2 2 0 104 0"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import VanillaTilt from 'vanilla-tilt'
import { useCartStore } from '@/stores/cart'

interface Deck {
  id: string
  name: string
  image: string
  price: number
  currency: string
  attack: number
  defense: number
  rarity: string
}

const props = defineProps<{ deck: Deck }>()
const router = useRouter()
const cart = useCartStore()
const added = ref(false)

// gradient + border maps
const gradientMap: Record<string, [string, string]> = {
  common:    ['#B91C1C','#7F1D1D'],
  rare:      ['#047857','#065F46'],
  epic:      ['#1E40AF','#1E3A8A'],
  legendary: ['#111111','#333333'],
  neutral:   ['#D29B0E','#A16207'],
  mana:      ['#6D28D9','#4C1D95'],
}
const borderMap: Record<string,string> = {
  common:    'border-red-600',
  rare:      'border-green-600',
  epic:      'border-blue-600',
  legendary: 'border-gray-800',
  neutral:   'border-yellow-700',
  mana:      'border-purple-600',
}

const key = props.deck.rarity.toLowerCase()
const [gradientFrom, gradientTo] = gradientMap[key] || gradientMap.common
const borderClass = borderMap[key] || borderMap.common
const rarityLabel = props.deck.rarity.charAt(0).toUpperCase() + props.deck.rarity.slice(1)

const cardRef = ref<HTMLElement>()
onMounted(() => {
  if (cardRef.value) {
    VanillaTilt.init(cardRef.value, { max: 8, speed: 400, glare: true, 'max-glare': 0.1 })
  }
})

function goToDetails() {
  router.push(`/marketplace/${props.deck.id}`)
}

function addToCart() {
  cart.addToCart({
    id: props.deck.id,
    name: props.deck.name,
    price: props.deck.price,
    currency: props.deck.currency,
    image: props.deck.image
  })
  added.value = true
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.deck-card { font-family: 'Orbitron', sans-serif; }

/* pop animation */
@keyframes pop {
  0%,100% { transform: scale(1) }
  50%     { transform: scale(1.1) }
}
.animate-pop { animation: pop 0.3s ease; }
</style>
