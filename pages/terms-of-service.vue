<template>
  <footer class="bg-enaBlack text-gray-300 font-ena pt-12">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      <!-- About -->
      <div class="space-y-2">
        <h3 class="text-white font-semibold text-lg">ENA Universe</h3>
        <p class="text-sm">
          The first TCG built by AI. Real cards, digital twins, and on-chain power.
        </p>
      </div>

      <!-- Useful Links -->
      <div>
        <h3 class="text-white font-semibold mb-2">Links</h3>
        <ul class="space-y-1 text-sm">
          <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
          <li><NuxtLink to="/marketplace" class="hover:text-white">Marketplace</NuxtLink></li>
          <li><NuxtLink to="/play" class="hover:text-white">Play</NuxtLink></li>
          <li><NuxtLink to="/tokenomics" class="hover:text-white">Tokenomics</NuxtLink></li>
          <li>
            <a href="https://t.me/EnaUniverse" target="_blank" class="hover:text-white">Contact Us</a>
          </li>
        </ul>
      </div>

      <!-- Community -->
      <div>
        <h3 class="text-white font-semibold mb-2">Community</h3>
        <ul class="space-y-1 text-sm">
          <li>
            <a href="https://t.me/EnaUniverse" target="_blank" class="hover:text-white">Telegram</a>
          </li>
          <li>
            <a href="https://x.com/enauniverseTCG" target="_blank" class="hover:text-white">X (formerly Twitter)</a>
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
            <a
              href="https://soneium.blockscout.com/address/0x32FE8378aa41De37F96D7578a313711500836bfB?tab=index"
              target="_blank"
              class="hover:text-white"
            >
              NFT Staking Contract
            </a>
          </li>
          <li>
            <a
              href="https://soneium.blockscout.com/address/0x29EeF959733826F5B4BaD0B367009D2bb452fFBb?tab=index"
              target="_blank"
              class="hover:text-white"
            >
              ENA Staking Contract
            </a>
          </li>
          <li>
            <a
              href="https://soneium.blockscout.com/token/0x4d465ee0827e073d81A3a024BFdcEaa84CAf410E?tab=token_transfers"
              target="_blank"
              class="hover:text-white"
            >
              ENA Token Contract
            </a>
          </li>
          <li>
            <a href="https://soneium.blockscout.com/" target="_blank" class="hover:text-white">
              Soneium Blockscout
            </a>
          </li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="text-white font-semibold mb-2">Legal</h3>
        <ul class="space-y-1 text-sm">
          <li>
            <NuxtLink to="/terms-and-services" class="hover:text-white">
              Terms of Service
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy-policy" class="hover:text-white">
              Privacy Policy
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cookie-policy" class="hover:text-white">
              Cookie Policy
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Credits -->
    <div class="mt-12 border-t border-gray-700 pt-6 pb-4 text-center text-xs text-gray-500">
      &copy; {{ new Date().getFullYear() }} ENA Universe. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// No extra logic needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
