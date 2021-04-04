<template>
  <header
    class="blog-header d-flex justify-between align-center text-sm card-box-shadow-positive py-1 px-4"
  >
    <blog-home-link class="h-100"></blog-home-link>
    <blog-nav class="h-100 md-hidden"></blog-nav>
    <blog-search></blog-search>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlogNav from '@/components/common/BlogNav.vue'
import BlogHomeLink from '@/components/common/BlogHomeLink.vue'
import BlogSearch from '@/components/common/BlogSearch.vue'


export default defineComponent({
  name: 'blog-header',
  components: {
    BlogNav,
    BlogHomeLink,
    BlogSearch
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.blog-header {
  height: 60px;
}
</style>
