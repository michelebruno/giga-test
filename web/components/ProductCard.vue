<template>
  <div class="relative pt-[140%] bg-gray cursor-pointer" @click="setProduct(slug.current)">
    <SanityImage :asset-id="thumbnail.asset._id" auto="format" class="absolute inset-0 object-cover w-full h-full" />
    <div class="absolute bottom-4 left-4">
      <h3><a :href="'/products/' + slug.current" class="!text-black" @click.prevent>{{ title }}</a></h3>
      <h4>{{ formattedPrice }}</h4>
    </div>
  </div>
  <slot></slot>

</template>
<script setup lang="ts">
import {computed, useCurrentProduduct,} from "#imports";

const {title, slug, price, thumbnail} = defineProps({
  title: String,
  price: Number,
  slug: {
    current: String,
    required: true
  },
  thumbnail: Object,
  __typename: String
})

const {setProduct} = useCurrentProduduct()

const formattedPrice = computed(() => "€ " + new Intl.NumberFormat('it-IT', {minimumFractionDigits: 2}).format(price))
</script>

<style scoped>


</style>