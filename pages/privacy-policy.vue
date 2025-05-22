// File: pages/privacy-policy.vue
<template>
  <div class="min-h-screen bg-enaBlack text-white font-ena p-8">
    <NuxtLink to="/" class="text-sm text-gray-400 hover:text-enaYellow mb-4 inline-block">
      ← Back to Home
    </NuxtLink>
    <h1 class="text-4xl font-bold text-enaYellow mb-6">Privacy Policy</h1>
    <div class="prose prose-invert max-w-4xl">
      <p>Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>
      <h2>1. Information We Collect</h2>
      <ul>
        <li>Wallet address (public blockchain data)</li>
        <li>Basic usage analytics (anonymous)</li>
      </ul>
      <h2>2. Use of Data</h2>
      <p>We use data to improve service quality, diagnose issues, and communicate updates.</p>
      <h2>3. Data Sharing</h2>
      <p>We do not sell your personal data. Blockchain transactions are public by design.</p>
      <h2>4. Security</h2>
      <p>We implement reasonable measures to protect data integrity and confidentiality.</p>
      <h2>5. Changes</h2>
      <p>We may update this policy; we notify via website updates.</p>
      <h2>6. Contact</h2>
      <p>For privacy concerns, contact us on <a href="https://t.me/EnaUniverse" target="_blank" class="text-enaYellow">Telegram</a>.</p>
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