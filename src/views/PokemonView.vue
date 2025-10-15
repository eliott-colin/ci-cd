<template>
  <main class="p-6">
    <h1 class="text-2xl font-bold mb-4">Pokémon par génération</h1>
    <input
      v-model.number="generation"
      type="number"
      min="1"
      max="8"
      placeholder="Entrez une génération"
      class="border p-2 mb-4"
    />
    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="isError">Erreur : {{ error.message }}</div>
    <div v-else class="grid-pokemon">
      <PokemonCard v-for="p in data" :key="p.id" :pokemon="p" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { usePokemonByGeneration } from "@/queries/usePokemonByGeneration";
import PokemonCard from "@/components/PokemonCard.vue";

const generation = ref(1);
const { data, isLoading, isError, error } = usePokemonByGeneration(generation);
</script>
