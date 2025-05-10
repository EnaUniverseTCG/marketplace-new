// composables/useAuth.ts
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useNuxtApp } from '#imports'
import { useRouter } from 'vue-router'
import type { Session, User } from '@supabase/supabase-js'
import { Web3Provider } from '@ethersproject/providers'

export function useAuth() {
  const { $supabase } = useNuxtApp()
  const router = useRouter()

  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)
  const userAddress = ref<string | null>(null)

  // fallback to any para o subscription, evita erro de tipo
  let subscription: any

  onMounted(async () => {
    // pega a sessão atual
    const { data: { session: s } } = await $supabase.auth.getSession()
    session.value = s
    user.value = s?.user ?? null

    // escuta mudanças de auth
    const { data: listener } = $supabase.auth.onAuthStateChange((_event, newSession) => {
      session.value = newSession
      user.value = newSession?.user ?? null
    })
    subscription = listener.subscription
  })

  onUnmounted(() => {
    subscription?.unsubscribe?.()
  })

  // --- Web2 methods ---
  async function signIn(email: string, password: string) {
    const { error } = await $supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  async function signUp(email: string, password: string) {
    const { error } = await $supabase.auth.signUp({ email, password })
    if (error) throw error
  }

  async function signOut() {
    await $supabase.auth.signOut()
    user.value = null
    session.value = null
    router.push('/auth')
  }

  // --- Web3 methods ---
  async function connect() {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found')
    }
    const provider = new Web3Provider(window.ethereum as any)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    userAddress.value = await signer.getAddress()
  }

  function disconnect() {
    userAddress.value = null
  }

  return {
    // exposição reativa
    user:        computed(() => user.value),
    session:     computed(() => session.value),
    userAddress: computed(() => userAddress.value),
    // métodos
    signIn,
    signUp,
    signOut,
    connect,
    disconnect,
  }
}
