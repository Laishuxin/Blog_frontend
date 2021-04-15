<template>
  <div class="home">
    <blog-swipe></blog-swipe>
    <div class="home-wrapper d-flex justify-between px-8">
      <blog-main 
        class="flex-1"
        :blogArticleList="articleList"
      ></blog-main>
      <blog-aside></blog-aside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BlogSwipe from '@/components/content/BlogSwipe.vue'
import BlogMain from '@/components/content/BlogMain.vue'
import BlogAside from '@/components/content/BlogAside.vue'
import { BlogArticleList } from '@/types/defineBlogArticle'

export default defineComponent({
  components: {
    BlogSwipe,
    BlogAside,
    BlogMain
  },
  setup () {
    const _articleList: BlogArticleList = [
      { id: 1, title: '三国演义' },
      { id: 2, title: '围城' }
    ]
    
    const articleList = ref(_articleList)
    return {
      articleList
    }
  }
})
</script>

<style scoped></style>
