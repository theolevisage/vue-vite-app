<template>
  <div class="w-full min-h-screen bg-green-300">
    <nav class="flex gap-4 py-4 px-6 bg-green-100">
      <RouterLink 
        to="/"
        class="bg-white hover:bg-gray-100 hover:text-green-600 p-2 rounded cursor-pointer border"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </RouterLink>
      <RouterLink 
        to="/increment-button"
        class="bg-white hover:bg-gray-100 hover:text-green-600 p-2 rounded cursor-pointer border"
      >
        V-BIND / V-ON
      </RouterLink>
      <RouterLink 
        to="/v-for"
        class="bg-white hover:bg-gray-100 hover:text-green-600 p-2 rounded cursor-pointer border"
      >
        V-FOR
      </RouterLink>
      <RouterLink 
        to="/v-if"
        class="bg-white hover:bg-gray-100 hover:text-green-600 p-2 rounded cursor-pointer border"
      >
        V-IF / V-ELSE
      </RouterLink>
      <RouterLink 
        to="/v-model"
        class="bg-white hover:bg-gray-100 hover:text-green-600 p-2 rounded cursor-pointer border"
      >
        V-MODEL
      </RouterLink>
      <RouterLink 
        to="/lifecycle-hook"
        class="bg-white hover:bg-gray-100 hover:text-green-600 p-2 rounded cursor-pointer border"
      >
        LIFECYCLE HOOK
      </RouterLink>
      <div>Last nav: {{ navStore.lastNavigatedRoute }}</div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
  import { useNavigationStore } from './stores/navigation'
  const navStore = useNavigationStore()
</script>
