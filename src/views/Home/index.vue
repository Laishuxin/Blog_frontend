<template>
  <div class="home">
    <blog-swipe></blog-swipe>
    <div class="home-wrapper d-flex justify-between px-8">
      <blog-main 
        class="flex-1"
        :blogArticleList="articleList"
      >
      {{user}}</blog-main>
      <blog-aside></blog-aside>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import BlogSwipe from '@/components/content/BlogSwipe.vue'
import BlogMain from '@/components/content/BlogMain.vue'
import BlogAside from '@/components/content/BlogAside.vue'
import { BlogArticleList } from '@/types/defineBlogArticle'
import { useStore } from '@/store/'

export default defineComponent({
  name: 'Home',
  components: {
    BlogSwipe,
    BlogAside,
    BlogMain
  },
  setup () {
    const store = useStore()
    const _articleList: BlogArticleList = [
      { id: 1, title: '三国演义' },
      { id: 2, title: '围城' }
    ]
    const user = computed(() => store.state.user)
    const isLogin = computed(() => store.state.isLogin)
    // console.log(user)
    
    const articleList = ref(_articleList)
    return {
      articleList,
      user,
      isLogin
    }
  }
})
</script>

<style scoped></style>
