<template>
  <div class="p-8">
    <h2 class="text-3xl font-bold text-enaYellow mb-6">Meus Pedidos</h2>
    <table class="w-full text-left bg-gray-800 rounded-lg">
      <thead>
        <tr class="border-b border-gray-700">
          <th class="px-4 py-2">Data</th>
          <th class="px-4 py-2">Itens</th>
          <th class="px-4 py-2">Valor</th>
          <th class="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="o in orders" :key="o.id" class="even:bg-gray-900">
          <td class="px-4 py-2">{{ o.created_at | date('pt-PT') }}</td>
          <td class="px-4 py-2">{{ o.items.length }}</td>
          <td class="px-4 py-2">{{ o.amount | currency('pt-PT','EUR') }}</td>
          <td class="px-4 py-2">{{ o.status }}</td>
        </tr>
        <tr v-if="orders.length === 0">
          <td colspan="4" class="px-4 py-8 text-center text-gray-500">
            Sem pedidos ainda.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useOrders } from '~/composables/useOrders'

const { orders, load } = useOrders()
onMounted(load)
</script>
