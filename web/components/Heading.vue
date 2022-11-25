<template>
  <div class="w-full text-center text-4xl font-semibold pb-32 pt-4">
    <h1 class="text-black">
      <slot></slot>
    </h1>
    <h2 v-if="subheading" class="text-gray">{{ subheading }}</h2>
  </div>
</template>
<script>
export default {
  props: ['subheading']
}
</script>
<style scoped>

</style>