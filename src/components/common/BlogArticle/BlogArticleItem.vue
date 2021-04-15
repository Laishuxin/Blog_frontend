<template>
  <article class="blog-article-item">
    {{ blogArticleItem }}
  </article>
</template>

<script lang="ts">
import { BlogArticleItem } from '@/types/defineBlogArticle'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'blog-article-item',
  props: {
    blogArticleItem: {
      type: Object as PropType<BlogArticleItem>,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
</style>