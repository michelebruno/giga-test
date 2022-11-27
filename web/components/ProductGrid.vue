<template>
  <Wrapper v-if="items">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
      <ProductCard v-for="article in items" v-bind="article"/>
    </div>
  </Wrapper>
</template>

<script lang="ts" setup>

const props = defineProps(['items'])

</script>

<style scoped>

</style>