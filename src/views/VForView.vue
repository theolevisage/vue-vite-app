<template>
    <div class="h-36 flex gap-2 justify-center items-center">
      <h1 class="font-bold">V-FOR:</h1>
      <ColorTag 
        v-for="(color, index) in colors"
        :key="index"
        :label="color" 
        :color="color"
      />
    </div>
</template>
<script setup lang="js">
  import ColorTag from '../components/ColorTag.vue';
  // color array for v-for
  const colors = [ 'red', 'green', 'yellow', 'purple']
</script>