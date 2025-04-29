<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-enaBlack p-6 rounded-lg max-w-sm w-full border border-enaYellow">
      <h3 class="text-xl font-semibold text-enaYellow mb-4">{{ title }}</h3>
      <p class="text-enaWhite mb-6">{{ message }}</p>
      <div class="flex justify-end space-x-4">
        <button
          class="px-4 py-2 border border-gray-500 text-enaWhite rounded hover:bg-gray-700"
          @click="$emit('cancel')"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-enaYellow text-enaBlack rounded hover:opacity-90"
          @click="$emit('confirm')"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  title: string
  message: string
}>()
</script>
