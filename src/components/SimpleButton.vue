<template>
    <button 
        type="button"
        class="border p-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
        v-on:click="emits('click')"
    >
        <slot>SimpleButton</slot>
    </button >
</template>

<script setup lang="js">
const emits = defineEmits(['click'])
</script>