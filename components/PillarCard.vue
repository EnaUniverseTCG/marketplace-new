<template>
  <NuxtLink :to="to" class="card group w-full h-48 perspective">
    <div
      class="card-inner relative w-full h-full rounded-lg border-2 border-enaYellow bg-black/60 transition-transform duration-500"
    >
      <div class="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 class="text-2xl font-semibold text-enaYellow mb-1">{{ title }}</h3>
          <p class="text-sm text-gray-200">{{ description }}</p>
        </div>
        <div class="self-end">
          <span class="text-enaYellow font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            →
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  to: string
}>()
</script>

<style scoped>
.perspective {
  perspective: 800px;
}
.card-inner {
  transform-style: preserve-3d;
  /* shadow neon suave */
  box-shadow: 0 0 10px rgba(255,214,0,0.4);
}
/* no hover: leve tilt + scale */
.group:hover .card-inner {
  transform: rotateX(6deg) rotateY(-6deg) scale(1.03);
  box-shadow: 0 0 20px rgba(255,214,0,0.6), 0 8px 16px rgba(0,0,0,0.4);
}
/* suaviza o movimento ao sair do hover */
.card-inner {
  will-change: transform, box-shadow;
}
</style>
