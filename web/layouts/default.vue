<template>
  <div class="text-3xl font-semibold">
    <keep-alive>
      <slot />
    </keep-alive>
    <footer class="pt-32  px-4 pb-4">
      <div class="w-full flex justify-between">
        <div>
          <NuxtLink to="/">Pot Pot Pottery</NuxtLink>
        </div>
        <div class="flex">
          <a href="https://instagram.com/potpotpottery" target="_blank" class="mr-5 secondary">Instagram</a>
          <a href="https://www.facebook.com/potpotpottery/" target="_blank" class="secondary">Facebook</a>
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