<template>
  <div class="text-3xl font-semibold">
    <slot/>
    <footer class="pt-32  px-4 pb-4">
      <div class="w-full flex justify-between">
        <div>
          <NuxtLink to="/">Pot Pot Pottery</NuxtLink>
        </div>
        <div class="flex">
          <a href="" class="mr-5">Instagram</a>
          <a href="">Facebook</a>

        </div>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>