// composables/useAuth.ts
import { ref } from 'vue'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'

export function useAuth() {
  const userAddress = ref<string|null>(null)
  const provider    = ref<Web3Provider|null>(null)
  const signer      = ref<JsonRpcSigner|null>(null)

  async function connect() {
    if (!(window as any).ethereum) {
      throw new Error('No crypto wallet found')
    }
    const ethereum = (window as any).ethereum

    //  → Primeiro, pede para o MetaMask usar/adicionar a rede Soneium:
    try {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId:        '0x74C',             // 1868 em hex
          chainName:      'Soneium Mainnet',
          nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
          rpcUrls:        ['https://rpc.soneium.org/'],
          blockExplorerUrls: ['https://soneium.blockscout.com']
        }]
      })
    } catch (addError) {
      // se o utilizador cancelar ou já existir, ignoramos
      console.warn('Network add/switch failed', addError)
    }

    //  → Agora sim, solicitamos contas:
    const web3 = new Web3Provider(ethereum)
    await web3.send('eth_requestAccounts', [])
    provider.value = web3
    signer.value   = web3.getSigner()
    userAddress.value = await signer.value.getAddress()

    console.log('Connected address:', userAddress.value)
  }

  function disconnect() {
    userAddress.value = null
    provider.value    = null
    signer.value      = null
  }

  return {
    userAddress,
    provider,
    signer,
    connect,
    disconnect,
  }
}
