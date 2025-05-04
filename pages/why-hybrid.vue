<template>
  <div class="relative min-h-screen overflow-hidden font-ena text-white">
    <!-- Vídeo de fundo -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover opacity-20">
      <source src="/videos/bg.mp4" type="video/mp4" />
    </video>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-16">
      <!-- Back + Título -->
      <NuxtLink to="/" class="text-gray-400 hover:text-enaYellow mb-4 inline-block">
        ← Back to Home
      </NuxtLink>
      <h1 class="text-5xl font-bold text-enaYellow text-center">Why Go Hybrid?</h1>

      <!-- 1. Physical vs Hybrid -->
      <section class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-semibold text-enaYellow mb-4">Physical Card</h2>
          <p class="text-gray-300 mb-4">
            A tactile, collectible card minted on–chain. Perfect for display, trading
            and exclusive in-person events.
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>No on-chain utility</li>
            <li>One-time collectible item</li>
            <li>Great for tournaments & showpieces</li>
          </ul>
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-enaYellow mb-4">
            Hybrid Card<br><span class="text-sm text-gray-400">(Physical + Digital Twin)</span>
          </h2>
          <p class="text-gray-300 mb-4">
            Every Hybrid comes with a digital on-chain twin. Use it in-game, stake it for
            daily rewards, or trade it on OpenSea!
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>On-chain gaming utility</li>
            <li>Daily $ENA staking rewards</li>
            <li>Instant trade on secondary markets</li>
          </ul>
        </div>
      </section>

      <!-- 2. Como configurar o seu wallet -->
      <section class="space-y-6">
        <h2 class="text-3xl font-semibold text-enaYellow">Getting Started</h2>
        <ol class="list-decimal list-inside text-gray-300 space-y-4">
          <li>
            <strong>Install a Web3 wallet</strong>  
            (e.g. MetaMask).  
            <NuxtLink to="/play" class="text-enaYellow underline">Learn how →</NuxtLink>
          </li>
          <li>
            <strong>Add the Soneium network</strong>  
            RPC URL: <code>https://rpc.soneium.org</code><br>
            Chain ID: <code>1234</code>
          </li>
          <li>
            <strong>Copy your wallet address</strong>  
            (click “Copy Address” in your wallet extension).
          </li>
          <li>
            <strong>At Checkout</strong>  
            selecione “Hybrid” e cole seu endereço.  
            Você receberá a versão física e a digital on-chain twin.
          </li>
          <li>
            <strong>Verify on OpenSea</strong>  
            Conecte-se com MetaMask em 
            <a href="https://opensea.io" target="_blank" class="text-enaYellow underline">
              opensea.io
            </a>.
          </li>
        </ol>
      </section>

      <!-- 3. Vantagens do Hybrid -->
      <section class="space-y-6">
        <h2 class="text-3xl font-semibold text-enaYellow">Hybrid Advantages</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-800 border border-enaYellow rounded-lg hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-2">Daily Staking Rewards</h3>
            <p class="text-gray-300 text-sm">
              Earn up to 10 $ENA/day per card just by staking your digital twin.
            </p>
          </div>
          <div class="p-6 bg-gray-800 border border-enaYellow rounded-lg hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-2">In-Game Utility</h3>
            <p class="text-gray-300 text-sm">
              Use your card directly in the TCG — no extra steps.
            </p>
          </div>
          <div class="p-6 bg-gray-800 border border-enaYellow rounded-lg hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-2">Secondary Market Flexibility</h3>
            <p class="text-gray-300 text-sm">
              List your digital twin on OpenSea at any time.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA final -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/marketplace"
          class="inline-block px-8 py-4 bg-enaYellow text-black font-bold rounded-lg hover:brightness-90 transition"
        >
          Explore Hybrid Cards
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Stateless por enquanto
</script>

<style scoped>
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
