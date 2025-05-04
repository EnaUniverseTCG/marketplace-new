<template>
  <nav class="p-4 flex justify-between items-center bg-enaBlack text-white font-ena">
    <!-- Logo / Título -->
    <div class="text-xl font-bold text-enaYellow">ENA Universe</div>

    <!-- Links -->
    <div class="flex items-center space-x-6">
      <NuxtLink to="/"            class="hover:text-enaYellow">Home</NuxtLink>
      <NuxtLink to="/play"        class="hover:text-enaYellow">Play</NuxtLink>
      <NuxtLink to="/marketplace" class="hover:text-enaYellow">Marketplace</NuxtLink>
      <NuxtLink to="/staking"     class="hover:text-enaYellow">Staking</NuxtLink>
      <NuxtLink to="/buy-ena"     class="hover:text-enaYellow">Buy $ENA</NuxtLink>
      <NuxtLink to="/card-stats"  class="hover:text-enaYellow">CardStats</NuxtLink>
      <NuxtLink to="/tokenomics"  class="hover:text-enaYellow">Tokenomics</NuxtLink>
      <NuxtLink to="/about"       class="hover:text-enaYellow">About</NuxtLink>

      <!-- Carrinho -->
      <NuxtLink to="/cart" class="relative hover:text-enaYellow">
        🛒
        <span
          v-if="cart.totalItems"
          class="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-black bg-enaYellow rounded-full"
        >
          {{ cart.totalItems }}
        </span>
      </NuxtLink>

      <!-- Autenticação -->
      <template v-if="user">
        <button
          @click="onSignOut"
          class="ml-4 px-3 py-1 border border-gray-500 rounded hover:bg-enaYellow hover:text-enaBlack transition"
        >
          Sair
        </button>
      </template>
      <template v-else>
        <NuxtLink
          to="/auth"
          class="ml-4 px-3 py-1 border border-gray-500 rounded hover:bg-enaYellow hover:text-enaBlack transition"
        >
          Entrar
        </NuxtLink>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import { useCartStore } from '~/stores/cart'

const { user, signOut } = useAuth()
const cart = useCartStore()

function onSignOut() {
  signOut()
}
</script>

<style scoped>
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
