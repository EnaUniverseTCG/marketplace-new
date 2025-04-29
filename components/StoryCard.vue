<!-- components/StoryCard.vue -->

<template>
  <div
    class="relative p-6 rounded-xl border-2 transition-transform hover:scale-[1.03] hover:shadow-2xl"
    :class="borderClass"
  >
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-2xl font-semibold mb-2" :class="textClass">
      {{ title }}
    </h3>
    <p class="text-sm leading-snug text-gray-200">{{ description }}</p>
    <!-- animação sutil de “fragment” girando -->
    <div
      class="absolute top-4 right-4 w-8 h-8 opacity-20 animate-spin-slow"
      :class="bgClass"
      style="border-radius: 50%;"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  color: 'enaBlue' | 'enaGreen' | 'enaRed' | 'enaWhite'
}>()

const colorMap = {
  enaBlue: { border: 'border-enaBlue', text: 'text-enaBlue', bg: 'bg-enaBlue' },
  enaGreen: { border: 'border-enaGreen', text: 'text-enaGreen', bg: 'bg-enaGreen' },
  enaRed: { border: 'border-enaRed', text: 'text-enaRed', bg: 'bg-enaRed' },
  enaWhite: { border: 'border-enaWhite', text: 'text-enaWhite', bg: 'bg-enaWhite' },
}

const { border, text, bg } = colorMap[defineProps().color]
const borderClass = border
const textClass = text
const bgClass = bg
</script>
