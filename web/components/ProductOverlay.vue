<template>

  <div class="product-overlay-container noscrollbar overflow-y-scroll z-20" ref="container"
       :style="{maxHeight : viewportHeight *2  + 'px'}">

    <div class="fixed inset-0 bg-gray h-screen w-screen  z-10"
         :style="{opacity: 1 - scrollProgress }"></div>

    <div class="bg-white h-screen relative z-10" :style="{height : viewportHeight  + 'px'}">
      <div class="p-5 h-screen text-4xl" :style="{height : viewportHeight  + 'px'}">
        <div class="flex lg:gap-5 flex-col lg:grid lg:grid-cols-[1fr_45%_1fr] h-full">
          <div class="text-right lg:col-start-3">
            <button @click="$emit('close')">Close</button>
          </div>

          <div class="py-5 lg:py-0 flex-1 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div class="relative h-full lg:pt-0">
              <img v-if="thumbnail" :src="thumbnail?.asset?.url"
                   class="absolute inset-0 object-cover h-full w-full"/>
            </div>
          </div>

          <h2 class="lg:col-start-1 lg:row-start-2  lg:self-end">{{ title }}</h2>
          <p class="lg:col-start-3 lg:row-start-2 lg:text-right lg:self-end">€
            {{ new Intl.NumberFormat('it-IT', {minimumFractionDigits: 2}).format(price) }}</p>
        </div>
      </div>
    </div>

    <div class="h-screen w-full relative z-10" :style="{height : viewportHeight  + 'px'}"></div>
  </div>

</template>

<script setup lang="ts">
import {defineNuxtComponent, useHead, useState} from "#app";
import {onBeforeUnmount, onMounted, watch} from "#imports";
import {Ref} from "@vue/reactivity";
import {iif} from "rxjs";

defineNuxtComponent({
  name: 'ProductOverlay'
})


const emit = defineEmits(['close'])

const container: Ref<null | HTMLElement> = ref(null)

const viewportHeight = useState('viewport-height')

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


useHead({
  title
})

const scrollProgress = useState('overlay.scrollprogress', () => 1)

onMounted(() => {

  viewportHeight.value = window?.innerHeight
  const defaultScroller = document?.body
  defaultScroller?.classList.add('overflow-hidden')

  container.value?.addEventListener('scroll', e => {
    scrollProgress.value = e?.target?.scrollTop /  e.target.offsetHeight
    if (scrollProgress.value >= 1) emit('close')
  })
})

onBeforeUnmount(() => {

  const defaultScroller = document?.body
  defaultScroller?.classList.remove('overflow-hidden')

})

</script>

<style scoped>

.product-overlay-container {
  position: fixed;
  inset: 0;


}

.noscrollbar {

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.noscrollbar::-webkit-scrollbar {
  display: none;
}


</style>