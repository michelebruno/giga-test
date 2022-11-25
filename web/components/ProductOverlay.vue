<template>
  <div class="fixed inset-0 bg-gray h-screen w-screen  z-10" :style="{opacity: 1- scrollProgress }"></div>
  <transition appear>
    <div class="product-overlay-container z-20" ref="container">
      <div class="bg-gray h-screen">
        {{ title }}
      </div>
      <div class="h-screen"></div>
    </div>
  </transition>

</template>

<script>
export default {
  name: "ProductOverlay",
  props: {
    title: String,
    price: Number,
    thumbnail: Object
  },
  data() {
    return {
      scrollProgress: 1
    }
  },
  mounted() {
    document.getElementById('__nuxt').classList.add('overflow-hidden')

    this.$refs.container.addEventListener('scroll', e => {
      this.scrollProgress = e.target.scrollTop / window.innerHeight
      if (this.scrollProgress === 1) this.$emit('close')
    })
  },
  beforeUnmount() {
    document.getElementById('__nuxt').classList.remove('overflow-hidden')
  }
}
</script>

<style scoped>

.product-overlay-container {
  position: fixed;
  inset: 0;
  overflow-y: scroll;
  max-height: 100vh;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.product-overlay-container::-webkit-scrollbar {
  display: none;
}


/* we will explain what these classes do next! */
.v-enter-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.v-enter-from {
  transform: translateY(100vh);
}

.v-enter-to {
  transform: translateY(0);
}

</style>