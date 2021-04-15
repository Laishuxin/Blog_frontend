<template>
  <header
    class="blog-header d-flex justify-between align-center text-sm card-box-shadow-positive py-1 px-4"
  >
    <blog-home-link class="h-100"></blog-home-link>
    <blog-nav class="h-100" :blogNavList="navList"></blog-nav>
    <blog-search></blog-search>
  </header>
</template>

<script lang="ts">
import BlogNav from '@/components/common/BlogNav/index.vue'
import BlogHomeLink from '@/components/common/BlogHomeLink.vue'
import BlogSearch from '@/components/common/BlogSearch.vue'

import { defineComponent, ref } from 'vue'
import { BlogNavList } from '@/types/defineBlogNav'


export default defineComponent({
  name: 'blog-header',
  components: {
    BlogNav,
    BlogHomeLink,
    BlogSearch
  },
  setup () {
    const _navList: BlogNavList = [
      { name: '首页', path: '/home' }
    ]
    const navList= ref(_navList)
    return {
      navList
    }
  }
})
</script>

<style scoped lang="scss">
// .blog-header {
//   height: 60px;
// }
</style>
