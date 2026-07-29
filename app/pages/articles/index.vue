<script setup lang="ts">
import type { Article, Articles } from '#shared/types/Article'

const items = ref()

onMounted(async () => {
  const { data: articles } = await useFetch('/api/articles', {
    query: {
      limit: 5,
      offset: 0
    }
  })

  console.log(articles.value)
  if (!articles.value?.contents) return
  items.value = articles.value?.contents
})
</script>

<template>
  <NuxtLayout>
    {{ items }}
  </NuxtLayout>
</template>
