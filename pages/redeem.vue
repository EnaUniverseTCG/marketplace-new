<template>
  <div class="min-h-screen bg-black text-white font-ena p-6">
    <NuxtLink to="/" class="text-gray-500 hover:text-enaYellow mb-6 inline-block">
      ← Back to Home
    </NuxtLink>

    <h1 class="text-4xl md:text-5xl text-center text-enaYellow font-bold mb-12">
      ENA Universe Redemption
    </h1>

    <!-- STEP 1: CONNECT WALLET -->
    <section class="max-w-md mx-auto bg-[#111] p-6 rounded-lg mb-8">
      <h2 class="text-2xl text-enaYellow font-semibold mb-4">Step 1: Connect Wallet</h2>
      <button
        class="w-full px-6 py-3 bg-enaYellow text-black font-bold rounded-lg hover:brightness-90 transition disabled:opacity-50"
        :disabled="!!userAddress"
        @click="connectWallet"
      >
        {{ userAddress ? 'Wallet Connected' : 'Connect Wallet' }}
      </button>
      <p v-if="userAddress" class="mt-2 text-sm text-gray-400">
        Connected: {{ userAddress }}
      </p>
    </section>

    <!-- STEP 2: VERIFY OWNERSHIP -->
    <section class="max-w-md mx-auto bg-[#111] p-6 rounded-lg mb-8">
      <h2 class="text-2xl text-enaYellow font-semibold mb-4">Step 2: Verify Ownership</h2>
      <button
        class="w-full px-6 py-3 bg-gradient-to-r from-enaYellow to-yellow-600 text-black font-bold rounded-lg hover:scale-105 transition disabled:opacity-50"
        :disabled="!userAddress || checking"
        @click="checkOwnership"
      >
        {{ checking ? 'Checking…' : 'Check My NFTs' }}
      </button>

      <!-- once checked, show eligible IDs -->
      <div v-if="checked">
        <div v-if="ownsAny" class="mt-4 p-4 bg-black/40 rounded-lg">
          <p class="text-gray-300 mb-2">✅ You may redeem these NFT IDs:</p>
          <ul class="list-disc list-inside text-gray-200">
            <li v-for="id in ownedIds" :key="id">ID {{ id }}</li>
          </ul>
        </div>
        <div v-else class="mt-4 p-4 bg-black/40 rounded-lg">
          <p class="text-red-500">⚠️ You don’t own any ENA Universe NFTs yet.</p>
        </div>
      </div>
    </section>

    <!-- STEP 3: SHIPPING INFO -->
    <section class="max-w-md mx-auto bg-[#111] p-6 rounded-lg mb-12">
      <h2 class="text-2xl text-enaYellow font-semibold mb-4">Step 3: Shipping Information</h2>

      <div class="mb-4 p-4 bg-black/50 rounded-lg">
        <p class="text-enaYellow font-bold text-center">
          SHIPPING FEE: €11<span class="text-sm"> (flat rate per shipment)</span>
        </p>
      </div>

      <form @submit.prevent class="space-y-4">
        <label class="block">
          <span class="text-gray-400">Email</span>
          <input
            v-model="form.email"
            :disabled="!ownsAny"
            type="email"
            placeholder="you@example.com"
            class="mt-1 w-full px-3 py-2 rounded bg-black/60 border border-gray-700 focus:border-enaYellow outline-none disabled:opacity-50"
          />
        </label>

        <label class="block">
          <span class="text-gray-400">Full Name</span>
          <input
            v-model="form.name"
            :disabled="!ownsAny"
            type="text"
            placeholder="John Doe"
            class="mt-1 w-full px-3 py-2 rounded bg-black/60 border border-gray-700 focus:border-enaYellow outline-none disabled:opacity-50"
          />
        </label>

        <label class="block">
          <span class="text-gray-400">Street Address</span>
          <input
            v-model="form.street"
            :disabled="!ownsAny"
            type="text"
            placeholder="123 Main St, Apt 4"
            class="mt-1 w-full px-3 py-2 rounded bg-black/60 border border-gray-700 focus:border-enaYellow outline-none disabled:opacity-50"
          />
        </label>

        <label class="block">
          <span class="text-gray-400">Postal Code</span>
          <input
            v-model="form.postal"
            :disabled="!ownsAny"
            type="text"
            placeholder="10001"
            class="mt-1 w-full px-3 py-2 rounded bg-black/60 border border-gray-700 focus:border-enaYellow outline-none disabled:opacity-50"
          />
        </label>

        <label class="block">
          <span class="text-gray-400">City</span>
          <input
            v-model="form.city"
            :disabled="!ownsAny"
            type="text"
            placeholder="New York"
            class="mt-1 w-full px-3 py-2 rounded bg-black/60 border border-gray-700 focus:border-enaYellow outline-none disabled:opacity-50"
          />
        </label>
        <label class="block">
          <span class="text-gray-400">Country</span>
          <input
            v-model="form.country"
            :disabled="!ownsAny"
            type="text"
            placeholder="USA"
            class="mt-1 w-full px-3 py-2 rounded bg-black/60 border border-gray-700 focus:border-enaYellow outline-none disabled:opacity-50"
          />
        </label>

        <!-- Coming soon button -->
        <button
          class="w-full mt-4 px-6 py-3 bg-enaYellow text-black font-bold rounded-lg hover:brightness-90 transition disabled:opacity-50"
          :disabled="true"
        >
          Coming Soon – Production In Progress
        </button>
        <p class="mt-2 text-center italic text-gray-400 text-sm">
          Redemption will be enabled as soon as physical cards are printed!
        </p>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { ethers } from 'ethers'
import { useAuth } from '~/composables/useAuth'

// --- CONFIGURE YOUR CONTRACT BELOW ---
const NFT_STAKING_ADDRESS = '0x32FE8378aa41De37F96D7578a313711500836bfB'
const NFT_STAKING_ABI = [
  'function balanceOf(address,uint256) view returns (uint256)'
]
// list here all collectible token IDs you support:
const ALL_IDS = [10, 300, 354]

// --- COMPOSABLE + STATE ---
const { userAddress, provider, connect } = useAuth()
const checked   = ref(false)
const checking  = ref(false)
const ownedIds  = ref<number[]>([])
const ownsAny   = computed(() => ownedIds.value.length > 0)

// shipping form data
const form = reactive({
  email:   '',
  name:    '',
  street:  '',
  postal:  '',
  city:    '',
  country: ''
})

// connect
const connectWallet = async () => {
  await connect()
}

// ownership check
async function checkOwnership() {
  if (!userAddress.value || !provider.value) return
  checking.value = true
  // read-only contract
  const contract = new ethers.Contract(NFT_STAKING_ADDRESS, NFT_STAKING_ABI, provider.value)
  const found: number[] = []
  for (const id of ALL_IDS) {
    const bal = await contract.balanceOf(userAddress.value, id)
    if (bal.gt(0)) found.push(id)
  }
  ownedIds.value = found
  checked.value = true
  checking.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
