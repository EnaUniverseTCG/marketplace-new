import { ref } from 'vue'

export function useOrders() {
  // orders simuladas: id e amount
  const orders = ref<{ id: string; amount: number }[]>([])

  // stub de carregamento (mais tarde você pode buscar no seu backend/Supabase)
  async function load() {
    // exemplo: await fetch('/api/orders')...
    orders.value = []  // por enquanto vazio
  }

  return { orders, load }
}
