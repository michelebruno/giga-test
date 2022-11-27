<template>
  <main class="font-semibold">
    <section class="min-h-screen bg-white relative">
      <video src="~assets/index-cover-video.mp4"
             class="inset-0 absolute object-cover object-center h-full w-full" loop autoplay playsinline muted
             poster="~assets/index-cover-video-poster.jpg"/>
    </section>
    <Wrapper>
      <Heading subheading="Potteries by Leonardo Romano">
        Pot Pot Pottery
      </Heading>
    </Wrapper>

    <Wrapper v-if="data && data.articles">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
        <ProductCard v-for="article in data.articles" v-bind="article"/>
      </div>

      <div class="text-center">
        <NuxtLink to="/archive">Discover all</NuxtLink>
      </div>
    </Wrapper>
  </main>

  <Teleport to="body">
    <ProductOverlay v-if="product" v-bind="data.articles.find(p => p.slug.current === product)"
                    @close="closeModal"/>
  </Teleport>
</template>

<script setup lang="ts">
import {useCurrentProduduct} from "#imports";

const {product, backTo} = useCurrentProduduct();

function closeModal() {
  backTo('/')
}

const query = gql`
query {
  articles: allArticle(limit: 3) {
     title
     price
     slug {current}
     thumbnail {
        asset {
          size
          url
        }
      }
    }
  }
`
const {data} = await useAsyncQuery(query)


</script>

<style scoped>

</style>