<template>
  <div
    @click="onClick"
    class="group cursor-pointer rounded-2xl bg-gray-800 p-6 hover:bg-gray-700 transition"
  >
    <div class="text-4xl mb-4">
      <slot name="icon" />
    </div>
    <h3 class="text-2xl font-semibold text-enaYellow mb-2">{{ title }}</h3>
    <p class="text-gray-300">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
// Props tipadas
const props = defineProps<{
  title: string
  subtitle: string
}>()

// Emit tipado via object signature
const emit = defineEmits<{
  (e: 'click'): void
}>()

function onClick(event: MouseEvent) {
  emit('click')
}
</script>
