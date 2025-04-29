<template>
  <div class="px-4 py-8 font-ena text-white">
    <NuxtLink to="/marketplace" class="text-enaYellow hover:underline mb-4 inline-block">
      ← Voltar
    </NuxtLink>

    <h1 class="text-5xl font-bold mb-6">{{ deck.name }}</h1>

    <div
      class="max-w-md mx-auto border-2 rounded-xl overflow-hidden mb-6"
      :class="borderColor"
    >
      <img
        :src="deck.image"
        :alt="deck.name"
        class="w-full aspect-[5/8] object-cover"
      />
      <div class="bg-black/80 p-4">
        <p class="mb-2">Raridade:
          <span class="font-semibold">{{ capitalize(deck.rarity) }}</span>
        </p>
        <p class="mb-2">ATK: <span class="font-semibold">{{ deck.attack }}</span>
           DEF: <span class="font-semibold">{{ deck.defense }}</span>
        </p>
        <p class="mb-4 italic text-gray-300">
          “Aqui vai o texto de lore ou habilidade da carta.”
        </p>
        <p class="text-2xl text-enaYellow font-bold mb-4">
          Price: {{ deck.price }} {{ deck.currency }}
        </p>
      </div>
    </div>

    <div class="flex justify-center space-x-4 mb-8">
      <button
        @click="onAdd()"
        :class="['px-6 py-3 font-semibold rounded transition', { 'animate-pop': added }]"
        @animationend="added = false"
        class="bg-enaBlue text-black hover:brightness-110"
      >
        Adicionar ao Carrinho
      </button>
      <button
        @click="buyHybrid(deck.id)"
        class="px-6 py-3 bg-enaYellow text-black font-semibold rounded hover:brightness-110 transition"
      >
        Comprar Hybrid
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

interface Deck { /* … mesma interface … */ }

const route = useRoute()
const router = useRouter()
const cart = useCartStore()

// recria decks
const rarities = ['common','rare','epic','legendary','neutral','mana']
const decks: Deck[] = Array.from({ length: 200 }, (_, i) => ({
  id: String(i+1),
  name: `Card #${i+1}`,
  image: `/cards/placeholder-deck${(i%2)+1}.png`,
  price: Math.ceil(Math.random()*20),
  currency: 'EUR',
  attack: Math.ceil(Math.random()*6),
  defense: Math.ceil(Math.random()*6),
  rarity: rarities[i % rarities.length]
}))

const deckId = route.params.id as string
const deck = computed(() => decks.find(d => d.id === deckId)!)

const added = ref(false)

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// borda
const colors: Record<string,string> = {
  common:    'border-red-600',
  rare:      'border-green-600',
  epic:      'border-blue-600',
  legendary: 'border-gray-800',
  neutral:   'border-yellow-700',
  mana:      'border-purple-600'
}
const borderColor = computed(() => colors[deck.value.rarity] || 'border-gray-700')

// ações
function onAdd() {
  cart.addToCart({
    id: deck.value.id,
    name: deck.value.name,
    price: deck.value.price,
    currency: deck.value.currency,
    image: deck.value.image
  })
  added.value = true
}

function buyHybrid(id: string) {
  router.push(`/checkout/hybrid/${id}`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }

/* mesmo keyframe do DeckCard */
@keyframes pop {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.animate-pop {
  animation: pop 0.3s ease;
}
</style>
