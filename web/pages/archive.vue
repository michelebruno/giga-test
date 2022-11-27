<template>
  <main>
    <Wrapper>
      <Heading subheading="Potteries by Leonardo Romano">
        Pot Pot Pottery
      </Heading>
    </Wrapper>
    <Wrapper v-if="data && data.articles">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
        <ProductCard v-for="article in data.articles" v-bind="article"/>
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

const query = gql`
query {
  articles: allArticle {
     title
     price
     slug {
        current
     }
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

definePageMeta({
  keepalive: true,
  key: 'archive',
  validate: async (route) => {

    if (/^\/archive/gi.test(route.path)) return true;

    const matches = route.path.match(/^\/products\/([A-z-\w\s]*)/)

    return matches?.length && data?.articles.includes(matches[1]) || {
      statusCode: 404,
      statusMessage: "We couldn't find your product"
    }

  }
})

const {backTo, product} = useCurrentProduduct()

function closeModal() {
  backTo('/archive')
}
</script>
