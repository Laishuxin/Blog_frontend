
<template>
  <section class="blog-article-list">
    <section class="article-list-wrapper" v-if="blogArticleList">
      <blog-article-item
        v-for="item in blogArticleList"
        :key="item.id"
        :blogArticleItem="item"
      ></blog-article-item>
    </section>
  </section>
</template>

<script lang="ts">
import { BlogArticleList } from '@/types/defineBlogArticle'
import { defineComponent, PropType } from 'vue'
import BlogArticleItem from '@/components/common/BlogArticle/BlogArticleItem.vue'

export default defineComponent({
  name: 'blog-article-list',
  props: {
    blogArticleList: {
      type: Array as PropType<BlogArticleList>,
      required: true
    }
  },
  components: {
    BlogArticleItem
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
</style>