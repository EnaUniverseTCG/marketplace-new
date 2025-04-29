<template>
  <div class="relative w-full min-h-screen overflow-hidden font-ena">
    <!-- Vídeo de fundo vem do layout padrão -->

    <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
      <!-- Hero -->
      <section class="py-20 space-y-6 max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-bold text-enaYellow animate-fade-in">
          Welcome to ENA Universe
        </h1>
        <p class="text-lg md:text-xl text-gray-300 animate-fade-in delay-200">
          The First TCG Built by AI — Where Your Cards Are Real, Digital, and Powerful.
        </p>
        <NuxtLink
          to="/marketplace"
          class="inline-block mt-6 px-8 py-3 bg-enaYellow text-black font-semibold rounded-lg hover:bg-enaBlue transition animate-fade-in delay-400"
        >
          Hybrid Marketplace
        </NuxtLink>
      </section>

      <!-- Pilares -->
      <section class="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl w-full">
        <PillarCard
          title="Game TCG Rules"
          description="All about rules & gameplay."
          color="blue"
          to="/about"
        />
        <PillarCard
          title="OpenSea Collection"
          description="Explore collectible NFTs & exclusive free mints."
          color="green"
          to="https://opensea.io/colecao-ena"
        />
        <PillarCard
          title="Staking & Tokenomics"
          description="Stake your NFTs & $ENA to earn rewards."
          color="red"
          to="/tokenomics"
        />
        <PillarCard
          title="Buy $ENA"
          description="Purchase $ENA via ETH or ASTR to join the ecosystem."
          color="white"
          to="/buy-ena"
        />
      </section>

      <!-- Roadmap Interativo -->
      <section class="py-16 w-full bg-black/60">
        <Roadmap :steps="roadmapSteps" />
      </section>

      <!-- Featured Cards -->
      <section class="py-16 w-full bg-black/70 overflow-visible">
        <h2 class="text-3xl text-enaYellow font-semibold text-center mb-8">
          Featured Cards
        </h2>
        <!-- quando hover neste container, blur nas .featured-card que NÃO estiverem em hover -->
        <div
          class="featured-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4"
        >
          <FeaturedCard
            v-for="card in featuredCards"
            :key="card.name"
            v-bind="card"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import PillarCard from '@/components/PillarCard.vue'
import Roadmap from '@/components/Roadmap.vue'
import FeaturedCard from '@/components/FeaturedCard.vue'

const roadmapSteps = [
  { title: 'Q2 2025 – Platform Launch',   details: 'Marketplace opens, initial 50 NFTs minted, first lore quest.' },
  { title: 'Q3 2025 – Staking & Airdrops', details: 'Introduce staking for $ENA and weekly token airdrops.' },
  { title: 'Q4 2025 – PvP Battles',        details: 'Enable deck battles on-chain with ranking system.' },
  { title: 'Q1 2026 – DAO & Governance',   details: 'Launch DAO voting using $ENA for roadmap decisions.' }
]

const featuredCards = [
  { name: 'Scarlet Revenant',  faction: 'Ashen Order',   rarity: 'Common',    atk: 6, def: 5, image: '/cards/scarlet-revenant.png' },
  { name: 'Tintan Warden',     faction: 'Zero Division',  rarity: 'Legendary', atk: 5, def: 8, image: '/cards/tintan-warden.png' },
  { name: 'Blade Storm',       faction: 'Shinobyte',      rarity: 'Epic',      atk: 6, def: 4, image: '/cards/blade-storm.png' },
  { name: 'Energy Core',       faction: 'Boost',          rarity: 'Neutral',   atk: 0, def: 0, image: '/cards/energy-core.png' },
  { name: 'Nexus Vanguard',    faction: 'Nova Synth',     rarity: 'Rare',      atk: 4, def: 5, image: '/cards/nexus-vanguard.png' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

/* Animações */
@keyframes fade-in { from { opacity: 0 } to { opacity:1 } }
.animate-fade-in { animation: fade-in 0.8s forwards; }
.animate-fade-in.delay-200 { animation-delay: 0.2s; }
.animate-fade-in.delay-400 { animation-delay: 0.4s; }

/* Blur das cards não-hover */
.featured-container:hover .featured-card:not(:hover) {
  filter: blur(4px) brightness(0.6);
  transition: filter 0.3s ease;
}
</style>
