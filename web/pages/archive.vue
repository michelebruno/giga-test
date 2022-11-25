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
</template>

<script setup lang="ts">
const query = gql`
query {
  articles: allArticle {
     title
     price
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