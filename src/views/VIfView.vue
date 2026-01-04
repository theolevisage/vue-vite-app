<template>
    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">V-IF / V-ELSE:</h1>
      <SimpleButton @click="toggleVisibility">TOGGLE VISIBILITY</SimpleButton>
      <div v-if="visible">NOW YOU SEE ME</div>
      <div v-else>NOW YOU DON'T</div>
    </div> 
</template>
<script setup lang="js">
  import { ref } from 'vue'
  import SimpleButton from '../components/SimpleButton.vue';
  // ref and method for v-if
  const visible = ref(true)
  const toggleVisibility = () => {
    visible.value = !visible.value
  }
</script>