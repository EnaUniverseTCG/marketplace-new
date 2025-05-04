<template>
  <div class="relative min-h-screen bg-enaBlack font-ena text-white overflow-hidden">
    <!-- (opte por fundo de partículas aqui) -->

    <div class="relative z-10 max-w-2xl mx-auto py-16 px-4">
      <NuxtLink to="/" class="inline-block text-gray-400 hover:text-enaYellow mb-6">
        ← Back to Home
      </NuxtLink>

      <h1 class="text-5xl font-bold text-enaYellow mb-12 text-center">Buy $ENA</h1>

      <!-- Painel de Preço -->
      <div
        class="mb-10 p-6 bg-gray-900/50 border border-enaYellow rounded-lg text-center"
      >
        <p class="text-gray-300 mb-2">You will receive</p>
        <p class="text-3xl font-bold text-enaYellow">{{ formattedEna }} $ENA</p>
        <p class="text-gray-500 text-sm">at ~{{ priceUsd }} USDT per $ENA</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- USDT Card -->
        <div
          class="group relative p-6 bg-gray-800 border-2 border-gray-700 rounded-lg hover:border-enaYellow transition"
        >
          <div class="flex items-center mb-4">
            <svg class="w-6 h-6 text-green-400 mr-2"><!-- Heroicon de moeda --></svg>
            <h2 class="text-xl font-semibold">Buy with USDT</h2>
          </div>
          <input
            v-model.number="usdtAmount"
            type="range"
            min="0" max="1000" step="1"
            class="w-full h-2 mb-4 accent-enaYellow"
          />
          <input
            v-model.number="usdtAmount"
            type="number" min="0" step="0.01"
            placeholder="0.00 USDT"
            class="w-full p-3 bg-gray-700 rounded mb-4 focus:ring-enaYellow"
          />
          <button
            @click="buyWithUsdt"
            class="w-full py-3 bg-enaYellow text-black font-bold rounded hover:brightness-90 group-hover:scale-105 transform transition"
          >
            Swap USDT → $ENA
          </button>
        </div>

        <!-- Cartão Card -->
        <div
          class="group relative p-6 bg-gray-800 border-2 border-gray-700 rounded-lg hover:border-enaYellow transition"
        >
          <div class="flex items-center mb-4">
            <svg class="w-6 h-6 text-blue-400 mr-2"><!-- Heroicon de cartão --></svg>
            <h2 class="text-xl font-semibold">Buy with Card</h2>
          </div>
          <input
            v-model.number="fiatAmount"
            type="range"
            min="0" max="1000" step="1"
            class="w-full h-2 mb-4 accent-enaYellow"
          />
          <input
            v-model.number="fiatAmount"
            type="number" min="0" step="0.01"
            placeholder="0.00 USD"
            class="w-full p-3 bg-gray-700 rounded mb-4 focus:ring-enaYellow"
          />
          <button
            @click="buyWithCard"
            class="w-full py-3 bg-enaYellow text-black font-bold rounded hover:brightness-90 group-hover:scale-105 transform transition"
          >
            Pay with Card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// valores de exemplo; troque pela sua API real
const priceUsd = 0.05  // USDT por $ENA
const usdtAmount = ref(0)
const fiatAmount = ref(0)

// calcula $ENA estimado
const formattedEna = computed(() => {
  const total = usdtAmount.value / priceUsd
  return isFinite(total) ? total.toFixed(2) : '0.00'
})

function buyWithUsdt() {
  if (usdtAmount.value <= 0) return alert('Enter valid USDT amount')
  alert(`Swapping ${usdtAmount.value} USDT → $ENA…`)
}

function buyWithCard() {
  if (fiatAmount.value <= 0) return alert('Enter valid USD amount')
  alert(`Redirecting to payment…`)
}
</script>
