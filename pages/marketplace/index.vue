<template>
  <!-- padding-top para não ficar por baixo da navbar fixa -->
  <section class="pt-16 px-4 py-8">
    <!-- Title + filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6 items-center">
      <h1 class="text-4xl font-ena text-enaYellow flex-shrink-0">Marketplace</h1>
      <input
        v-model="search"
        type="text"
        placeholder="Search cards…"
        class="flex-grow p-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500"
      />
      <select
        v-model="rarityFilter"
        class="p-3 rounded-lg bg-gray-800 text-gray-200"
      >
        <option value="">All rarities</option>
        <option value="common">Common</option>
        <option value="rare">Rare</option>
        <option value="epic">Epic</option>
        <option value="legendary">Legendary</option>
        <option value="neutral">Neutral</option>
        <option value="mana">ENA Mana</option>
      </select>
    </div>

    <!-- Card grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <DeckCard
        v-for="deck in displayedDecks"
        :key="deck.id"
        :deck="deck"
        @add-to-cart="addToCart"
        @details="id => navigateTo(`/marketplace/${id}`)"
      />
    </div>

    <!-- infinite-scroll sentinel -->
    <div ref="loadTrigger" class="h-1"></div>

    <!-- loading indicator -->
    <div v-if="loading" class="text-center text-gray-400 mt-6">
      Loading more cards…
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import DeckCard from '@/components/DeckCard.vue'

interface Deck {
  id: string
  name: string
  image: string
  price: number
  currency: string
  attack: number
  defense: number
  rarity: string
}

const router = useRouter()
const navigateTo = (url: string) => router.push(url)

const decks = ref<Deck[]>([])
const search = ref('')
const rarityFilter = ref('')

// pagination
const perPage = 12
const page    = ref(1)
const loading = ref(false)

const rarities = ['common','rare','epic','legendary','neutral','mana']

onMounted(() => {
  decks.value = Array.from({ length: 200 }, (_, i) => ({
    id:       String(i + 1),
    name:     `Card #${i+1}`,
    image:    `/cards/placeholder-deck${(i%2)+1}.png`,
    price:    Math.ceil(Math.random()*20),
    currency: 'EUR',
    attack:   Math.ceil(Math.random()*6),
    defense:  Math.ceil(Math.random()*6),
    rarity:   rarities[i % rarities.length]
  }))
  createObserver()
})

const filteredDecks = computed(() =>
  decks.value.filter(d =>
    (!search.value || d.name.toLowerCase().includes(search.value.toLowerCase())) &&
    (!rarityFilter.value || d.rarity === rarityFilter.value)
  )
)

const displayedDecks = computed(() =>
  filteredDecks.value.slice(0, page.value * perPage)
)

const loadTrigger = ref<HTMLElement|null>(null)
let observer: IntersectionObserver|null = null

function createObserver() {
  if (!loadTrigger.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !loading.value && displayedDecks.value.length < filteredDecks.value.length) {
        loading.value = true
        setTimeout(() => { page.value += 1; loading.value = false }, 600)
      }
    },
    { rootMargin: '200px' }
  )
  observer.observe(loadTrigger.value)
}

onBeforeUnmount(() => {
  if (observer && loadTrigger.value) observer.unobserve(loadTrigger.value)
})

// stub: add to cart
function addToCart(id: string) {
  alert(`✅ Added Card #${id} to cart!`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }

/* lazy-load placeholder */
.deck-card img {
  background: url('/spinner.svg') center/20px no-repeat;
}

/* tighter gap on small screens */
@media (max-width: 640px) {
  .grid {
    gap: 0.5rem;
  }
}
</style>
