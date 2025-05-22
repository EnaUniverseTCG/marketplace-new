<template>
  <div class="space-y-6 border border-enaYellow rounded-lg p-6 mb-6">
    <h2 class="text-2xl text-enaYellow font-semibold">NFT Staking</h2>
    <ul class="list-decimal list-inside space-y-1 text-gray-300">
      <li>Connect your wallet</li>
      <li>Select the ID of your NFT and how many to stake</li>
      <li>Approve transaction</li>
      <li>Claim rewards anytime</li>
    </ul>

    <div class="mt-4">
      <label class="block text-gray-300 mb-1">NFT Token ID</label>
      <input v-model.number="tokenId" type="number" min="0"
             class="w-32 p-2 bg-gray-800 rounded text-white" />
    </div>
    <div>
      <label class="block text-gray-300 mb-1">Amount to stake</label>
      <input v-model.number="amount" type="number" min="1"
             class="w-32 p-2 bg-gray-800 rounded text-white" />
    </div>

    <div class="flex space-x-4 mt-6">
      <button
        class="flex-1 px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg"
        :disabled="!signer"
        @click="$emit('stake', tokenId, amount)"
      >Stake NFTs</button>

      <button
        class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg"
        :disabled="!signer"
        @click="$emit('unstake', tokenId /* aqui use index, conforme tua lógica */)"
      >Unstake NFTs</button>

      <button
        class="flex-1 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg"
        :disabled="!signer"
        @click="$emit('claim')"
      >Claim Rewards</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps<{
  provider: any,
  signer: any,
  userAddress: string | null
}>()

const tokenId = ref(0)
const amount  = ref(1)
</script>
