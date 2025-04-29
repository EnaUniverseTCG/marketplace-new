<template>
  <div class="min-h-screen flex items-center justify-center bg-enaBlack text-white p-4">
    <div class="max-w-md w-full bg-gray-900 p-6 rounded-lg space-y-6">
      <h2 class="text-2xl font-bold text-enaYellow text-center">
        {{ isLogin ? 'Entrar' : 'Criar Conta' }}
      </h2>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-3 rounded bg-gray-800"
        />
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          required
          class="w-full p-3 rounded bg-gray-800"
        />

        <button
          type="submit"
          class="w-full bg-enaYellow text-black py-3 font-semibold rounded hover:brightness-90 transition"
        >
          {{ isLogin ? 'Entrar' : 'Registar' }}
        </button>
      </form>

      <p class="text-center text-gray-400">
        <span>{{ isLogin ? 'Não tem conta?' : 'Já tem conta?' }}</span>
        <button
          @click="isLogin = !isLogin"
          class="ml-2 text-enaYellow underline"
        >
          {{ isLogin ? 'Registe-se' : 'Entre' }}
        </button>
      </p>

      <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '~/composables/useAuth'

const { signIn, signUp, user } = useAuth()
const router = useRouter()

const isLogin = ref(true)
const form = ref({ email: '', password: '' })
const error = ref<string | null>(null)

async function onSubmit() {
  error.value = null
  try {
    if (isLogin.value) {
      await signIn(form.value.email, form.value.password)
    } else {
      await signUp(form.value.email, form.value.password)
    }
    // quando houver user, redireciona para home
    if (user.value) router.push('/')
  } catch (err: any) {
    error.value = err.message
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
