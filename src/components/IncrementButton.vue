<template>
    <button 
        type="button"
        class="border p-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
    >
        {{ buttonText }}
    </button >
</template>

<script setup lang="js">
import { ref } from 'vue'

const buttonText = ref('Je suis un bouton')
</script>