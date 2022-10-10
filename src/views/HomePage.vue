<script setup>
import { onMounted, ref } from 'vue'
import useAPI from '@/composables/useApi'

const api = useAPI()
const categories = ref([])

onMounted(async () => {
  categories.value = await api.getCategories()
})
</script>

<template>
  <div class="brand">
    <img class="logo" src="logo.svg" alt="logo" />
    <h1 class="title">Trivia Game</h1>
    <img class="logo" src="logo.svg" alt="logo" />
  </div>
  <div class="categories">
    <RouterLink
      v-for="category in categories"
      :key="category.id"
      :to="`/question/category/${category.id}`"
      class="category"
      >{{ category.name }}</RouterLink
    >
  </div>
</template>

<style lang="postcss" scoped>
.brand {
  @apply flex items-center justify-center gap-4;

  & .logo {
    @apply h-14 w-14;
  }
  & .title {
    @apply text-4xl font-semibold uppercase tracking-wide text-teal-600;
  }
}

.categories {
  @apply grid flex-grow grid-cols-4 gap-10;
  & .category {
    @apply flex h-28 w-36 items-center justify-center rounded-lg border-4 border-teal-400 py-4 text-center font-bold uppercase text-purple-400 transition-colors duration-300;
    &:hover {
      @apply cursor-pointer border-purple-300 bg-purple-300 text-gray-500;
    }
  }
}
</style>
