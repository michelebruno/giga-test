<template>
  <main class="font-semibold">
    <section class="min-h-screen bg-white relative">
      <video src="~assets/index-cover-video.mp4"
             class="inset-0 absolute object-cover object-center h-full w-full" loop autoplay playsinline muted
             poster="~assets/index-cover-video-poster.jpg"/>
    </section>
    <Wrapper id="second-section">
      <Heading subheading="Potteries by Leonardo Romano">
        Pot Pot Pottery
      </Heading>
    </Wrapper>
    <ProductGrid :items="data?.articles" back-to="/">

      <div class="text-center">
        <NuxtLink to="/archive">Discover all</NuxtLink>
      </div>
    </ProductGrid>

  </main>
</template>

<script setup lang="ts">
import {onMounted, useCurrentProduduct} from "#imports";

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

onMounted(() => {
  setTimeout(() => {
    document?.getElementById('second-section')?.scrollIntoView({behavior:'smooth'})
  },2000)
})
</script>

