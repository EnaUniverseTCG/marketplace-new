// stores/user.ts
import { defineStore } from 'pinia'
import { computed }    from 'vue'
import { useAuth }     from '~/composables/useAuth'

export const useUserStore = defineStore('user', () => {
  // reaproveitamos todo o composable de auth
  const { 
    user, 
    session, 
    userAddress, 
    signIn, 
    signUp, 
    signOut, 
    connect, 
    disconnect 
  } = useAuth()

  // expomos também alguns getters customizados
  const isLoggedIn = computed(() => !!user.value)
  const email      = computed(() => user.value?.email ?? null)
  const name       = computed(() => user.value?.user_metadata?.full_name ?? null)

  return {
    // state & session
    user,
    session,
    userAddress,

    // getters
    isLoggedIn,
    email,
    name,

    // actions
    signIn,
    signUp,
    signOut,
    connect,
    disconnect,
  }
})
