<template>
  <main class="blog-main">
    <blog-article-list :blogArticleList="blogArticleList"/>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { BlogArticleList as ArticleList } from '@/types/defineBlogArticle'
import BlogArticleList from '@/components/common/BlogArticle/index.vue'

export default defineComponent({
  name: 'blog-main',
  props: {
    blogArticleList: {
      type: Array as PropType<ArticleList>,
      required: true,
      default () { return [] } 
    }
  },
  components: {
    BlogArticleList
  },
  setup () {
    return {}
  }
})
</script>
