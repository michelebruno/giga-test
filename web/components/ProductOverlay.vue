<template>
  <div class="fixed inset-0 bg-gray h-screen w-screen  z-10" :style="{opacity: 1- scrollProgress }"></div>
  <transition appear>
    <div class="product-overlay-container z-20" ref="container">

      <div class="bg-white h-screen">
        <div class="p-5 h-screen text-4xl">
          <div class="flex md:gap-5 flex-col md:grid md:grid-cols-[1fr_45%_1fr] h-full">
            <div class="text-right md:col-start-3">
              <button @click="scrollDown">Close</button>
            </div>

            <div class="py-5 md:py-0 flex-1 md:col-start-2 md:row-start-1 md:row-span-2">

              <div class="relative h-full md:pt-0">
                <img v-if="thumbnail" :src="thumbnail?.asset?.url" class="absolute inset-0 object-cover h-full w-full"/>
              </div>
            </div>

            <h2 class="md:col-start-1 md:row-start-2  md:self-end">{{ title }}</h2>
            <p class="md:col-start-3 md:row-start-2 md:text-right md:self-end">€
              {{ new Intl.NumberFormat('it-IT', {minimumFractionDigits: 2}).format(price) }}</p>
          </div>
        </div>
      </div>

      <div class="h-screen"></div>
    </div>
  </transition>

</template>

<script setup lang="ts">
import {defineNuxtComponent, useState} from "#app";
import {onBeforeUnmount, onMounted} from "#imports";
import {Ref} from "@vue/reactivity";

defineNuxtComponent({
  name: 'ProductOverlay'
})

const emit = defineEmits(['close'])

const container: Ref<null | HTMLElement> = ref(null)

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

const scrollProgress = useState('overlay.scrollprogress', () => 1)

onMounted(() => {
  document?.getElementById('__nuxt')?.classList.add('overflow-hidden')

  container.value?.addEventListener('scroll', e => {
    scrollProgress.value = e?.target?.scrollTop / window.innerHeight
    if (scrollProgress.value === 1) emit('close')
  })
})

onBeforeUnmount(() => {
  document?.getElementById('__nuxt')?.classList.remove('overflow-hidden')

})

function scrollDown() {
  container.value?.scrollTo({top: window?.outerHeight * 2, behavior: 'smooth'})

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