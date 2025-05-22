<template>
  <div class="relative min-h-screen overflow-hidden font-ena text-white">
    <!-- Vídeo de fundo suave -->
    <video
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover opacity-20"
    >
      <source src="/ena-bg-video.mp4" type="video/mp4" />
    </video>

    <div class="relative z-10 mx-auto px-6 py-12 max-w-4xl space-y-8">
      <!-- Voltar + Título Neon -->
      <div class="flex items-center space-x-4">
        <NuxtLink to="/" class="text-gray-400 hover:text-enaYellow transition">
          ← Back
        </NuxtLink>
        <h1 class="text-5xl font-bold text-enaYellow glow-neon">
          Why Go Hybrid?
        </h1>
      </div>

      <!-- Banner Twin SVG (superposto) -->
      <div class="relative flex justify-center -mt-16">
        <img
          src="/banner-twin.svg"
          alt="Hybrid Twin Banner"
          class="w-2/3 md:w-1/2 object-contain"
        />
      </div>

      <!-- Seção comparativa -->
      <section class="grid md:grid-cols-2 gap-8">
        <!-- Physical Card -->
        <div
          class="card-interactive p-6 bg-gray-900 border border-gray-700 rounded-lg hover:scale-105 transform transition duration-300"
        >
          <h2 class="text-3xl font-semibold text-enaYellow mb-2">
            Physical Card
          </h2>
          <p class="text-gray-300 mb-4">
            A tactile, collectible card minted on–chain. Perfect for display,
            trading and exclusive in-person events.
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>No on-chain utility</li>
            <li>One-time collectible item</li>
            <li>Great for tournaments & showpieces</li>
          </ul>
        </div>
        <!-- Hybrid Card -->
        <div
          class="card-interactive p-6 bg-gray-900 border border-enaYellow rounded-lg hover:scale-105 transform transition duration-300"
        >
          <div class="inline-block mb-2 animate-flicker">
            <h2 class="text-3xl font-semibold text-enaYellow">
              Hybrid Card
            </h2>
            <span class="text-sm text-gray-400 ml-2">(Physical + Digital Twin)</span>
          </div>
          <p class="text-gray-300 mb-4">
            Every Hybrid comes with a digital on-chain twin. Use it in-game,
            stake it for daily rewards, or trade it on OpenSea!
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>On-chain gaming utility</li>
            <li>Daily $ENA staking rewards</li>
            <li>Instant trade on secondary markets</li>
          </ul>
        </div>
      </section>

      <!-- Getting Started -->
      <section class="space-y-6">
        <h2 class="text-3xl font-semibold text-enaYellow glow-neon">
          Getting Started
        </h2>
        <ol class="list-decimal list-inside text-gray-300 space-y-4">
          <li class="flex items-start space-x-4">
            <span class="text-enaYellow text-2xl animate-pulse">①</span>
            <div>
              <strong>Install a Web3 wallet</strong> (e.g. MetaMask).
              <a
                href="https://metamask.io/download"
                target="_blank"
                class="text-enaYellow underline ml-1"
              >
                Learn how →
              </a>
            </div>
          </li>
          <li class="flex items-start space-x-4">
            <span class="text-enaYellow text-2xl animate-pulse">②</span>
            <div>
              <strong>Add the Soneium network</strong><br />
              Parent chain: <code>Ethereum</code><br />
              RPC URL: <code>https://rpc.soneium.org/</code><br />
              Chain ID: <code>1868</code><br />
              Currency Symbol: <code>ETH</code><br />
              Block Explorer: 
              <a
                href="https://soneium.blockscout.com/"
                target="_blank"
                class="text-enaYellow underline"
              >
                soneium.blockscout.com
              </a>
            </div>
          </li>
          <li class="flex items-start space-x-4">
            <span class="text-enaYellow text-2xl animate-pulse">③</span>
            <div>
              <strong>Buy ENA Universe NFTs</strong> on 
              <a
                href="https://opensea.io/collection/ena-universe"
                target="_blank"
                class="text-enaYellow underline"
              >
                OpenSea
              </a>
              .
            </div>
          </li>
          <li class="flex items-start space-x-4">
            <span class="text-enaYellow text-2xl animate-pulse">④</span>
            <div>
              <strong>Redeem or stake</strong> your digital twin for $ENA rewards.
            </div>
          </li>
          <li class="flex items-start space-x-4">
            <span class="text-enaYellow text-2xl animate-pulse">⑤</span>
            <div>
              <strong>Verify on OpenSea</strong> — connect with MetaMask at 
              <a
                href="https://opensea.io"
                target="_blank"
                class="text-enaYellow underline"
              >
                opensea.io
              </a>.
            </div>
          </li>
        </ol>
      </section>

      <!-- Hybrid Advantages -->
      <section class="space-y-6">
        <h2 class="text-3xl font-semibold text-enaYellow glow-neon">
          Hybrid Advantages
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="advantage-card p-6 bg-gray-900 rounded-lg group relative overflow-hidden border border-enaYellow"
          >
            <div
              class="group-hover:bg-enaYellow bg-gradient-to-t from-transparent to-black absolute inset-0 transition-all duration-300"
            />
            <h3
              class="text-xl font-semibold mb-2 z-10 relative"
            >
              Daily Staking Rewards
            </h3>
            <p
              class="text-gray-300 text-sm z-10 relative group-hover:text-black transition"
            >
              Earn up to 6 $ENA/day per card just by staking your digital twin.
            </p>
          </div>
          <div
            class="advantage-card p-6 bg-gray-900 rounded-lg group relative overflow-hidden border border-enaYellow"
          >
            <div
              class="group-hover:bg-enaYellow bg-gradient-to-t from-transparent to-black absolute inset-0 transition-all duration-300"
            />
            <h3 class="text-xl font-semibold mb-2 z-10 relative">
              In-Game Utility
            </h3>
            <p
              class="text-gray-300 text-sm z-10 relative group-hover:text-black transition"
            >
              Use your card directly in the TCG – no extra steps.
            </p>
          </div>
          <div
            class="advantage-card p-6 bg-gray-900 rounded-lg group relative overflow-hidden border border-enaYellow"
          >
            <div
              class="group-hover:bg-enaYellow bg-gradient-to-t from-transparent to-black absolute inset-0 transition-all duration-300"
            />
            <h3 class="text-xl font-semibold mb-2 z-10 relative">
              Secondary Market Flexibility
            </h3>
            <p
              class="text-gray-300 text-sm z-10 relative group-hover:text-black transition"
            >
              List your digital twin on OpenSea at any time.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA final -->
      <div class="text-center mt-16">
        <a
          href="https://opensea.io/collection/ena-universe"
          target="_blank"
          class="inline-block px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-2xl transform hover:scale-105 transition animate-pulse"
        >
          EXPLORE HYBRID CARDS
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* no script logic needed for now */
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

.font-ena { font-family: 'Orbitron', sans-serif; }

/* Neon glow effect */
.glow-neon {
  text-shadow:
    0 0 8px rgba(255,217,0,0.8),
    0 0 16px rgba(255,217,0,0.6);
}

/* Flicker animation */
@keyframes flicker {
  0%,18%,22%,25%,53%,57%,100% { opacity:1; }
  20%,24%,55% { opacity:0.4; }
}
.animate-flicker {
  animation: flicker 3s infinite;
}
</style>
