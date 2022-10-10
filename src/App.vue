<script setup></script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
  <p class="score">Score: 100</p>
</template>

<style lang="postcss" scoped>
main {
  @apply flex h-screen items-center justify-center bg-gradient-to-tr from-green-300 to-purple-400;
  & .card {
    @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-purple-100 p-8 shadow-lg;
  }
}

.score {
  @apply absolute bottom-0 right-0 m-2 text-xl font-semibold uppercase text-gray-800;
}
</style>
