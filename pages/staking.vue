<template>
  <div class="min-h-screen bg-black text-white font-ena p-8">
    <!-- Back link + title -->
    <NuxtLink to="/" class="text-sm text-gray-400 hover:text-enaYellow mb-4 inline-block">
      ← Back to Home
    </NuxtLink>
    <h1 class="text-5xl font-bold text-enaYellow mb-12 text-center">
      ENA Universe Staking Guide
    </h1>

    <!-- Rarity Rates Row -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
      <div class="p-4 bg-[#0a2233] rounded-lg text-center">
        <img src="/cards/crimson-ronin.png" alt="Common" class="mx-auto h-32"/>
        <h2 class="mt-4 text-lg font-semibold text-red-500">COMMON</h2>
        <p class="mt-2 text-2xl">3 ENA / day</p>
      </div>
      <div class="p-4 bg-[#0a2233] rounded-lg text-center">
        <img src="/cards/emp-blast.png" alt="Neutral" class="mx-auto h-32 opacity-60"/>
        <h2 class="mt-4 text-lg font-semibold text-yellow-500">NEUTRAL</h2>
        <p class="mt-2 text-2xl">3 ENA / day</p>
      </div>
      <div class="p-4 bg-[#0a2233] rounded-lg text-center">
        <img src="/cards/blade-storm.png" alt="Epic" class="mx-auto h-32"/>
        <h2 class="mt-4 text-lg font-semibold text-blue-500">EPIC</h2>
        <p class="mt-2 text-2xl">4 ENA / day</p>
      </div>
      <div class="p-4 bg-[#0a2233] rounded-lg text-center">
        <img src="/cards/overseer.png" alt="Rare" class="mx-auto h-32"/>
        <h2 class="mt-4 text-lg font-semibold text-green-400">RARE</h2>
        <p class="mt-2 text-2xl">4 ENA / day</p>
      </div>
      <div class="p-4 bg-[#0a2233] rounded-lg text-center">
        <img src="/cards/tintan-warden.png" alt="Legendary" class="mx-auto h-32"/>
        <h2 class="mt-4 text-lg font-semibold text-yellow-300">LEGENDARY</h2>
        <p class="mt-2 text-2xl">6 ENA / day</p>
      </div>
    </section>

    <!-- How to Stake NFT -->
    <section class="mb-10 space-y-4">
      <h2 class="text-3xl text-enaYellow font-bold mb-2">How to Stake Your NFTs</h2>
      <ul class="list-disc list-inside space-y-1 text-lg">
        <li><strong>Step 1:</strong> Find your NFT’s <em>token ID</em> on OpenSea (check the URL).</li>
        <li><strong>Step 2:</strong> In the DAPP, enter that token ID and the <em>amount</em> you own.</li>
        <li><strong>Step 3:</strong> Approve the transaction in your wallet to lock your NFT.</li>
      </ul>
    </section>

    <!-- How to Claim -->
    <section class="mb-10">
      <h2 class="text-3xl text-enaYellow font-bold mb-2">Claim Your Rewards</h2>
      <p class="text-lg mb-2">
        Simply click the <span class="font-semibold">“Claim All”</span> button in the DAPP and sign the transaction.
      </p>
    </section>

    <!-- How to Unstake -->
    <section class="mb-12">
      <h2 class="text-3xl text-enaYellow font-bold mb-2">How to Unstake</h2>
      <ul class="list-disc list-inside space-y-1 text-lg">
        <li>Each staked NFT is stored in a list—indexes start at <code>0</code>.</li>
        <li>To withdraw, pick its index and enter it in “Unstake by Index.”</li>
        <li>
          Example: if you staked Neon Ronin (ID 10) at index 0, Max Pine (ID 300) at index 1:
          <ul class="list-decimal list-inside ml-6">
            <li>Withdraw ID 300 by entering <code>1</code>.</li>
          </ul>
        </li>
      </ul>
    </section>

    <!-- Token Staking Info -->
    <section class="mb-12">
      <h2 class="text-3xl text-enaYellow font-bold mb-2">$ENA Token Staking</h2>
      <ul class="list-disc list-inside space-y-1 text-lg">
        <li>Enter the <em>amount</em> of $ENA you want to stake.</li>
        <li>Click “Stake” and approve in your wallet.</li>
        <li>Claim your $ENA rewards any time via “Claim Rewards.”</li>
        <li>To withdraw, enter how many $ENA to unstake.</li>
      </ul>
    </section>

    <!-- APY -->
    <div class="text-center mb-12">
      <p class="text-gray-400 mb-2">Current Annualized Yield</p>
      <p class="text-6xl font-bold text-enaYellow">14% APY</p>
    </div>

    <!-- Launch DAPP Button -->
    <div class="text-center">
      <a
        href="https://dapp.enauniversetcg.blog/"
        target="_blank"
        rel="noopener"
        class="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-enaBlack font-bold rounded-full shadow-lg transform transition hover:scale-105 animate-pulse hover:animate-none relative overflow-hidden"
      >
        Launch DAPP
        <span class="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-75 animate-ping"></span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// purely informational, no script logic needed!
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
