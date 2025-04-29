<template>
  <div class="flex flex-col items-center space-y-6">
    <!-- Wheel Display -->
    <div class="relative w-64 h-64">
      <div
        class="absolute inset-0 rounded-full border-4 border-ena-yellow transition-transform duration-[3500ms] ease-out"
        :style="{ transform: `rotate(${rotation}deg)`, background }"
      />
      <div class="absolute inset-0 flex items-center justify-center text-3xl">
        ✴️
      </div>
      <div class="absolute top-[-14px] left-1/2 transform -translate-x-1/2 z-10">
        <div class="w-0 h-0 border-l-8 border-r-8 border-b-[20px] border-l-transparent border-r-transparent border-b-red-600 animate-pulse" />
      </div>
    </div>

    <!-- Spin Button -->
    <button
      @click="spinWheel"
      :disabled="spinning || !participants.length"
      class="bg-ena-yellow text-black font-bold px-4 py-2 rounded hover:bg-ena-blue transition disabled:opacity-50"
    >
      {{ spinning ? 'Spinning...' : 'Spin the Wheel' }}
    </button>

    <!-- Winner Display -->
    <p v-if="winner" class="text-xl mt-4 text-ena-green">
      🎉 Winner: <span class="font-bold">{{ winner }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  participants: string[]
}
const props = defineProps<Props>()

const rotation = ref(0)
const winner = ref<string|null>(null)
const spinning = ref(false)

// recompute gradient
const background = computed(() => {
  if (!props.participants.length) return '#222'
  const slice = 100 / props.participants.length
  return `conic-gradient(${props.participants
    .map((_, i) =>
      `${i % 2 === 0 ? '#FFD600' : '#00BFFF'} ${i * slice}% ${(i + 1) * slice}%`
    )
    .join(',')})`
})

function spinWheel() {
  if (!props.participants.length) return
  spinning.value = true
  const idx = Math.floor(Math.random() * props.participants.length)
  const sliceAngle = 360 / props.participants.length
  rotation.value = 360 * 5 + sliceAngle * idx + sliceAngle / 2
  setTimeout(() => {
    winner.value = props.participants[idx]
    spinning.value = false
  }, 4000)
}
</script>

<style scoped>
/* nada extra */
</style>
