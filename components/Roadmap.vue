<template>
  <div class="relative overflow-hidden py-8">
    <div class="flex items-center justify-between max-w-4xl mx-auto space-x-4">
      <button
        v-for="(step, i) in steps"
        :key="i"
        @click="selected = i"
        :class="[
          'flex-1 p-4 rounded-lg border-2 transition',
          selected === i
            ? 'bg-enaYellow border-enaYellow text-black'
            : 'bg-black/50 border-enaYellow text-enaYellow hover:bg-black/70'
        ]"
      >
        <div class="font-semibold">{{ step.title }}</div>
      </button>
    </div>
    <div class="mt-6 max-w-4xl mx-auto bg-black/60 p-6 rounded-lg text-gray-300">
      {{ steps[selected].details }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  steps: { title: string; details: string }[]
}>()

const selected = ref(0)
</script>

<style scoped>
/* tudo via Tailwind */
</style>
