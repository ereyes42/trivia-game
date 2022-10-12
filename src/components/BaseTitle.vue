<template>
  <div class="brand">
    <slot name="logo" />
    <h1 class="title">
      <slot />
    </h1>
    <slot name="logo" />
  </div>
</template>
<style lang="postcss" scoped>
.brand {
  @apply flex items-center justify-center gap-4;

  & :slotted(img) {
    @apply h-12 w-12;
  }
  & .title {
    @apply text-4xl font-semibold uppercase tracking-wide text-teal-600;
  }
}
</style>
