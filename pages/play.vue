<template>
  <div class="relative min-h-screen overflow-hidden bg-enaBlack text-white font-ena">
    <!-- overlay -->
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <div class="relative z-10 p-6 max-w-7xl mx-auto flex flex-col space-y-6">
      <!-- back link + title -->
      <NuxtLink to="/" class="text-sm text-gray-300 hover:text-enaYellow inline-block">
        ← Back to Home
      </NuxtLink>
      <h1 class="text-4xl font-bold text-enaYellow text-center">ENA Universe Play</h1>

      <!-- search bar -->
      <div class="flex justify-center">
        <input
          v-model="search"
          type="text"
          placeholder="Search games..."
          class="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-enaYellow"
        />
      </div>

      <!-- game cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="game in filteredGames"
          :key="game.name"
          class="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img
            :src="game.image"
            :alt="game.name"
            class="w-full h-40 object-cover"
          />
          <div class="p-4 flex flex-col flex-1">
            <h2 class="text-xl font-semibold text-enaYellow mb-2">{{ game.name }}</h2>
            <p class="text-gray-300 flex-1">{{ game.description }}</p>

            <!-- If there's a URL, show Play Now button -->
            <template v-if="game.url">
              <a
                :href="game.url"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-block"
              >
                <button
                  class="px-4 py-2 bg-enaYellow text-black font-semibold rounded-lg hover:brightness-90 transition"
                >
                  Play Now
                </button>
              </a>
            </template>

            <!-- Otherwise, show disabled Coming Soon button -->
            <template v-else>
              <button
                disabled
                class="mt-4 px-4 py-2 bg-gray-700 text-gray-400 font-semibold rounded-lg cursor-not-allowed opacity-50"
              >
                COMING SOON
              </button>
            </template>
          </div>
        </div>

        <div v-if="filteredGames.length === 0" class="col-span-full text-center text-gray-500">
          No games found.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Game {
  name: string
  description: string
  image: string
  url: string
}

const games = ref<Game[]>([
  {
    name: 'Arena Tactics',
    description: 'Mini Games by ENA Universe.',
    image: '/tcg-arena.png',
    url: 'https://ena-arena-tactics.vercel.app/',
  },
  {
    name: 'Grid Tactics',
    description: 'Mini Games by ENA Universe.',
    image: '/grid-tactics.png',
    url: 'https://ena-grid-tactics.vercel.app/',
  },
  {
    name: 'ENA TCG LITE',
    description: 'A streamlined web version of our AI-powered card game.',
    image: '/tcg-lite.png',
    url: '', // no URL yet → Coming Soon
  },
])

const search = ref('')
const filteredGames = computed(() => {
  const term = search.value.trim().toLowerCase()
  if (!term) return games.value
  return games.value.filter(g =>
    g.name.toLowerCase().includes(term) ||
    g.description.toLowerCase().includes(term)
  )
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
/* you can add more flair here if desired */
</style>
