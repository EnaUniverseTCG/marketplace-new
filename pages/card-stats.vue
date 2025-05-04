<template>
  <div class="relative min-h-screen bg-enaBlack text-white font-ena">
    <!-- vídeo de fundo -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
      <source src="/ena-bg-video.mp4" type="video/mp4" />
    </video>

    <div class="relative z-10 px-6 py-8 max-w-5xl mx-auto">
      <NuxtLink to="/" class="block mb-6 text-gray-400 hover:text-enaYellow">
        ← Back to Home
      </NuxtLink>

      <header class="mb-12">
        <h1 class="text-5xl font-bold text-enaYellow mb-4">CardStats Dashboard</h1>

        <div class="flex flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <label class="block mb-1 text-gray-300">Period</label>
            <select v-model="period" class="w-full p-3 bg-gray-800 rounded-lg">
              <option v-for="p in periods" :key="p" :value="p">{{ p }}</option>
            </select>
          </div>

          <div class="flex-1 min-w-[200px]">
            <label class="block mb-1 text-gray-300">Search cards</label>
            <input
              v-model="filter"
              type="text"
              placeholder="Name or rarity…"
              class="w-full p-3 bg-gray-800 rounded-lg placeholder-gray-500"
            />
          </div>
        </div>
      </header>

      <!-- Seletor de Carta -->
      <div class="mb-12 max-w-md mx-auto">
        <label class="block mb-2 text-gray-300">Select a card to inspect:</label>
        <select
          v-model="selectedId"
          class="w-full p-3 bg-gray-800 rounded-lg"
        >
          <option v-for="card in cards" :key="card.id" :value="card.id">
            {{ card.name }} <span class="lowercase">({{ card.rarity }})</span>
          </option>
        </select>
      </div>

      <!-- Estatística Principal -->
      <div class="mb-8 text-center">
        <p class="text-gray-300 text-lg">
          Total adds to cart in {{ period }}:
          <span class="ml-2 text-2xl font-semibold text-enaYellow">
            {{ totalMetric }}
          </span>
        </p>
      </div>

      <!-- Gráfico -->
      <div class="mb-16 bg-gray-900 p-6 rounded-xl shadow-lg">
        <StatsChart :data="chartData" label="Adds to Cart (last 7 days)" />
      </div>

      <!-- Trending Cards em grid -->
      <section>
        <h2 class="mb-6 text-2xl font-semibold text-enaYellow">Trending Cards</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="c in filteredTrending"
            :key="c.id"
            class="p-6 bg-gray-800 rounded-lg shadow hover:shadow-2xl transition"
          >
            <h3 class="text-xl font-bold mb-2">{{ c.name }}</h3>
            <div class="flex items-center mb-4">
              <span
                class="inline-block w-3 h-3 mr-2 rounded-full"
                :class="rarityColor[c.rarity]"
              ></span>
              <span class="capitalize">{{ c.rarity }}</span>
            </div>
            <p class="text-gray-300">
              <span class="font-semibold text-enaYellow">{{ c.trend }}</span>
              adds to cart
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useStats } from '~/composables/useStats'
import StatsChart from '~/components/StatsChart.vue'
import { NuxtLink } from '#components'

interface Card { id: string; name: string; rarity: string }

// fixamos apenas “Add to Cart”
const periods = ['Last 7 days', 'Last 30 days']
const rarities = ['common','rare','epic','legendary','neutral','mana']
const cards = Array.from({ length: 20 }, (_, i) => ({
  id: String(i+1),
  name: `Card #${i+1}`,
  rarity: rarities[i % rarities.length]
} as Card))

const period = ref(periods[0])
const filter = ref('')
const selectedId = ref(cards[0].id)

// stats
const stats = useStats(selectedId, ref('Add to Cart'), period)
watch([selectedId, period], () => stats.loadHistory())
onMounted(() => stats.loadHistory())

const chartData = computed(() => stats.chartData.value)
const totalMetric = computed(() =>
  stats.chartData.value.reduce((sum, p) => sum + p.y, 0)
)

// trending stub
const trending = ref<{ id:string; name:string; rarity:string; trend:number }[]>([])
function rebuild() {
  trending.value = cards.map(c => ({
    ...c,
    trend: Math.floor(Math.random()*100)
  })).sort((a,b) => b.trend - a.trend)
}
watch(period, rebuild)
onMounted(rebuild)

const filteredTrending = computed(() =>
  trending.value.filter(c =>
    c.name.toLowerCase().includes(filter.value.toLowerCase()) ||
    c.rarity.toLowerCase().includes(filter.value.toLowerCase())
  )
)

// mapeamento de cor de badge
const rarityColor: Record<string,string> = {
  common:    'bg-gray-500',
  rare:      'bg-blue-500',
  epic:      'bg-purple-500',
  legendary: 'bg-yellow-500',
  neutral:   'bg-green-500',
  mana:      'bg-indigo-500',
}
</script>

<style scoped>
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
