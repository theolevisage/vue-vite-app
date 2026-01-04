<template>
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
</template>
<script setup lang="js">
  import { ref } from 'vue' 
  // ref for v-model
  const vModelValue = ref('')
</script>