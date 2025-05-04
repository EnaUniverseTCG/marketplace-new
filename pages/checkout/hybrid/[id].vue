<template>
  <div class="relative min-h-screen font-ena text-white bg-enaBlack overflow-hidden">
    <!-- Vídeo de fundo -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover opacity-20">
      <source src="/ena-bg-video.mp4" type="video/mp4" />
    </video>

    <div class="relative z-10 max-w-3xl mx-auto px-6 py-16 space-y-12">
      <NuxtLink to="/" class="text-gray-400 hover:text-enaYellow mb-4 inline-block">
        ← Back to Home
      </NuxtLink>

      <h1 class="text-4xl font-bold text-enaYellow">
        Checkout Hybrid Card  #{{ id }}
      </h1>

      <!-- Resumo da carta / preço -->
      <div class="bg-gray-800 p-6 rounded-lg border border-enaYellow">
        <p class="text-gray-300">
          You’re about to buy the <strong>Hybrid</strong> version of<br>
          <span class="text-enaYellow font-semibold">Card #{{ id }}</span>.
        </p>
        <p class="mt-4 text-xl">
          Price: <span class="font-bold">0.05&nbsp;ETH</span> + shipping
        </p>
      </div>

      <!-- Toggle Digital Twin -->
      <div class="bg-gray-800 p-6 rounded-lg border border-enaYellow">
        <label class="flex items-center space-x-3">
          <input
            type="checkbox"
            v-model="withTwin"
            class="w-5 h-5 text-enaYellow bg-gray-900 border-gray-700 rounded"
          />
          <span class="text-gray-300">
            Include Digital On-Chain Twin
          </span>
        </label>
        <p v-if="withTwin" class="mt-2 text-gray-400 text-sm">
          Your twin will be minted to your wallet and ready for staking, trading or in-game use.
        </p>
      </div>

      <!-- Wallet / Network Instructions -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-enaYellow">How to pay with Crypto</h2>
        <ol class="list-decimal list-inside text-gray-300 space-y-2">
          <li>
            Install MetaMask (or another Web3 wallet).
          </li>
          <li>
            Add Soneium network:<br>
            <code class="bg-gray-900 px-1 py-0.5 rounded text-sm">
              RPC: https://rpc.soneium.org<br>
              Chain ID: 1234
            </code>
          </li>
          <li>
            Copy your wallet address (click “Copy Address”).
          </li>
          <li>
            Click “Pay with Wallet” below and confirm the transaction.
          </li>
          <li>
            <em>(Optional)</em> Verify your on-chain twin on
            <a href="https://opensea.io" target="_blank" class="text-enaYellow underline">
              OpenSea
            </a>
            after mint.
          </li>
        </ol>
      </section>

      <!-- Pay button -->
      <div class="text-center">
        <button
          @click="pay()"
          :disabled="paying"
          class="px-8 py-4 bg-enaYellow text-black font-bold rounded-lg hover:brightness-90 transition"
        >
          {{ paying ? 'Processing…' : 'Pay with Wallet' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Web3Provider } from '@ethersproject/providers'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const withTwin = ref(true)
const paying = ref(false)

async function pay() {
  try {
    paying.value = true
    // 1) Conectar wallet
    if (!(window as any).ethereum) {
      alert('Please install MetaMask or compatible wallet.')
      return
    }
    const provider = new Web3Provider((window as any).ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    // 2) Enviar transacção (exemplo fixo)
    const tx = await signer.sendTransaction({
      to: '0xYourContractOrReceiverAddress',
      value: '0x'+(0.05 * 1e18).toString(16)  // 0.05 ETH
    })
    await tx.wait()
    // 3) Redireccionar para “sucesso”
    router.push('/checkout/success')
  } catch (e: any) {
    alert(e.message || 'Transaction failed')
  } finally {
    paying.value = false
  }
}
</script>

<style scoped>
.font-ena { font-family: 'Orbitron', sans-serif; }
</style>
