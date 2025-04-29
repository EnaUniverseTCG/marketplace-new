import { ref } from 'vue'
import { useNuxtApp } from '#app'
import { dev } from 'process'

export function useAuth() {
  const nuxtApp = useNuxtApp()
  // @ts-ignore
  const connectWallet = nuxtApp.$connectWallet

  const userAddress = ref<string | null>(null)

  const connect = async () => {
    const { signer } = await (connectWallet as any)()
    userAddress.value = await signer.getAddress()
  }

  return { userAddress, connect }
}
