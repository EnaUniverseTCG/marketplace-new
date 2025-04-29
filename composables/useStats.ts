// /composables/useStats.ts
import { ref } from 'vue'

export function useStats(cardId: string) {
  const key = (action: string) => `stats_${cardId}_${action}`

  function track(action: 'add_to_cart' | 'buy_hybrid') {
    const k = key(action)
    const prev = parseInt(localStorage.getItem(k) || '0', 10)
    localStorage.setItem(k, String(prev + 1))
  }

  function get(action: 'add_to_cart' | 'buy_hybrid') {
    return parseInt(localStorage.getItem(key(action)) || '0', 10)
  }

  // para gráfico: gera uma série histórica falsa
  const chartData = ref<{ x: string; y: number }[]>([])
  function loadHistory() {
    // aqui você puxaria de um backend real; 
    // vamos simular 7 dias aleatórios
    const now = new Date()
    chartData.value = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(now.getTime() - (6 - i) * 86400000)
      return { x: d.toISOString().slice(0,10), y: Math.floor(Math.random()*10) }
    })
  }

  return { track, get, chartData, loadHistory }
}
