// plugins/firebase.client.ts
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const app = initializeApp({
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
  })
  const db = getFirestore(app)
  return { provide: { firebaseDb: db } }
})
