<template>
  <div class="relative min-h-screen bg-enaBlack text-white font-ena p-6">
    <NuxtLink to="/marketplace" class="text-enaYellow hover:underline mb-4 inline-block">
      ← Back to Marketplace
    </NuxtLink>

    <h1 class="text-4xl font-bold text-enaYellow mb-6">
      Why Hybrid Card #{{ id }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 1) Physical Card -->
      <div class="border border-enaYellow rounded-lg p-4 space-y-2">
        <h2 class="text-2xl font-semibold">Physical Card</h2>
        <p>High-quality printed card, shipped to your door.</p>
        <img
          src="/cards/placeholder-deck1.png"
          alt="Physical Card"
          class="w-full object-cover rounded"
        />
      </div>

      <!-- 2) Digital Twin -->
      <div class="border border-enaYellow rounded-lg p-4 space-y-2">
        <h2 class="text-2xl font-semibold">Digital Twin</h2>
        <p>
          On-chain NFT version: tradeable on OpenSea<br/>
          Daily staking rewards • Marketplace sales • In‑game utility
        </p>
        <img
          src="/cards/placeholder-deck1-nft.png"
          alt="Digital Twin NFT"
          class="w-full object-cover rounded"
        />
      </div>
    </div>

    <!-- 3) How to Get It -->
    <div class="mt-8 bg-gray-900/50 p-6 rounded space-y-4">
      <h3 class="text-2xl text-enaYellow font-semibold">How to claim your Digital Twin</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-300">
        <li>Install MetaMask (or your preferred wallet).</li>
        <li>Add the Soneium network:
          <pre class="inline-block bg-black/70 p-2 rounded font-mono">
Network Name: Soneium
RPC URL:     https://rpc.soneium.io
Chain ID:    1234
Symbol:      SNEA
Explorer:    https://explorer.soneium.io
          </pre>
        </li>
        <li>Copy your wallet address and, in checkout, select “Include Digital Twin”.</li>
        <li>To verify ownership later, connect your wallet on
          <a href="https://opensea.io" target="_blank" class="text-enaYellow underline">
            OpenSea
          </a>.
        </li>
      </ul>
    </div>

    <!-- 4) Benefits -->
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gray-900/50 p-4 rounded">
        <h4 class="font-semibold text-lg">Digital Advantages</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mt-2">
          <li>Earn daily staking rewards in $ENA.</li>
          <li>Instant global marketplace trading.</li>
          <li>In‑game unlocks & special tournament passes.</li>
        </ul>
      </div>
      <div class="bg-gray-900/50 p-4 rounded">
        <h4 class="font-semibold text-lg">Physical Advantages</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-1 mt-2">
          <li>Premium cardstock with holo‑foil finish.</li>
          <li>Collector’s edition numbered sleeve.</li>
          <li>Signed by the AI‑driven design team.</li>
        </ul>
      </div>
    </div>

    <!-- 5) Next Step -->
    <div class="mt-10 text-center">
      <button
        @click="goToCheckout"
        class="px-8 py-3 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90 transition"
      >
        Continue to Checkout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from '#imports'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

function goToCheckout() {
  // agora vai para a mesma rota do checkout normal (/checkout/ID)
  router.push(`/checkout/${id}`)
}
</script>

<style scoped>
/* ajustes finos se quiseres */
</style>
