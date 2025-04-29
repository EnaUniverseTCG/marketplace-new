// composables/useAuth.ts
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useNuxtApp, useRouter } from '#imports'
import type { Session, User } from '@supabase/supabase-js'

export function useAuth() {
  const { $supabase } = useNuxtApp()
  const router = useRouter()

  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)

  // guarda a subscription
  let subscription: ReturnType<typeof $supabase.auth.onAuthStateChange>['data']['subscription']

  onMounted(async () => {
    // pega sessão atual
    const { data } = await $supabase.auth.getSession()
    session.value = data.session
    user.value = data.session?.user ?? null

    // escuta mudanças e armazena a subscription
    const { data: listenerData } = 
      $supabase.auth.onAuthStateChange((_event, s) => {
        session.value = s
        user.value = s?.user ?? null
        if (!s?.user) router.push('/auth')
      })
    subscription = listenerData.subscription
  })

  onUnmounted(() => {
    // cancela o listener
    subscription?.unsubscribe()
  })

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
    router.push('/auth')
  }

  return {
    user: computed(() => user.value),
    session: computed(() => session.value),
    signIn,
    signUp,
    signOut
  }
}
