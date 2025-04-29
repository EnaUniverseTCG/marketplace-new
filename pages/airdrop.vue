<template>
  <div class="relative w-full h-screen overflow-hidden font-ena">
    <!-- Vídeo de fundo herdado do layout -->

    <!-- Overlay semi-opaco + container central -->
    <div class="relative z-10 bg-black/50 min-h-screen text-white">
      <div class="max-w-4xl mx-auto py-12 px-6 space-y-12">

        <!-- How It Works -->
        <section class="space-y-4">
          <h2 class="text-3xl text-enaYellow font-semibold">How It Works</h2>
          <!-- ... sua tabela ... -->
        </section>

        <!-- Active Lore Challenge -->
        <section class="space-y-4">
          <h2 class="text-3xl text-enaYellow font-semibold">Active Lore Challenge</h2>
          <!-- ... seu bloco de desafio ... -->
        </section>

        <!-- Rewards -->
        <section class="space-y-4">
          <h2 class="text-3xl text-enaYellow font-semibold">Rewards</h2>
          <!-- ... sua lista de recompensas ... -->
        </section>

        <!-- Winners Leaderboard -->
        <section class="space-y-4">
          <h2 class="text-3xl text-enaYellow font-semibold">Winners Leaderboard</h2>
          <!-- ... sua tabela de vencedores ... -->
        </section>

        <!-- Edit / Pass Section -->
        <section class="space-y-4">
          <button
            v-if="!editMode && !unlocked"
            @click="editMode = true"
            class="px-4 py-2 bg-enaYellow text-enaBlack rounded"
          >
            Edit (team only)
          </button>

          <div v-if="editMode" class="space-y-2">
            <label class="block text-enaYellow">Enter Pass to Edit:</label>
            <input
              v-model="passInput"
              type="password"
              placeholder="Password"
              class="w-full p-2 bg-gray-800 border border-enaYellow rounded text-white"
            />
            <div class="flex space-x-2">
              <button
                @click="confirmPass"
                class="px-4 py-2 bg-enaYellow text-enaBlack rounded"
              >
                Confirm
              </button>
              <button
                @click="cancelEdit"
                class="px-4 py-2 bg-red-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </section>

        <!-- Wheel & Participants -->
        <section v-if="unlocked" class="space-y-6">
          <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <textarea
              v-model="inputText"
              class="flex-1 p-3 rounded-lg bg-gray-900 text-white border border-enaYellow placeholder-gray-400 resize-none"
              placeholder="@player1 x1,&#10;@player2 x3,&#10;@player3 x4"
              rows="4"
            />
            <button
              @click="handleGenerate"
              class="px-4 py-2 bg-enaYellow text-enaBlack rounded whitespace-nowrap"
            >
              Load Participants
            </button>
          </div>
          <Wheel :participants="participants" />
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Wheel from '@/components/Wheel.vue'

// senha e edição
const PASS = 'ena-team-pass'
const passInput = ref('')
const editMode = ref(false)
const unlocked = ref(false)

function confirmPass() {
  if (passInput.value === PASS) {
    unlocked.value = true
    editMode.value = false
  } else {
    alert('Incorrect pass')
  }
}

function cancelEdit() {
  editMode.value = false
  passInput.value = ''
}

// participantes
const inputText = ref('')
const participants = ref<string[]>([])

function parseParticipants(text: string): string[] {
  return text
    .split(/[\n,]+/)
    .flatMap(line => {
      const m = line.trim().match(/^(@\w+)\s*x?(\d+)?$/i)
      if (m) {
        const count = Number(m[2] || '1')
        return Array(count).fill(m[1])
      }
      return []
    })
}

function handleGenerate() {
  participants.value = parseParticipants(inputText.value)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
</style>
