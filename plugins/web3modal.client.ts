import { defineNuxtPlugin } from '#app'
import Web3Modal from 'web3modal'
import { Web3Provider } from '@ethersproject/providers'  // <—

export default defineNuxtPlugin((nuxtApp) => {
  const web3Modal = new Web3Modal({ cacheProvider: true, providerOptions: {} })
  nuxtApp.provide('web3Modal', web3Modal)

  const connectWallet = async () => {
    const instance = await web3Modal.connect()
    const provider = new Web3Provider(instance)           // <—
    const signer = provider.getSigner()
    return { provider, signer }
  }

  nuxtApp.provide('connectWallet', connectWallet)
})
