<template>
  <div class="min-h-screen bg-enaBlack text-white font-ena p-6 flex flex-col">
    <!-- Back to Home -->
    <NuxtLink to="/" class="text-sm text-gray-400 hover:text-enaYellow mb-4 inline-block">
      ← Back to Home
    </NuxtLink>

    <!-- Título -->
    <h1 class="text-4xl font-bold text-enaYellow mb-6 text-center">
      ENA Universe Economy
    </h1>

    <!-- Abas Overview / Tokenomics -->
    <div class="flex border-b border-gray-700 mb-8">
      <button
        @click="tab = 'overview'"
        :class="tab === 'overview' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        class="px-4 py-2 flex-1 text-center"
      >Overview</button>
      <button
        @click="tab = 'tokenomics'"
        :class="tab === 'tokenomics' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        class="px-4 py-2 flex-1 text-center"
      >Tokenomics</button>
    </div>

    <div class="flex-1 overflow-auto space-y-8">
      <!-- OVERVIEW -->
      <div v-if="tab === 'overview'" class="space-y-6">
        <!-- ENA Token & NFT Cards panels -->
        <!-- ENA Token -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="border border-enaYellow rounded-lg p-6 space-y-4">
            <h2 class="text-2xl text-enaYellow font-semibold">ENA Token ($ENA)</h2>
            <p class="text-gray-300">The native currency of the ENA Universe ecosystem.</p>
            <p class="text-gray-300">
              The ENA Token ($ENA) is built on the Soneium blockchain, powering the entire ENA Universe ecosystem. It enables players to participate in the game economy, stake for rewards, and unlock exclusive content.
            </p>
            <div class="space-y-1">
              <p class="text-sm text-gray-400">Total Supply:</p>
              <p class="text-lg font-semibold">2,100,000,000 $ENA</p>
            </div>
            <div class="space-y-1">
              <p class="text-sm text-gray-400">Blockchain:</p>
              <p class="text-lg font-semibold">Soneium (SNE)</p>
            </div>
            <button
              class="w-full mt-4 px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90"
              @click="$router.push('/staking')"
            >
              Connect Wallet
            </button>
          </div>
          <!-- NFT Cards -->
          <div class="border border-enaYellow rounded-lg p-6 space-y-4">
            <h2 class="text-2xl text-enaYellow font-semibold">NFT Cards</h2>
            <p class="text-gray-300">Collectible digital assets with real utility.</p>
            <p class="text-gray-300">
              ENA Universe NFT cards are unique digital collectibles that serve as both game pieces and staking assets. Each card is minted on the Soneium blockchain with verifiable authenticity and ownership.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button class="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700">
                Common Cards<br><span class="text-xs">Lower Rewards</span>
              </button>
              <button class="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700">
                Legendary Cards<br><span class="text-xs">Higher Rewards</span>
              </button>
              <button
                class="w-full col-span-2 px-4 py-2 bg-enaYellow text-black font-semibold rounded hover:brightness-90"
                @click="$router.push('/marketplace')"
              >
                Explore Cards
              </button>
            </div>
          </div>
        </div>
        <!-- Blockchain Implementation & Airdrop -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="border border-enaYellow rounded-lg p-6 space-y-4">
            <h3 class="text-xl font-semibold text-enaYellow">Blockchain Implementation</h3>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>All cards minted as NFTs on the Soneium blockchain</li>
              <li>Unique QR code for on-chain verification</li>
              <li>Physical cards with QR codes for collection tracking</li>
              <li>Direct access to updates and ecosystem development</li>
            </ul>
            <h4 class="mt-6 text-lg font-semibold text-enaYellow">Airdrop & NFT-Based Rewards</h4>
            <p class="text-gray-300 mb-2">
              Every 6 months, holders of ENA Universe NFTs will receive an airdrop of $ENA and possibly additional NFT cards.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-gray-800 p-4 rounded text-center">
                <p class="font-semibold">Common NFTs</p>
                <p class="text-xs">Lower airdrop rewards</p>
              </div>
              <div class="bg-gray-800 p-4 rounded text-center">
                <p class="font-semibold">Legendary NFTs</p>
                <p class="text-xs">Higher airdrop rewards</p>
              </div>
              <div class="bg-gray-800 p-4 rounded text-center">
                <p class="font-semibold">Special Mana NFTs</p>
                <p class="text-xs">Highest tier airdrops and in-game usage</p>
              </div>
            </div>
          </div>
          <div class="border border-enaYellow rounded-lg p-6 space-y-4">
            <h3 class="text-xl font-semibold text-enaYellow">Sustainability & Growth</h3>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Early adopters benefit the most, receiving higher returns through initial NFT airdrops and rewards</li>
              <li>The model ensures organic growth, with the token and NFT ecosystem evolving based on real community engagement</li>
              <li>Long-term goal: establish $ENA as a valuable token both within the ENA Universe ecosystem and the broader blockchain gaming space</li>
            </ul>
            <button
              class="mt-4 px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90"
              @click="$router.push('/staking')"
            >
              Learn about Staking
            </button>
          </div>
        </div>
      </div>

      <!-- TOKENOMICS -->
      <div v-else class="space-y-6">
        <div class="border border-enaYellow rounded-lg p-6">
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <!-- Pie Chart -->
            <svg viewBox="0 0 32 32" class="w-64 h-64">
              <circle
                v-for="(slice, i) in slices"
                :key="i"
                r="16" cx="16" cy="16"
                fill="transparent" stroke-width="32"
                :stroke="slice.color"
                :stroke-dasharray="slice.percent + ' ' + (100 - slice.percent)"
                :stroke-dashoffset="slice.offset"
              />
            </svg>
            <!-- Legend -->
            <div class="space-y-2">
              <h3 class="text-2xl text-enaYellow font-semibold">ENA Token Distribution</h3>
              <ul class="space-y-1">
                <li v-for="item in legend" :key="item.label" class="flex items-center space-x-2">
                  <span :style="{ backgroundColor: item.color }" class="w-3 h-3 rounded-full inline-block"></span>
                  <span>{{ item.label }} {{ item.percent }}% ({{ item.amount }})</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 p-4 bg-gray-900 rounded">
            <p class="text-gray-300">
              The tokenomics structure is designed to provide strong incentives for early adoption while ensuring the long-term sustainability of the ENA Universe ecosystem. By allocating a substantial amount to NFT and token staking, we aim to reward users who commit to the ecosystem early.
            </p>
            <p class="mt-2 text-gray-300">
              The liquidity pools will provide essential market depth and stability, while marketing and airdrops will help drive awareness and adoption. The team’s allocation ensures that there is continuous development and support for the ecosystem, while a well-balanced distribution ensures the value of the token will grow over time.
            </p>
          </div>

          <!-- Vesting & Utility -->
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold text-enaYellow">Vesting Schedule</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li>Team tokens: 24-month vesting period</li>
                <li>Marketing tokens: 12-month vesting</li>
                <li>Staking rewards: released daily</li>
                <li>Liquidity pools: locked 6 months</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-enaYellow">Token Utility</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li>In-game item purchases and upgrades</li>
                <li>Entry fees for tournaments</li>
                <li>Exclusive in-game events</li>
                <li>Holder-exclusive content and staking</li>
              </ul>
            </div>
          </div>

          <div class="mt-8 text-center">
            <button
              class="px-6 py-3 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90"
              @click="$router.push('/staking')"
            >
              Stake $ENA
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tab = ref<'overview'|'tokenomics'>('overview')

const slices = computed(() => {
  const percents = [30, 30, 20, 10, 5, 5]
  const colors = ['#22c55e','#3b82f6','#a855f7','#f59e0b','#ef4444','#f97316']
  let offset = 0
  return percents.map((p, i) => {
    const slice = { percent: p, color: colors[i], offset }
    offset -= p
    return slice
  })
})

const legend = [
  { label: 'NFT Staking',     percent: 30, amount: '630 M $ENA', color: '#22c55e' },
  { label: 'Token Staking',   percent: 30, amount: '630 M $ENA', color: '#3b82f6' },
  { label: 'Liquidity Pools', percent: 20, amount: '420 M $ENA', color: '#a855f7' },
  { label: 'Marketing',       percent: 10, amount: '210 M $ENA', color: '#f59e0b' },
  { label: 'Team',            percent: 5,  amount: '105 M $ENA', color: '#ef4444' },
  { label: 'Airdrop',         percent: 5,  amount: '105 M $ENA', color: '#f97316' },
]
</script>

<style scoped>
/* estilos adicionais, se necessário */
</style>
