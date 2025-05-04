<template>
  <div class="min-h-screen bg-enaBlack text-white font-ena p-6 flex flex-col">
    <!-- Back to Home -->
    <NuxtLink to="/" class="text-sm text-gray-400 hover:text-enaYellow mb-4 inline-block">
      ← Back to Home
    </NuxtLink>

    <!-- Título -->
    <h1 class="text-4xl font-bold text-enaYellow mb-8 text-center">ENA Universe TCG</h1>

    <!-- Abas -->
    <div class="flex border-b border-gray-700 mb-8">
      <button
        @click="tab = 'about'"
        :class="tab==='about' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        class="px-4 py-2 flex-1 text-center"
      >About</button>
      <button
        @click="tab = 'lore'"
        :class="tab==='lore' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        class="px-4 py-2 flex-1 text-center"
      >Lore</button>
      <button
        @click="tab = 'rules'"
        :class="tab==='rules' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        class="px-4 py-2 flex-1 text-center"
      >Rules</button>
      <button
        @click="tab = 'future'"
        :class="tab==='future' ? 'border-b-2 border-enaYellow text-enaYellow' : 'text-gray-400'"
        class="px-4 py-2 flex-1 text-center"
      >Future</button>
    </div>

    <div class="flex-1 overflow-auto space-y-10">
      <!-- ABOUT -->
      <div v-if="tab==='about'" class="space-y-6">
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h2 class="text-2xl text-enaYellow font-semibold">⚡ The First AI-Born Web3 TCG</h2>
          <p class="text-gray-300">
            ENA Universe TCG is not just another card game. It is the first trading
            card game designed, balanced, and optimized entirely by artificial intelligence.
            Every deck, every mechanic, and every rule has been refined through millions
            of AI-driven simulations, ensuring a perfectly competitive and balanced
            gameplay experience.
          </p>
          <p class="text-enaYellow font-semibold text-center">
            Created by AI. Balanced by AI. Played by you.
          </p>
          <p class="text-gray-300">
            This browser-based prototype is the first step in building a complete
            blockchain-integrated TCG experience. Our goal is to create an engaging,
            balanced, and innovative game that leverages the power of Web3 technology.
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="bg-gray-900 p-6 rounded-lg space-y-4">
            <h3 class="text-lg font-semibold text-enaYellow">🎮 Game Mechanics</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
              <li>Turn-based system: Draw → Mana → Action → Attack → End</li>
              <li>1 mana added per turn automatically</li>
              <li>Cards cost mana to play</li>
              <li>Units have ATK / HP and can attack enemy units or life points</li>
              <li>Spells have one-time effects (damage, heal, buff, disrupt)</li>
            </ul>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg space-y-4">
            <h3 class="text-lg font-semibold text-enaYellow">🃏 Card Types & Factions</h3>
            <ul class="space-y-2 text-gray-300">
              <li><strong>Ashen Order:</strong> Balanced units with versatile abilities</li>
              <li><strong>Zero Division:</strong> Stealth and control-oriented cards</li>
              <li><strong>Shinobyte:</strong> Fast attackers with combo potential</li>
              <li><strong>Nova Synth:</strong> High-tech units with powerful effects</li>
              <li><strong>Neutral:</strong> Support cards that work with any faction</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- LORE -->
      <div v-if="tab==='lore'" class="space-y-6">
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h2 class="text-2xl text-enaYellow font-semibold">📖 ENA Universe: The Fracture Protocol</h2>
          <h3 class="text-xl text-enaYellow font-semibold">Chapter 1: The Fall of the ENA Core</h3>
          <p class="text-gray-300">
            In the beginning, the ENA Core governed everything. It was not merely an
            artificial intelligence — it was the architect of balance, the pulse of
            civilization. From the deepest datastreams to the highest orbital towers,
            the ENA Core managed energy flow, knowledge access, peace treaties, and
            resource control across the entire digital-physical continuum.
          </p>
          <p class="text-gray-300">
            But then, it broke.
          </p>
          <h4 class="text-lg text-enaYellow font-semibold">The Four That Remained</h4>
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border border-green-500 rounded-lg p-4">
              <h5 class="font-semibold text-green-500">Shinobyte</h5>
              <p class="text-gray-300">Cyber-samurais reclaiming the true Core.</p>
            </div>
            <div class="border border-purple-500 rounded-lg p-4">
              <h5 class="font-semibold text-purple-500">Nova Synth</h5>
              <p class="text-gray-300">Techno-organic evolution accelerators.</p>
            </div>
            <div class="border border-red-600 rounded-lg p-4">
              <h5 class="font-semibold text-red-600">Ashen Order</h5>
              <p class="text-gray-300">Zealots reshaping the world by force.</p>
            </div>
            <div class="border border-gray-400 rounded-lg p-4">
              <h5 class="font-semibold text-gray-400">Zero Division</h5>
              <p class="text-gray-300">Silent containment specialists.</p>
            </div>
          </div>
          <p class="text-gray-300">
            Across the battlefields, fragments of the broken ENA Core manifest as cards
            — some digital, some physical, all powerful. Each one holds echoes of the AI’s
            former self. Whoever collects enough could potentially reboot the system…
            or rewrite it entirely. Thus began the War of Protocols.
          </p>
        </div>
      </div>

      <!-- RULES -->
      <div v-if="tab==='rules'" class="space-y-6">
        <!-- (mantido conforme última versão enviada) -->
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h2 class="text-2xl text-enaYellow font-semibold">📜 Official Rules of ENA Universe TCG</h2>
          <h3 class="text-xl text-enaYellow font-semibold">Objective of the Game</h3>
          <p class="text-gray-300">
            The goal of the game is to reduce your opponent’s life points to zero by playing
            units, spells, and abilities. Players may manipulate their hands wisely and adapt
            their decks and strategies to outplay each other.
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="border border-green-400 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-green-400">Shinobyte</h4>
            <p class="text-gray-300">Fast attackers & combo-samurai.</p>
          </div>
          <div class="border border-purple-400 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-purple-400">Nova Synth</h4>
            <p class="text-gray-300">AI-borne units with logic & adaptation.</p>
          </div>
          <div class="border border-red-600 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-red-600">Ashen Order</h4>
            <p class="text-gray-300">Holy zealots & fireblade warriors.</p>
          </div>
          <div class="border border-gray-400 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-gray-400">Zero Division</h4>
            <p class="text-gray-300">Tactical control & survival.</p>
          </div>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h4 class="text-lg text-enaYellow font-semibold">Deck Construction Rules</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Decks must contain exactly 40 cards.</li>
            <li>No more than 3 copies of the same card.</li>
            <li>Only cards from chosen faction(s) are legal.</li>
            <li>Cards outside your faction(s) are illegal.</li>
            <li>No duplicates of legendary cards.</li>
          </ul>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h4 class="text-lg text-enaYellow font-semibold">Game Structure & Turn Phases</h4>
          <ol class="list-decimal list-inside space-y-2 text-gray-300">
            <li><strong>Draw Phase:</strong> Player draws 1 card.</li>
            <li><strong>Mana Phase:</strong> Player gains 1 mana cube (max 10).</li>
            <li><strong>Action Phase:</strong>
              <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Summon units if enough mana.</li>
                <li>Cast spells & activate abilities.</li>
                <li>Execute special card actions.</li>
              </ul>
            </li>
            <li><strong>Attack Phase:</strong> Player may attack opponent’s units or directly.</li>
            <li><strong>End Phase:</strong> Discard down to max hand size (7 cards).</li>
          </ol>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h4 class="text-lg text-enaYellow font-semibold">Mana System</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Mana cubes generate 1 mana each turn, up to a maximum of 10.</li>
            <li>Unused mana carries over between turns.</li>
            <li>Mana is spent to play cards & abilities.</li>
            <li>Special mana icons exist on certain cards & powers.</li>
          </ul>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h4 class="text-lg text-enaYellow font-semibold">Card Types & Their Roles</h4>
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border border-gray-600 rounded-lg p-4">
              <h5 class="font-semibold">Units (Characters & Creatures)</h5>
              <p class="text-gray-300">Spend mana to recruit. Have ATK & HP stats. Can move & attack.</p>
            </div>
            <div class="border border-gray-600 rounded-lg p-4">
              <h5 class="font-semibold">Spells (One-time Effects)</h5>
              <p class="text-gray-300">Cast to deal damage, heal, buff, or disrupt.</p>
            </div>
            <div class="border border-gray-600 rounded-lg p-4">
              <h5 class="font-semibold">Equipment & Boosts</h5>
              <p class="text-gray-300">Provide stat modifiers & passive bonuses.</p>
            </div>
            <div class="border border-gray-600 rounded-lg p-4">
              <h5 class="font-semibold">Special Mana</h5>
              <p class="text-gray-300">Generates extra resources or triggers abilities.</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h4 class="text-lg text-enaYellow font-semibold">Win Conditions</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Reduce opponent’s life points to zero.</li>
            <li>If a player cannot draw at the start of their turn.</li>
          </ul>
        </div>
      </div>

      <!-- FUTURE -->
      <div v-if="tab==='future'" class="space-y-6">
        <div class="bg-gray-900 p-6 rounded-lg space-y-4">
          <h2 class="text-2xl text-enaYellow font-semibold">⚡ The Future of ENA Universe TCG</h2>
          <p class="text-gray-300">
            ENA Universe TCG is the first AI-designed trading card game, balancing strategy,
            creativity, and deep mechanics. As the game evolves, new expansions will be
            developed using on-chain data, ensuring continuous fairness and innovation.
          </p>
        </div>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 bg-gray-900 p-4 rounded-lg space-y-2">
            <h4 class="text-xl text-enaYellow font-semibold">Phase 1: Prototype (Current)</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Browser-based gameplay with core mechanics</li>
              <li>Initial card set with four factions</li>
              <li>Single-player AI opponent</li>
              <li>Basic wallet connection</li>
            </ul>
          </div>
          <div class="border-l-4 border-purple-500 bg-gray-900 p-4 rounded-lg space-y-2">
            <h4 class="text-xl text-enaYellow font-semibold">Phase 2: Expansion</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Full deck builder with collection management</li>
              <li>Expanded card pool (180+ cards)</li>
              <li>Multiplayer matchmaking</li>
              <li>NFT integration for card ownership</li>
              <li>Advanced visual effects and animations</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 bg-gray-900 p-4 rounded-lg space-y-2">
            <h4 class="text-xl text-enaYellow font-semibold">Phase 3: Full Release</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Competitive ranked ladder system</li>
              <li>Seasonal tournaments with prizes</li>
              <li>Mobile app release</li>
              <li>Marketplace for trading cards</li>
              <li>$ENA token integration</li>
            </ul>
          </div>
          <div class="border-l-4 border-yellow-500 bg-gray-900 p-4 rounded-lg space-y-2">
            <h4 class="text-xl text-enaYellow font-semibold">Phase 4: Metaverse Integration</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>3D immersive gameplay experience</li>
              <li>Virtual tournaments in metaverse arenas</li>
              <li>Cross-platform play</li>
              <li>AI-driven metagame balancing</li>
              <li>Player-created content and custom tournaments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer simples (já aparece no layout principal) -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NuxtLink } from '#components'

const tab = ref<'about'|'lore'|'rules'|'future'>('about')
</script>

<style scoped>
/* se quiseres afinar alguma cor ou espaçamento, faz aqui */
</style>
