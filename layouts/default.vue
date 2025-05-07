<!-- layouts/default.vue -->
<template>
  <!-- Container principal: NÃO bloqueia o overflow -->
  <div class="relative w-full min-h-screen font-ena">

    <!-- Vídeo de fundo -->
    <video
      class="fixed top-0 left-0 w-full h-full object-cover z-0"
      src="/ena-bg-video.mp4"
      autoplay
      muted
      loop
      playsinline
    />

    <!-- Overlay escuro + Navbar + Conteúdo + Footer -->
    <div class="relative z-10 flex flex-col min-h-screen bg-black/50">

      <!-- Navbar fixa no topo (altura = h-16 = 4rem) -->
      <Navbar />

      <!-- Conteúdo rolável: adiciona pt-16 para que não fique por baixo da Navbar -->
      <main class="flex-grow pt-16 overflow-auto">
        <NuxtPage />
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
/* Nenhum outro ajuste CSS é necessário aqui */
</style>
