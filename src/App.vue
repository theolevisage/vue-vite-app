<template>
  <div class="w-full min-h-screen bg-green-300">
    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">V-BIND and V-ON:</h1>
      <IncrementButton 
          v-bind:counter="counterValue"
          v-on:click="incrementValue"
      />
      <IncrementButton 
        v-on:click="incrementValue"
      >
        <div class="flex gap-2 font-semibold text-green-600">
          <span>Je suis un bouton incremental avec un slot : {{ counterValue }}</span>
          <span>
            <!-- Icon SVG récupéré sur le site Heroicons https://heroicons.com/ -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>  
        </div>
      </IncrementButton>
    </div>

    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">V-FOR:</h1>
      <ColorTag 
        v-for="(color, index) in colors"
        :key="index"
        :label="color" 
        :color="color"
      />
    </div>

    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">V-IF / V-ELSE:</h1>
      <SimpleButton @click="toggleVisibility">TOGGLE VISIBILITY</SimpleButton>
      <div v-if="visible">NOW YOU SEE ME</div>
      <div v-else>NOW YOU DON'T</div>
    </div>  
    
    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">V-MODEL:</h1>
      <input 
        type="text"
        v-model="vModelValue" 
        placeholder="Type your text here"
        class="bg-white p-2 rounded"
      >
      <div>{{ vModelValue }}</div>
    </div>
    
    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">GET POKEMON FROM HOOK:</h1>
      <div class="flex-col bg-white rounded p-6">
        <div class="text-center">{{ pokemonData?.name?.fr }}</div>
        <img 
          class="w-32" 
          :src="pokemonData?.sprites?.regular" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import IncrementButton from './components/IncrementButton.vue';
  import ColorTag from './components/ColorTag.vue';
  import SimpleButton from './components/SimpleButton.vue';

  // incremental button ref and method
  const counterValue = ref(0)
  const incrementValue = () => {
    console.log('Le bouton a été cliqué')
    counterValue.value++
  }
  // color array for v-for
  const colors = [ 'red', 'green', 'yellow', 'purple']
  // ref and method for v-if
  const visible = ref(true)
  const toggleVisibility = () => {
    visible.value = !visible.value
  }
  // ref for v-model
  const vModelValue = ref('')
  // API call
  const pokemonData = ref()
  onMounted( async () => {
    const response = await fetch('https://tyradex.app/api/v1/pokemon/246')
    pokemonData.value = await response.json()
  })

</script>
