<template>
  <div class="space-y-6 border border-enaYellow rounded-lg p-6 mb-6">
    <h2 class="text-2xl text-enaYellow font-semibold">Token Staking</h2>
    <ul class="list-decimal list-inside space-y-1 text-gray-300">
      <li>Connect your wallet</li>
      <li>Enter amount to stake</li>
      <li>Approve transaction</li>
      <li>Claim rewards anytime</li>
    </ul>

    <div class="mt-4">
      <label class="block text-gray-300 mb-1">Amount to stake ($ENA)</label>
      <input v-model="amount" type="text"
             class="w-32 p-2 bg-gray-800 rounded text-white" />
    </div>

    <div class="flex space-x-4 mt-6">
      <button
        class="flex-1 px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg"
        :disabled="!signer"
        @click="$emit('stake', amount)"
      >Stake Tokens</button>

      <button
        class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg"
        :disabled="!signer"
        @click="$emit('unstake', amount)"
      >Unstake Tokens</button>

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

const amount = ref('')
</script>
