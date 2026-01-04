<template>
    <div class="h-56 flex gap-2 justify-center items-center">
      <h1 class="font-bold">GET POKEMON FROM HOOK:</h1>
      <div class="flex-col bg-white rounded p-6">
        <div class="text-center">{{ pokemonData?.name?.fr }}</div>
        <img 
          class="w-32" 
          :src="pokemonData?.sprites?.regular" 
        />
      </div>
    </div>
</template>
<script setup lang="js">
  import { ref, onMounted } from 'vue'
  // API call
  const pokemonData = ref()
  onMounted( async () => {
    const response = await fetch('https://tyradex.app/api/v1/pokemon/246')
    pokemonData.value = await response.json()
  })
</script>