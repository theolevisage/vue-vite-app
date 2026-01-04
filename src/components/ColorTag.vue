<template>
    <div 
        class="rounded border px-3 py-1"
        :class="colorClass[color]"
    >
        {{ label }}
    </div>
</template>

<script setup lang="js">
defineProps(['label', 'color'])

const colorClass = {
    red: ['bg-red-200', 'text-red-800'],
    green: ['bg-green-200', 'text-green-800'],
    yellow: ['bg-yellow-200', 'text-yellow-800'],
    purple: ['bg-purple-200', 'text-purple-800']
}
</script>