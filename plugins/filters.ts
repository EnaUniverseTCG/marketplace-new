// plugins/filters.ts
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      // ex: {{ value | currency }}
      currency: (value: number, locale = 'pt-PT', currency = 'EUR') =>
        new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value),
      // ex: {{ dateString | date }}
      date: (d: string, locale = 'pt-PT', options?: Intl.DateTimeFormatOptions) =>
        new Intl.DateTimeFormat(locale, options || { dateStyle: 'medium' }).format(new Date(d))
    }
  }
})
