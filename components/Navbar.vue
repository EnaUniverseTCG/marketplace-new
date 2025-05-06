<template>
  <nav class="fixed w-full bg-enaBlack text-white font-ena z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-enaYellow">ENA Universe</NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center space-x-6">
        <li><NuxtLink to="/"            class="hover:text-enaYellow">Home</NuxtLink></li>
        <li><NuxtLink to="/play"        class="hover:text-enaYellow">Play</NuxtLink></li>
        <li><NuxtLink to="/marketplace" class="hover:text-enaYellow">Marketplace</NuxtLink></li>
        <li><NuxtLink to="/staking"     class="hover:text-enaYellow">Staking</NuxtLink></li>
        <li><NuxtLink to="/buy-ena"     class="hover:text-enaYellow">Buy $ENA</NuxtLink></li>
        <li><NuxtLink to="/card-stats"  class="hover:text-enaYellow">CardStats</NuxtLink></li>
        <li><NuxtLink to="/tokenomics"  class="hover:text-enaYellow">Tokenomics</NuxtLink></li>
        <li><NuxtLink to="/about"       class="hover:text-enaYellow">About</NuxtLink></li>
        <li class="relative">
          <NuxtLink to="/cart" class="hover:text-enaYellow">
            🛒
            <span
              v-if="cart.totalItems"
              class="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-black bg-enaYellow rounded-full"
            >
              {{ cart.totalItems }}
            </span>
          </NuxtLink>
        </li>
        <li>
          <template v-if="user">
            <button
              @click="onSignOut"
              class="px-3 py-1 border border-gray-500 rounded hover:bg-enaYellow hover:text-enaBlack transition"
            >Sair</button>
          </template>
          <template v-else>
            <NuxtLink
              to="/auth"
              class="px-3 py-1 border border-gray-500 rounded hover:bg-enaYellow hover:text-enaBlack transition"
            >Entrar</NuxtLink>
          </template>
        </li>
      </ul>

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
        <li><NuxtLink to="/"            @click="open = false">Home</NuxtLink></li>
        <li><NuxtLink to="/play"        @click="open = false">Play</NuxtLink></li>
        <li><NuxtLink to="/marketplace" @click="open = false">Marketplace</NuxtLink></li>
        <li><NuxtLink to="/staking"     @click="open = false">Staking</NuxtLink></li>
        <li><NuxtLink to="/buy-ena"     @click="open = false">Buy $ENA</NuxtLink></li>
        <li><NuxtLink to="/card-stats"  @click="open = false">CardStats</NuxtLink></li>
        <li><NuxtLink to="/tokenomics"  @click="open = false">Tokenomics</NuxtLink></li>
        <li><NuxtLink to="/about"       @click="open = false">About</NuxtLink></li>
        <li>
          <NuxtLink to="/cart" @click="open = false" class="relative">
            🛒 <span v-if="cart.totalItems"
                     class="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-black bg-enaYellow rounded-full">
                   {{ cart.totalItems }}
                 </span>
          </NuxtLink>
        </li>
        <li v-if="user">
          <button
            @click="onSignOut(); open = false"
            class="w-full text-left px-3 py-1 border border-gray-500 rounded hover:bg-enaYellow hover:text-enaBlack transition"
          >Sair</button>
        </li>
        <li v-else>
          <NuxtLink
            to="/auth"
            @click="open = false"
            class="block px-3 py-1 border border-gray-500 rounded hover:bg-enaYellow hover:text-enaBlack transition"
          >Entrar</NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useCartStore } from '~/stores/cart'

const open = ref(false)
const { user, signOut } = useAuth()
const cart = useCartStore()

function onSignOut() {
  signOut()
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }

/* dropdown fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
