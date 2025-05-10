// composables/useProducts.ts
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { collection, getDocs } from 'firebase/firestore'

export function useProducts() {
  const { $firebaseDb } = useNuxtApp()
  const products = ref<any[]>([])
  const loading = ref(false)
  const error = ref<string|null>(null)

  onMounted(async () => {
    loading.value = true
    try {
      const snapshot = await getDocs(collection($firebaseDb, 'products'))
      products.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  })

  return { products, loading, error }
}
