<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Form token -->
    <div class="border border-enaYellow rounded-lg p-6 space-y-4">
      <h2 class="text-2xl text-enaYellow font-semibold">Token Staking</h2>
      <label class="block text-gray-300">Amount of $ENA to stake</label>
      <input
        v-model.number="amount"
        type="number" min="0"
        class="w-full mt-1 p-3 bg-gray-800 rounded text-white"
      />
      <label class="block text-gray-300">Lock period (days)</label>
      <select v-model="lockDays" class="w-full mt-1 p-3 bg-gray-800 rounded text-white">
        <option :value="0">Flexible</option>
        <option :value="30">30 days</option>
        <option :value="60">60 days</option>
        <option :value="90">90 days</option>
      </select>

      <!-- Calculadora -->
      <div>
        <h3 class="text-lg text-enaYellow font-semibold mb-2">Estimated Rewards</h3>
        <ul class="space-y-1 text-gray-300">
          <li>Daily: <strong>{{ dailyReward }} $ENA</strong></li>
          <li>Weekly: <strong>{{ weeklyReward }} $ENA</strong></li>
          <li>Monthly: <strong>{{ monthlyReward }} $ENA</strong></li>
          <li>Yearly: <strong>{{ yearlyReward }} $ENA</strong></li>
        </ul>
      </div>

      <!-- ações -->
      <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        <button
          class="flex-1 px-4 py-2 bg-enaYellow text-black font-semibold rounded hover:brightness-90"
          :disabled="!connected || amount <= 0"
          @click="emitStake"
        >Stake Now</button>
        <button
          class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:opacity-90"
          :disabled="!connected"
          @click="onUnstake"
        >Unstake</button>
        <button
          class="flex-1 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:opacity-90"
          :disabled="!connected"
          @click="emitClaim"
        >Claim Rewards</button>
      </div>
    </div>

    <!-- Saldo -->
    <div class="border border-enaYellow rounded-lg p-6 space-y-4 text-center">
      <h3 class="text-2xl text-enaYellow font-semibold">Your $ENA Balance</h3>
      <p class="text-3xl font-bold">{{ balance }} $ENA</p>
      <button
        class="w-full mt-4 px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90 transition"
        :disabled="connected"
        @click="emitConnect"
      >
        {{ connected ? 'Wallet Connected' : 'Connect Wallet' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, defineProps } from 'vue'
import { useAuth } from '~/composables/useAuth'

const props = defineProps<{ connected: boolean }>()
const emit  = defineEmits<{
  (e: 'stake'): void
  (e: 'unstake', amt: number): void
  (e: 'claim'): void
}>()

const { connectWallet } = useAuth()

const amount   = ref(0)
const lockDays = ref(0)
const balance  = ref(0)   // trocar por fetch real

const baseAPY   = 0.10
const lockBonus = computed(() => {
  if (lockDays.value === 30) return 0.02
  if (lockDays.value === 60) return 0.05
  if (lockDays.value === 90) return 0.10
  return 0
})

const dailyReward   = computed(() => ((amount.value*(baseAPY+lockBonus.value))/365).toFixed(2))
const weeklyReward  = computed(() => ( +dailyReward.value * 7 ).toFixed(2))
const monthlyReward = computed(() => ( +dailyReward.value * 30 ).toFixed(2))
const yearlyReward  = computed(() => ( amount.value*(baseAPY+lockBonus.value) ).toFixed(2))

function emitStake() {
  emit('stake')
}
function onUnstake() {
  const q = parseFloat(prompt('How many $ENA to unstake?', '0') || '0')
  if (q > 0) emit('unstake', q)
}
function emitClaim() {
  emit('claim')
}
function emitConnect() {
  connectWallet()
}
</script>
