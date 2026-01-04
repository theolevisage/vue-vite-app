<template>
    <button 
        type="button"
        class="border p-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
        v-on:click="emits('click')"
    >
        <slot>Je suis un bouton incrémental : {{ counter }}</slot>
    </button >
</template>

<script setup lang="js">

defineProps({
    counter: {
        type: Number,
        default: () => 0
    }
})

const emits = defineEmits(['click'])

</script>