<template>
  <div class="relative min-h-screen bg-enaBlack font-ena text-white overflow-hidden">
    <div class="relative z-10 max-w-2xl mx-auto py-16 px-4">
      <!-- Back link -->
      <NuxtLink to="/" class="inline-block text-gray-400 hover:text-enaYellow mb-6">
        ← Back to Home
      </NuxtLink>

      <!-- Title -->
      <h1 class="text-5xl font-bold text-enaYellow mb-4 text-center">
        Buy $ENA
      </h1>

      <!-- Coming Soon Banner -->
      <div class="text-center mb-8">
        <span class="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-full">
          COMING SOON
        </span>
      </div>

      <!-- Price Panel -->
      <div class="mb-10 p-6 bg-gray-900/50 border border-enaYellow rounded-lg text-center">
        <p class="text-gray-300 mb-2">You will receive</p>
        <p class="text-3xl font-bold text-enaYellow">{{ formattedEna }} $ENA</p>
        <p class="text-gray-500 text-sm">at ~{{ priceUsd }} USDT per $ENA</p>
      </div>

      <!-- Payment Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- USDT Card -->
        <div
          class="group relative p-6 bg-gray-800 border-2 border-gray-700 rounded-lg hover:border-enaYellow transition"
        >
          <div class="flex items-center mb-4">
            <svg class="w-6 h-6 text-green-400 mr-2"><!-- coin icon --></svg>
            <h2 class="text-xl font-semibold">Buy with USDT</h2>
          </div>
          <input
            v-model="usdtAmount"
            type="range"
            min="0"
            max="1000"
            step="1"
            class="w-full h-2 mb-4 accent-enaYellow"
          />
          <input
            v-model="usdtAmount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00 USDT"
            class="w-full p-3 bg-gray-700 rounded mb-4 focus:ring-enaYellow"
            disabled
          />
          <button
            disabled
            class="w-full py-3 bg-enaYellow text-black font-bold rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Swap USDT → $ENA
          </button>
        </div>

        <!-- Card Payment Card -->
        <div
          class="group relative p-6 bg-gray-800 border-2 border-gray-700 rounded-lg hover:border-enaYellow transition"
        >
          <div class="flex items-center mb-4">
            <svg class="w-6 h-6 text-blue-400 mr-2"><!-- card icon --></svg>
            <h2 class="text-xl font-semibold">Buy with Card</h2>
          </div>
          <input
            v-model="fiatAmount"
            type="range"
            min="0"
            max="1000"
            step="1"
            class="w-full h-2 mb-4 accent-enaYellow"
          />
          <input
            v-model="fiatAmount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00 USD"
            class="w-full p-3 bg-gray-700 rounded mb-4 focus:ring-enaYellow"
            disabled
          />
          <button
            disabled
            class="w-full py-3 bg-enaYellow text-black font-bold rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
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

// Static rate for demo
const priceUsd = 0.05  // USDT per $ENA

// User inputs (for display only, inputs are disabled)
const usdtAmount = ref(0)
const fiatAmount = ref(0)

// Compute estimated $ENA
const formattedEna = computed(() => {
  const total = usdtAmount.value / priceUsd
  return isFinite(total) ? total.toFixed(2) : '0.00'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
/* no extra CSS needed—buttons use Tailwind’s disabled: utilities */
</style>
