<template>
  <div class="relative min-h-screen bg-gray-900 text-white">
    <img src="/blade.svg"
      class="absolute inset-0 w-full h-full object-cover opacity-20" />
    <div class="relative z-10 p-8 space-y-8">
      <h1 class="text-4xl font-bold text-enaYellow">
        Bem-vindo, {{ userName }}!
      </h1>

      <section class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ActionCard @click="goTo('cards')">
          <template #icon>💳</template>
          <template #title>Minhas Cartas</template>
          <template #subtitle>Veja todas as cartas que já comprou.</template>
        </ActionCard>
        <ActionCard @click="goTo('orders')">
          <template #icon>📦</template>
          <template #title>Meus Pedidos</template>
          <template #subtitle>Confira o histórico de compras.</template>
        </ActionCard>
        <ActionCard @click="goTo('settings')">
          <template #icon>⚙️</template>
          <template #title>Configurações</template>
          <template #subtitle>Atualize seus dados de perfil.</template>
        </ActionCard>
      </section>

      <div>
        <h2 class="text-2xl font-semibold text-enaYellow mb-4">Suas Estatísticas</h2>
        <ul class="list-disc list-inside space-y-2 text-lg">
          <li>Total de cartas: {{ totalCards }}</li>
          <li>Total gasto: {{ formatCurrency(totalSpent) }}</li>
          <li>Data de registro: {{ registeredAt }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '~/composables/useAuth'
import { useOrders } from '~/composables/useOrders'
import ActionCard from '~/components/ActionCard.vue'

const { user } = useAuth()
const { orders, load } = useOrders()
const router = useRouter()

const totalCards = ref(0)
const totalSpent = ref(0)
const registeredAt = ref('—')

// formata data longa
function formatDate(d: string) {
  return new Intl.DateTimeFormat('pt-PT', { dateStyle: 'long' }).format(new Date(d))
}

// formata número como moeda Euro
function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)
}

onMounted(async () => {
  await load()
  totalCards.value = orders.value.length
  totalSpent.value = orders.value.reduce((sum, o) => sum + (o.amount || 0), 0)
  if (user.value?.created_at) {
    registeredAt.value = formatDate(user.value.created_at)
  }
})

const userName = computed(() =>
  user.value?.user_metadata?.full_name || user.value?.email || 'Usuário'
)

function goTo(page: 'cards'|'orders'|'settings') {
  router.push(`/profile/${page}`)
}
</script>
