<script setup>
import useScore from '@/composables/useScore'
const { score } = useScore()
</script>

<template>
  <p class="score">Score: {{ score }}</p>
</template>
/script>

<style lang="postcss" scoped>
.score {
  @apply absolute bottom-0 right-0 m-2 text-xl font-semibold uppercase text-gray-800;
}
</style>
