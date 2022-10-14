<script setup>
const props = defineProps({
  difficulty: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p
    class="difficulty"
    :class="
      props.difficulty === 'easy'
        ? 'bg-green-300'
        : props.difficulty === 'medium'
        ? 'bg-yellow-300'
        : 'bg-red-300'
    "
  >
    {{ props.difficulty }}
  </p>
</template>

<style lang="postcss" scoped>
.difficulty {
  @apply absolute bottom-3 left-8 rounded-full px-4 py-2 font-bold capitalize text-gray-600;
}
</style>
