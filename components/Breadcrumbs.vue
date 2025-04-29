<template>
  <nav class="text-sm mb-6" aria-label="Breadcrumb">
    <ol class="list-reset flex text-enaWhite">
      <li><NuxtLink to="/" class="hover:text-enaYellow">Home</NuxtLink></li>
      <li><span class="mx-2">/</span></li>
      <li><NuxtLink to="/marketplace" class="hover:text-enaYellow">Marketplace</NuxtLink></li>
      <li v-if="current"><span class="mx-2">/</span></li>
      <li v-if="current" class="font-semibold text-enaYellow">{{ current }}</li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ current?: string }>()
</script>
