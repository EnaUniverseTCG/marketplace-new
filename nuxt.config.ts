// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // garante comportamento estável face a breaking changes do Nuxt
  compatibilityDate: '2025-04-24',

  // CSS global
  css: ['~/assets/fonts/ENA-font.css'],

  // ativa checks rígidos de TS
  typescript: { strict: true },

  // módulos do Nuxt
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // expõe variáveis de ambiente (deves ter um .env na raiz)
  runtimeConfig: {
    public: {
      // Supabase
      supabaseUrl:     process.env.NUXT_PUBLIC_SUPABASE_URL     || '',
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || '',
      // Firebase
      firebaseApiKey:     process.env.NUXT_PUBLIC_FIREBASE_API_KEY     || '',
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
      firebaseProjectId:  process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID  || ''
    }
  },

  // regista plugins de cliente
  plugins: [
    '~/plugins/supabase.client.ts',   // login, perfil, Supabase
    '~/plugins/firebase.client.ts',   // Firestore / produtos
    '~/plugins/filters.ts'            // filtros globais (moeda, data)
  ]
})
