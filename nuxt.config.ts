// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // data para garantir comportamentos consistentes de breaking changes
  compatibilityDate: '2025-04-24',

  css: ['~/assets/fonts/ENA-font.css'],

  typescript: { strict: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // runtimeConfig expõe public e private
  runtimeConfig: {
    // estas variáveis vêm do teu .env
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
    }
  },

  // regista o plugin do Supabase (criar em /plugins/supabase.client.ts)
  plugins: [
    '~/plugins/supabase.client.ts'
  ]
})
