<template>
  <div
    ref="cardRef"
    class="featured-card relative border-2 rounded-xl overflow-visible transform transition-shadow duration-300
           hover:shadow-[0_0_20px_rgba(255,214,0,0.7)] hover:z-20"
    :class="borderColor"
  >
    <!-- Gradiente de fundo via rarity -->
    <div
      class="absolute inset-0 rounded-xl"
      :style="{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }"
    />

    <!-- Rarity badge + atributos -->
    <div class="relative z-10 p-3 flex justify-between items-start">
      <span class="px-2 py-1 text-xs font-bold text-black rounded bg-enaYellow">
        {{ capitalize(rarity) }}
      </span>
      <div class="space-x-2 text-white text-xs font-bold">
        <span>ATK: {{ atk }}</span>
        <span>DEF: {{ def }}</span>
      </div>
    </div>

    <!-- Arte da carta -->
    <img
      :src="img"
      alt=""
      class="relative z-10 w-full aspect-[4/5] object-cover rounded-b-none"
    />

    <!-- Footer com nome e facção -->
    <div class="relative z-10 bg-black/80 p-3 space-y-1 rounded-b-xl">
      <h3 class="text-lg font-semibold text-white truncate">{{ name }}</h3>
      <p class="text-gray-300 text-sm truncate">{{ faction }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'

const props = defineProps<{
  name: string
  faction: string
  rarity: string
  atk: number
  def: number
  image: string
}>()

const img = props.image
const { rarity, atk, def, name, faction } = props

// Escolha de degradês (from → to) e bordas por raridade
const colors = {
  Common:    ['#B91C1C', '#7F1D1D'],  // vermelho
  Legendary: ['#111111', '#333333'],  // preto
  Epic:      ['#1E40AF', '#1E3A8A'],  // azul
  Rare:      ['#047857', '#065F46'],  // verde
  Neutral:   ['#D29B0E', '#A16207'],  // castanho claro
}
const [gradientFrom, gradientTo] = colors[capitalize(rarity)] || colors.Common
const borderColor = {
  common:    'border-red-600',
  legendary: 'border-gray-800',
  epic:      'border-blue-600',
  rare:      'border-green-600',
  neutral:   'border-yellow-700',
}[rarity.toLowerCase()] || 'border-gray-700'

// Tilt 3D
const cardRef = ref<HTMLElement>()
onMounted(() => {
  if (cardRef.value) {
    VanillaTilt.init(cardRef.value, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.15
    })
  }
})

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

@keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
.animate-spin-slow { animation: spin-slow 10s linear infinite; }
</style>
