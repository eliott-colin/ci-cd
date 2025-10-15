<template>
  <div class="border p-4 rounded-lg text-center shadow">
    <img :src="pokemon.image" :alt="pokemon.name" class="mx-auto w-24 h-24" />
    <h2 class="font-semibold">{{ pokemon.name }}</h2>
    <p class="text-sm text-gray-500">
      Type : {{ pokemon.apiTypes.map((t) => t.name).join(", ") }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>
