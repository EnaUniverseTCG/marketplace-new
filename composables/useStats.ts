import { ref, type Ref } from 'vue'

export interface Point { x: string; y: number }

export function useStats(
  selectedId: Ref<string>,
  metric: Ref<string>,
  period: Ref<string>,
) {
  const chartData = ref<Point[]>([])

  /**
   * Stub para trocar parâmetros.
   * Podes guardar (selectedId, metric, period) aqui se quiseres.
   */
  function setParams(id: string, m: string, p: string) {
    // por agora não faz nada, mas é onde podes reagir a mudanças
  }

  /**
   * Carrega dados históricos fictícios
   * baseado no período (7 ou 30 dias).
   */
  function loadHistory() {
    const days = period.value.includes('30') ? 30 : 7
    const today = new Date()
    const arr: Point[] = []
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      arr.push({ x: label, y: Math.floor(Math.random() * 20 + 1) })
    }
    chartData.value = arr
  }

  return { chartData, setParams, loadHistory }
}
