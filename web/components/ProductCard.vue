<template>
  <div class="relative pt-[140%] bg-gray cursor-pointer" @click="isModalOpen = true">
    <img :src="thumbnail.asset.url" class="absolute inset-0 object-cover w-full h-full">
    <div class="absolute bottom-4 left-4">
      <h3>{{ title }}</h3>
      <h4>€ {{ new Intl.NumberFormat('it-IT', {minimumFractionDigits: 2}).format(price) }}</h4>
    </div>
  </div>

  <Teleport to="body">
    <ProductOverlay v-if="isModalOpen" :title="title" :thumbnail="thumbnail" :price="price" @close="isModalOpen=false"/>
  </Teleport>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    title: String,
    price: Number,
    thumbnail: Object
  },
  data() {
    return {
      isModalOpen: false
    }
  }
}
</script>

<style scoped>

</style>