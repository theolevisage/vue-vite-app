<template>
  <div class="flex w-full min-h-screen justify-center items-center bg-green-300">
    <IncrementButton 
        v-bind:button-text="buttonText"
        v-on:click="printConsoleMessage"
    />
  </div>
</template>

<script setup>
  import IncrementButton from './components/IncrementButton.vue';

  const buttonText = 'Je suis un bouton'
  const printConsoleMessage = () => {
    console.log('Le bouton a été cliqué !')
  }

</script>
