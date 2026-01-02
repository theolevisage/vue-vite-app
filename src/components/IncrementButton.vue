<template>
    <button 
        type="button"
        class="border p-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
        v-on:click="emits('click')"
    >
        {{ buttonText }}
    </button >
</template>

<script setup lang="js">

defineProps({
    buttonText: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['click'])

</script>