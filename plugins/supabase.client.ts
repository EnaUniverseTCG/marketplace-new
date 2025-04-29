// plugins/supabase.client.ts
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()

export const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey
)
