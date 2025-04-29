import { defineNuxtPlugin } from '#app'
import VanillaTilt from 'vanilla-tilt'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tilt', {
    mounted(el, binding) {
      const options = binding.value || {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      }
      VanillaTilt.init(el, options)
    },
    unmounted(el) {
      el.vanillaTilt?.destroy()
    },
  })
})
