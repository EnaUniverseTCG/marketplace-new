<template>
  <div class="relative w-full min-h-screen overflow-hidden font-ena">
    <!-- Vídeo de fundo (via layout default) -->

    <div class="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
      <!-- Hero -->
      <section class="py-20 space-y-6 max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-bold text-enaYellow animate-fade-in">
          Welcome to ENA Universe
        </h1>
        <p class="text-lg md:text-xl text-gray-300 animate-fade-in delay-200">
          The First TCG Built by AI — Where Your Cards Are Real, Digital, and Powerful.
        </p>

        <!-- Botão “Why Hybrid?” -->
        <NuxtLink to="/why-hybrid" class="block animate-fade-in delay-400">
          <button
            class="mx-auto px-8 py-4 md:px-16 md:py-6 bg-enaYellow text-black font-extrabold text-xl md:text-3xl rounded-full shadow-2xl ring-4 ring-yellow-300 animate-pulse
                   hover:animate-none hover:scale-110 transform transition-all duration-300"
          >
            Why Hybrid?
          </button>
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
          title="Redeem"
          description="Claim your rewards & benefits."
          color="green"
          to="/redeem"
        />
        <PillarCard
          title="Staking"
          description="Stake your NFTs to earn rewards."
          color="red"
          to="/staking"
        />
        <PillarCard
          title="Buy $ENA"
          description="Purchase $ENA via ETH or ASTR to join the ecosystem."
          color="white"
          to="/buy-ena"
        />
      </section>

      <!-- Botão 3D “Hybrid Marketplace” -->
      <section class="py-8 w-full">
        <NuxtLink to="https://opensea.io/collection/ena-universe" class="group perspective-500" target="_blank">
          <div
            class="
              mx-auto block
              px-10 py-4 md:px-20 md:py-6
              bg-gradient-to-br from-enaYellow to-yellow-400
              text-black font-bold text-lg md:text-2xl
              rounded-full
              transform transition-transform duration-300
              shadow-lg
              hover:-translate-y-1 hover:scale-105
              hover:shadow-[0_20px_30px_rgba(0,255,255,0.5)]
              group-hover:rotate-x-6 group-hover:rotate-y-6
              [transform-style:preserve-3d]
              [backface-visibility:hidden]
            "
          >
            Hybrid Marketplace
          </div>
        </NuxtLink>
      </section>

      <!-- Logos de parceiros (maiores e responsivos) -->
      <section class="py-12 bg-black/40 w-full">
        <div class="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-12 px-4">
          <img
            src="/logos/soneium.svg"
            alt="Soneium"
            class="h-32 md:h-40 object-contain filter brightness-200"
          />
          <img
            src="/logos/rwa.svg"
            alt="RWA"
            class="h-32 md:h-40 object-contain filter brightness-200"
          />
          <img
            src="/logos/ena-studios.svg"
            alt="ENA Studios"
            class="h-32 md:h-40 object-contain filter brightness-200"
          />
          <img
            src="/logos/opensea.svg"
            alt="OpenSea"
            class="h-32 md:h-40 object-contain filter brightness-200"
          />
        </div>
      </section>

      <!-- Featured Cards -->
      <section class="py-16 w-full bg-black/70 overflow-visible">
        <h2 class="text-3xl text-enaYellow font-semibold text-center mb-8">
          Featured Cards
        </h2>
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
import FeaturedCard from '@/components/FeaturedCard.vue'

const featuredCards = [
  { name: ' Crimson Ronin', faction: 'Ashen Order',  rarity: 'Common',    atk: 5, def: 5, image: '/cards/crimson-ronin.png' },
  { name: 'Tintan Warden',    faction: 'Zero Division', rarity: 'Legendary', atk: 5, def: 7, image: '/cards/tintan-warden.png' },
  { name: 'Blade Storm',      faction: 'Shinobyte',     rarity: 'Epic',      atk: 6, def: 4, image: '/cards/blade-storm.png' },
  { name: 'Emp Blast',      faction: 'Boost',         rarity: 'Neutral',   atk: 0, def: 0, image: '/cards/emp-blast.png' },
  { name: 'Overseer',   faction: 'Nova Synth',    rarity: 'Rare',      atk: 3, def: 6, image: '/cards/overseer.png' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }

/* Perspectiva 3D para o botão */
.perspective-500 {
  perspective: 500px;
}

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
