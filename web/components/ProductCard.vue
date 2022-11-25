<template>

  <div class="relative pt-[140%] bg-gray">

    <img :src="thumbnail.asset.url" class="absolute inset-0 object-cover w-full h-full">
    <div class="absolute bottom-4 left-4">
      <h3>{{title}}</h3>
      <h4>€ {{ new Intl.NumberFormat('it-IT', {minimumFractionDigits:2}).format(price)}}</h4>
    </div>

  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    title: String,
    price: Number,
    thumbnail: Object
  }
}
</script>

<style scoped>

</style>