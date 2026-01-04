<template>
  <div class="flex gap-2 w-full min-h-screen justify-center items-center bg-green-300">
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
</template>

<script setup>
  import { ref } from 'vue'
  import IncrementButton from './components/IncrementButton.vue';

  let counterValue = ref(0)
  const incrementValue = () => {
    console.log('Le bouton a été cliqué')
    counterValue.value++
  }

</script>
