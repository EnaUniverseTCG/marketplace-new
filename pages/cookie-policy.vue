// File: pages/cookie-policy.vue
<template>
  <div class="min-h-screen bg-enaBlack text-white font-ena p-8">
    <NuxtLink to="/" class="text-sm text-gray-400 hover:text-enaYellow mb-4 inline-block">
      ← Back to Home
    </NuxtLink>
    <h1 class="text-4xl font-bold text-enaYellow mb-6">Cookie Policy</h1>
    <div class="prose prose-invert max-w-4xl">
      <p>This Cookie Policy explains how ENA Universe uses cookies and similar technologies.</p>
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your browser to remember preferences.</p>
      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li>Essential cookies for site functionality</li>
        <li>Analytics cookies to measure usage</li>
      </ul>
      <h2>3. Managing Cookies</h2>
      <p>You can disable cookies via your browser settings, but site may not function properly.</p>
      <h2>4. Changes</h2>
      <p>We may update this policy; changes effective upon posting.</p>
      <h2>5. Contact</h2>
      <p>Questions? Message us on <a href="https://t.me/EnaUniverse" target="_blank" class="text-enaYellow">Telegram</a>.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');
.font-ena { font-family: 'Orbitron', sans-serif; }
.prose a { color: #FBBF24; }
</style>