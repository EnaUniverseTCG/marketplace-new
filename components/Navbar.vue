<template>
  <nav class="p-4 flex justify-between items-center bg-enaBlack text-enaWhite font-ena">
    <div class="flex flex-col">
      <div class="text-xl font-bold text-enaYellow">ENA Universe</div>
      <p v-if="userAddress" class="text-xs text-gray-400 mt-1">
        {{ userAddress.slice(0,6) }}…{{ userAddress.slice(-4) }}
      </p>
    </div>
    <div class="flex items-center space-x-6">
      <template v-if="!hideLinks">
        <NuxtLink to="/" class="hover:text-enaYellow">Home</NuxtLink>
        <NuxtLink to="/play" class="hover:text-enaYellow">Play</NuxtLink>
        <NuxtLink to="/marketplace" class="hover:text-enaYellow">Marketplace</NuxtLink>
        <NuxtLink to="/staking" class="hover:text-enaYellow">Staking</NuxtLink>
        <NuxtLink to="/airdrop" class="hover:text-enaYellow">Airdrop</NuxtLink>
        <NuxtLink to="/tokenomics" class="hover:text-enaYellow">Tokenomics</NuxtLink>
        <NuxtLink to="/about" class="hover:text-enaYellow">About</NuxtLink>

        <NuxtLink to="/cart" class="relative hover:text-enaYellow">
          🛒
          <span v-if="cart.totalItems" class="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-enaYellow rounded-full">
            {{ cart.totalItems }}
          </span>
        </NuxtLink>

        <template v-if="userAddress">
          <button @click="disconnectWallet" class="ml-4 px-3 py-1 border rounded hover:bg-red-600 hover:text-white">
            Disconnect Wallet
          </button>
        </template>
        <template v-else>
          <NuxtLink to="/auth" class="ml-4 px-3 py-1 border rounded hover:bg-enaYellow hover:text-enaBlack">
            Entrar
          </NuxtLink>
        </template>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useAuth }     from '~/composables/useAuth'
import { useCartStore } from '@/stores/cart'

const props = defineProps<{ hideLinks?: boolean }>()
const { userAddress, disconnectWallet } = useAuth()
const cart = useCartStore()
</script>
