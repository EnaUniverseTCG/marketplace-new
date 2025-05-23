<template>
  <nav class="fixed w-full bg-enaBlack text-white font-ena z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-enaYellow">ENA Universe</NuxtLink>

      <!-- Desktop links + Launch DAPP -->
      <div class="flex items-center space-x-6">
        <ul class="hidden md:flex items-center space-x-6">
          <li><NuxtLink to="/" class="hover:text-enaYellow">Home</NuxtLink></li>
          <li><NuxtLink to="/play" class="hover:text-enaYellow">Play</NuxtLink></li>
          <!-- Marketplace now points to OpenSea collection -->
          <li>
            <a
              href="https://opensea.io/collection/ena-universe"
              target="_blank"
              rel="noopener"
              class="hover:text-enaYellow"
            >Marketplace</a>
          </li>
          <li><NuxtLink to="/staking" class="hover:text-enaYellow">Staking</NuxtLink></li>
          <li><NuxtLink to="/card-stats" class="hover:text-enaYellow">CardStats</NuxtLink></li>
          <li><NuxtLink to="/tokenomics" class="hover:text-enaYellow">Tokenomics</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-enaYellow">About</NuxtLink></li>
        </ul>

        <!-- Launch DAPP Button -->
        <a
          href="https://dapp.enauniversetcg.blog/"
          target="_blank"
          rel="noopener"
          class="relative inline-block px-4 py-1 font-semibold text-base rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-enaBlack transform transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none shadow-lg"
        >
          Launch DAPP
          <span class="absolute inset-0 rounded-xl border-2 border-yellow-300 opacity-75 animate-ping"></span>
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button @click="open = !open" class="md:hidden text-white">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <transition name="fade">
      <ul v-if="open" class="md:hidden bg-enaBlack/95 text-white space-y-2 px-4 py-4">
        <li><NuxtLink to="/" @click="open = false">Home</NuxtLink></li>
        <li><NuxtLink to="/play" @click="open = false">Play</NuxtLink></li>
        <li>
          <a
            href="https://opensea.io/collection/ena-universe"
            target="_blank"
            rel="noopener"
            @click="open = false"
            class="block hover:text-enaYellow"
          >Marketplace</a>
        </li>
        <li><NuxtLink to="/staking" @click="open = false">Staking</NuxtLink></li>
        <li><NuxtLink to="/card-stats" @click="open = false">CardStats</NuxtLink></li>
        <li><NuxtLink to="/tokenomics" @click="open = false">Tokenomics</NuxtLink></li>
        <li><NuxtLink to="/about" @click="open = false">About</NuxtLink></li>
        <!-- Launch DAPP Link Mobile -->
        <li>
          <a
            href="https://dapp.enauniversetcg.blog/"
            target="_blank"
            rel="noopener"
            @click="open = false"
            class="relative block text-center px-3 py-1 font-semibold text-base rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-enaBlack transform transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none shadow-lg"
          >
            Launch DAPP
            <span class="absolute inset-0 rounded-xl border-2 border-yellow-300 opacity-75 animate-ping"></span>
          </a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

.font-ena { font-family: 'Orbitron', sans-serif; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>