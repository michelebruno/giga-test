<template>
  <div class="text-3xl font-semibold">
    <keep-alive>
      <slot/>
    </keep-alive>
    <footer class="pt-32  px-4 pb-4">
      <div class="w-full sm:flex justify-between">
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
.page-enter-active, .page-leave-active {
  transition: all .3s cubic-bezier(.77, 0, .175, 1);
}

.page-enter-from {
  transform: translateY(100vh);
}

.page-leave-to {
  transform: translateY(-100vh);
}

.page-enter-to, .page-leave-from {
  transform: translateY(0);
}
</style>