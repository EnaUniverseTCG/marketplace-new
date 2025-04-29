<!-- components/StatsChart.vue -->
<template>
  <div class="w-full max-w-md mx-auto">
    <LineChart
      :chart-data="chartJsData"
      :chart-options="chartOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import 'chart.js/auto'        // garante que o Chart.js carrega tudo automaticamente

interface Point { x: string; y: number }

const props = defineProps<{ data: Point[] }>()

const chartJsData = computed(() => ({
  labels: props.data.map(p => p.x),
  datasets: [{
    label: 'Adds to Cart (últimos 7 dias)',
    data: props.data.map(p => p.y),
    borderWidth: 2,
    fill: false,
  }]
}))

const chartOptions = {
  responsive: true,
  scales: { y: { beginAtZero: true } }
}
</script>

<style scoped>
/* se quiseres, podes ajustar o tamanho do canvas aqui */
</style>
