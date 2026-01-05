<template>
    <div>This is the home view</div>
</template>
<script setup lang="js">
  import { useNavigationStore } from '../stores/navigation'
  import { useRoute } from 'vue-router';

  const navStore = useNavigationStore()
  const currentRoute = useRoute().path
  navStore.setLastNavigatedRoute(currentRoute)
</script>