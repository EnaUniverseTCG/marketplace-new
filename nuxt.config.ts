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
  ],

  // configura head para favicons e manifest
  app: {
    head: {
      link: [
        // favicon .ico padrão
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // PNGs em tamanhos específicos
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // ícone para iOS
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // Android Chrome
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        // manifesto para PWA
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        // cor do tema para navegadores mobile
        { name: 'theme-color', content: '#000000' },
        // configuração Windows tile
        { name: 'msapplication-TileColor', content: '#000000' },
        // se tiveres browserconfig.xml no /public
        { name: 'msapplication-config', content: '/browserconfig.xml' }
      ]
    }
  }
})
