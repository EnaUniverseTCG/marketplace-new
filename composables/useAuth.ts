import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useNuxtApp, useRouter } from '#imports'
import type { Session, User } from '@supabase/supabase-js'
import { Web3Provider } from '@ethersproject/providers'

export function useAuth() {
  const { $supabase } = useNuxtApp()
  const router = useRouter()

  const user = ref<User|null>(null)
  const session = ref<Session|null>(null)
  const userAddress = ref<string|null>(null)

  let subscription: ReturnType<typeof $supabase.auth.onAuthStateChange>['data']['subscription']

  onMounted(async () => {
    const { data } = await $supabase.auth.getSession()
    session.value = data.session
    user.value = data.session?.user ?? null

    const { data: listenerData } =
      $supabase.auth.onAuthStateChange((_, s) => {
        session.value = s
        user.value = s?.user ?? null
      })
    subscription = listenerData.subscription
  })

  onUnmounted(() => {
    subscription?.unsubscribe()
  })

  // Web2
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

  // Web3
  async function connect() {
    if (window.ethereum) {
      const provider = new Web3Provider(window.ethereum as any)
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      userAddress.value = await signer.getAddress()
    } else {
      throw new Error('No crypto wallet found')
    }
  }

  function disconnect() {
    userAddress.value = null
  }

  return {
    user:        computed(() => user.value),
    session:     computed(() => session.value),
    userAddress: computed(() => userAddress.value),
    signIn,
    signUp,
    signOut,
    connect,
    disconnect,
  }
}
