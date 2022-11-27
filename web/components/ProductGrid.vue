<template>
  <Wrapper v-if="items">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
      <ProductCard v-for="article in items" v-bind="article"/>
    </div>
    <slot></slot>
  </Wrapper>

  <Teleport to="body">
    <transition :appear="isArchiveOnSSR" name="overlay">
      <ProductOverlay  v-if="product"  v-bind="items.find(p => p.slug.current === product) || {}"
                      @close="closeModal"/>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>

import {useCurrentProduduct} from "#imports";

interface Props {
  backTo?: string
  items: Object[]
}

const props = withDefaults(defineProps<Props>(), {backTo: '/archive'})

const {product, backTo, isArchiveOnSSR} = useCurrentProduduct()

function closeModal() {
  backTo(props.backTo)
}

</script>

<style >

.overlay-enter-active, .overlay-leave-active {
  transition: all .3s cubic-bezier(.77, 0, .175, 1);
}

.overlay-enter-from {
  transform: translateY(100vh);
}

.overlay-leave-to {
  transform: translateY(-100vh);
}

.overlay-enter-to, .overlay-leave-from {
  transform: translateY(0);
}
</style>