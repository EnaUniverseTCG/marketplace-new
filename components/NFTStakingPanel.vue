<template>
  <div class="space-y-6 border border-enaYellow rounded-lg p-6 mb-6">
    <h2 class="text-2xl text-enaYellow font-semibold">NFT Staking</h2>
    <p class="text-gray-300">Stake your ENA Universe NFT cards to earn daily rewards</p>

    <ul class="list-decimal list-inside space-y-1 text-gray-300">
      <li>Connect your wallet</li>
      <li>Select how many NFTs to stake</li>
      <li>Approve transaction</li>
      <li>Claim rewards anytime</li>
    </ul>

    <!-- number input + calculator -->
    <div class="mt-4">
      <label class="block text-gray-300 mb-1">Number of NFTs to stake</label>
      <input
        v-model.number="nfts"
        type="number"
        min="1"
        class="w-32 p-2 bg-gray-800 rounded text-white"
      />
    </div>

    <div class="bg-gray-900 p-4 rounded mt-4">
      <p class="text-gray-400 text-sm mb-2">Estimated Rewards</p>
      <p>Daily: <span class="text-enaYellow">{{ daily }} $ENA</span></p>
      <p>Weekly: <span class="text-enaYellow">{{ weekly }} $ENA</span></p>
      <p>Monthly: <span class="text-enaYellow">{{ monthly }} $ENA</span></p>
    </div>

    <div class="flex space-x-4 mt-6">
      <button
        class="flex-1 px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90"
        :disabled="!connected || nfts<1"
        @click="$emit('stake', nfts)"
      >Stake NFTs</button>

      <button
        class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:brightness-90"
        :disabled="!connected"
        @click="$emit('unstake')"
      >Unstake NFTs</button>

      <button
        class="flex-1 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:brightness-90"
        :disabled="!connected"
        @click="$emit('claim')"
      >Claim Rewards</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps<{ connected: boolean }>()

const nfts = ref<number>(1)

// fixed 10 $ENA per NFT per day
const daily = computed(() => (nfts.value * 10).toLocaleString())
const weekly  = computed(() => (nfts.value * 10 * 7).toLocaleString())
const monthly = computed(() => (nfts.value * 10 * 30).toLocaleString())
</script>
