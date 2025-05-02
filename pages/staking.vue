<template>
  <div class="min-h-screen bg-enaBlack text-white font-ena p-6 flex flex-col">
    <NuxtLink to="/" class="text-sm text-gray-400 hover:text-enaYellow mb-4">
      ← Back to Home
    </NuxtLink>

    <h1 class="text-4xl font-bold text-enaYellow mb-8 text-center">
      ENA Universe Staking
    </h1>

    <div class="border border-enaYellow rounded-lg p-6 mb-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <p class="text-sm text-gray-400">Total Value Staked</p>
          <p class="text-2xl font-semibold text-enaYellow">1,245,678 $ENA</p>
        </div>
        <div>
          <p class="text-sm text-gray-400">Total NFTs Staked</p>
          <p class="text-2xl font-semibold text-enaYellow">3,456</p>
        </div>
        <div>
          <p class="text-sm text-gray-400">Your Pending Rewards</p>
          <p class="text-2xl font-semibold text-enaYellow">{{ pendingRewards }} $ENA</p>
        </div>
      </div>

      <div class="text-center mt-6 space-y-2">
        <button
          class="px-8 py-3 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90 transition"
          :disabled="!!userAddress"
          @click="connectWallet"
        >
          {{ userAddress ? 'Wallet Connected' : 'Connect Wallet' }}
        </button>

        <div v-if="userAddress" class="space-x-4">
          <a href="#" @click.prevent="refreshAll" class="text-enaYellow underline">Refresh now</a>
          <button
            class="px-6 py-2 bg-red-600 text-white rounded-lg"
            @click="disconnectWallet"
          >Disconnect Wallet</button>
        </div>

        <p v-if="userAddress" class="text-xs text-gray-400">
          Last updated: {{ lastUpdated }}
        </p>
      </div>
    </div>

    <div class="flex border-b border-gray-700 mb-6">
      <button
        class="px-4 py-2 flex-1 text-center"
        :class="tab==='nft' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        @click="tab='nft'"
      >NFT Staking</button>
      <button
        class="px-4 py-2 flex-1 text-center"
        :class="tab==='token' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        @click="tab='token'"
      >Token Staking</button>
    </div>

    <div class="flex-1 overflow-auto">
      <NFTStakingPanel
        v-if="tab==='nft'"
        :connected="!!userAddress"
        @stake="onNftStake"
        @unstake="onNftUnstake"
        @claim="onNftClaim"
      />
      <TokenStakingPanel
        v-else
        :connected="!!userAddress"
        @stake="onTokenStake"
        @unstake="onTokenUnstake"
        @claim="onTokenClaim"
      />
    </div>

    <Footer class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuth } from '~/composables/useAuth'
import NFTStakingPanel from '~/components/NFTStakingPanel.vue'
import TokenStakingPanel from '~/components/TokenStakingPanel.vue'
import Footer from '~/components/Footer.vue'

const { userAddress, connect, disconnect } = useAuth()
const tab = ref<'nft'|'token'>('nft')
const pendingRewards = computed(() => 30)  // stub

const lastUpdated = new Date().toLocaleString('pt-PT')

// Core actions:
function connectWallet() {
  connect().catch(e => alert(e.message))
}
function disconnectWallet() {
  disconnect()
}

// stubs for panel events:
function onNftStake()      { alert('Staking NFTs …') }
function onNftUnstake()    { alert('Unstaking NFTs …') }
function onNftClaim()      { alert('Claiming NFT rewards …') }
function onTokenStake()    { alert('Staking $ENA tokens …') }
function onTokenUnstake()  { alert('Unstaking $ENA tokens …') }
function onTokenClaim()    { alert('Claiming $ENA rewards …') }

function refreshAll() {
  // re-fetch real data
  alert('Refreshing your staking dashboard …')
}
</script>
