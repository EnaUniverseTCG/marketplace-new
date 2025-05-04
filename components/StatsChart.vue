<template>
  <div class="w-full">
    <Line :data="chartJsData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import 'chart.js/auto'

interface Point { x: string; y: number }

const props = defineProps<{ data: Point[]; label: string }>()

const chartJsData = computed(() => ({
  labels: props.data.map(p => p.x),
  datasets: [{
    label: props.label,
    data: props.data.map(p => p.y),
    borderWidth: 2,
    fill: false,
  }],
}))

const chartOptions = {
  responsive: true,
  scales: { y: { beginAtZero: true } },
}
</script>
