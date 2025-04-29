<template>
  <div class="px-6 py-8 font-ena text-white min-h-screen bg-enaBlack">
    <Navbar />

    <h1 class="text-4xl font-bold text-enaYellow mb-6">Analytics Dashboard</h1>

    <!-- Seletor de carta -->
    <div class="max-w-md mx-auto mb-8">
      <label class="block text-gray-300 mb-2">Selecione a carta:</label>
      <select
        v-model="selectedId"
        class="w-full p-3 rounded-lg bg-gray-800 text-gray-200"
      >
        <option
          v-for="card in cards"
          :key="card.id"
          :value="card.id"
        >
          {{ card.name }} ({{ capitalize(card.rarity) }})
        </option>
      </select>
    </div>

    <!-- Estatísticas resumidas -->
    <div class="max-w-lg mx-auto bg-black/50 p-6 rounded-lg mb-8 space-y-2">
      <p class="text-gray-300">Add to Cart total: <span class="font-bold">{{ stats.get('add_to_cart') }}</span></p>
      <p class="text-gray-300">Buy Hybrid total: <span class="font-bold">{{ stats.get('buy_hybrid') }}</span></p>
    </div>

    <!-- Gráfico em tempo real -->
    <div class="max-w-2xl mx-auto">
      <StatsChart :data="stats.chartData" />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import StatsChart from '@/components/StatsChart.vue'
import { useStats } from '@/composables/useStats'

// mesma fonte de decks do marketplace, mas aqui só nome/id/rarity
const rarities = ['common','rare','epic','legendary','neutral','mana']
const cards = Array.from({ length: 20 }, (_, i) => {
  return {
    id: String(i + 1),
    name: `Card #${i + 1}`,
    rarity: rarities[i % rarities.length]
  }
})

const selectedId = ref(cards[0].id)
const stats = useStats(selectedId.value)

// recarrega stats quando trocar de carta
watch(selectedId, id => {
  stats.setId(id)
  stats.loadHistory()
})

onMounted(() => {
  stats.loadHistory()
})

// helper
function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
