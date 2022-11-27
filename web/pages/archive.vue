<template>
  <main>
    <Wrapper>
      <Heading subheading="Potteries by Leonardo Romano">
        Pot Pot Pottery
      </Heading>
    </Wrapper>

    <ProductGrid :items="data?.articles" back-to="/archive/"/>

  </main>

</template>

<script setup lang="ts">
import {useCurrentProduduct} from "#imports";
import ProductGrid from "~/components/ProductGrid.vue";
import {useHead} from "#app";

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
          _id
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

useHead({
  title:'Archive'
})
const {backTo, product, isArchiveOnSSR} = useCurrentProduduct()

const renderArchive = typeof window !== 'undefined' || isArchiveOnSSR


</script>
