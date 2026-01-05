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
  import ColorTag from '../components/ColorTag.vue'
  import { useNavigationStore } from '../stores/navigation'
  import { useRoute } from 'vue-router'
  // color array for v-for
  const colors = [ 'red', 'green', 'yellow', 'purple']

  const navStore = useNavigationStore()
  const currentRoute = useRoute().path
  navStore.setLastNavigatedRoute(currentRoute)
</script>