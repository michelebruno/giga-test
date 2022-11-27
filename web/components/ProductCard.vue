<template>
  <div class="relative pt-[140%] bg-gray cursor-pointer" @click="setProduct(slug.current)">
    <img :src="thumbnail.asset.url" class="absolute inset-0 object-cover w-full h-full">
    <div class="absolute bottom-4 left-4">
      <h3>{{ title }}</h3>
      <h4>{{ formattedPrice }}</h4>
    </div>
  </div>

</template>
<script setup lang="ts">
import {computed, useCurrentProduduct,} from "#imports";

const {title, slug, price, thumbnail} = defineProps(['title', 'thumbnail', 'price', 'slug'])

const {setProduct} = useCurrentProduduct()

const formattedPrice = computed(() => "€ " + new Intl.NumberFormat('it-IT', {minimumFractionDigits: 2}).format(price))
</script>

<style scoped>

</style>