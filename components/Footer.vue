<template>
  <footer class="bg-enaBlack text-gray-300 font-ena pt-12">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      <!-- Sobre -->
      <div class="space-y-2">
        <h3 class="text-white font-semibold text-lg">ENA Universe</h3>
        <p class="text-sm">
          The first TCG built by AI. Real cards, digital twins, and on-chain power.
        </p>
      </div>

      <!-- Links úteis -->
      <div>
        <h3 class="text-white font-semibold mb-2">Links</h3>
        <ul class="space-y-1 text-sm">
          <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
          <li><NuxtLink to="/marketplace" class="hover:text-white">Marketplace</NuxtLink></li>
          <li><NuxtLink to="/play" class="hover:text-white">Play</NuxtLink></li>
          <li><NuxtLink to="/tokenomics" class="hover:text-white">Tokenomics</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <!-- Comunidade -->
      <div>
        <h3 class="text-white font-semibold mb-2">Comunidade</h3>
        <ul class="space-y-1 text-sm">
          <li>
            <a href="https://discord.gg/..." target="_blank" class="hover:text-white">Discord</a>
          </li>
          <li>
            <a href="https://twitter.com/..." target="_blank" class="hover:text-white">Twitter</a>
          </li>
          <li>
            <a href="https://opensea.io/collection/ena-universe" target="_blank" class="hover:text-white">OpenSea</a>
          </li>
        </ul>
      </div>

      <!-- Explore -->
      <div>
        <h3 class="text-white font-semibold mb-2">Explore</h3>
        <ul class="space-y-1 text-sm">
          <li>
            <a href="https://soneium.blockscout.com/" target="_blank" class="hover:text-white">
              Soneium Blockscout
            </a>
          </li>
          <!-- podes adicionar mais aqui -->
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="text-white font-semibold mb-2">Legal</h3>
        <ul class="space-y-1 text-sm">
          <li><NuxtLink to="/terms" class="hover:text-white">Terms of Service</NuxtLink></li>
          <li><NuxtLink to="/privacy" class="hover:text-white">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/cookie" class="hover:text-white">Cookie Policy</NuxtLink></li>
        </ul>
      </div>
    </div>

    <!-- Créditos -->
    <div class="mt-12 border-t border-gray-700 pt-6 pb-4 text-center text-xs text-gray-500">
      &copy; {{ new Date().getFullYear() }} ENA Universe. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica extra necessária por agora
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
