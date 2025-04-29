// plugins/supabase.client.ts
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public

  const supabase: SupabaseClient = createClient(
    config.supabaseUrl,
    config.supabaseAnonKey
  )

  return {
    provide: {
      supabase
    }
  }
})
