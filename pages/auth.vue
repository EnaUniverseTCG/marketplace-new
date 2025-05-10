<template>
  <div class="min-h-screen flex items-center justify-center bg-enaBlack p-4">
    <div class="max-w-md w-full bg-gray-900 p-6 rounded-lg text-white space-y-6">
      <h2 class="text-2xl font-bold text-enaYellow text-center">
        {{ isLogin ? 'Entrar' : 'Criar Conta' }}
      </h2>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-3 rounded bg-gray-800 text-white focus:outline-enaYellow"
        />
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          required
          class="w-full p-3 rounded bg-gray-800 text-white focus:outline-enaYellow"
        />
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-enaYellow text-black py-3 font-semibold rounded hover:brightness-90 transition disabled:opacity-50"
        >
          <span v-if="loading">⏳</span>
          <span v-else>{{ isLogin ? 'Entrar' : 'Registar' }}</span>
        </button>
      </form>

      <p class="text-center text-gray-400">
        <span>{{ isLogin ? 'Não tem conta?' : 'Já tem conta?' }}</span>
        <button @click="isLogin = !isLogin" class="ml-2 text-enaYellow underline">
          {{ isLogin ? 'Registe-se' : 'Entre' }}
        </button>
      </p>

      <div v-if="error" class="text-red-500 text-sm text-center">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useAuth } from '#imports'

const router = useRouter()
const { signIn, signUp } = useAuth()

const isLogin = ref(true)
const form = ref({ email: '', password: '' })
const loading = ref(false)
const error = ref<string|null>(null)

async function onSubmit() {
  loading.value = true
  error.value = null

  try {
    if (isLogin.value) {
      await signIn(form.value.email, form.value.password)
    } else {
      await signUp(form.value.email, form.value.password)
    }
    // se chegou aqui sem lançar erro, redireciona:
    router.push('/profile')
  } catch (err: any) {
    error.value = err.message || 'Erro ao autenticar'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
