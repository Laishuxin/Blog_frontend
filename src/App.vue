<template>
  <div class="page-container d-flex flex-column justify-between px-0">
    <blog-header class="box-border bg-white"></blog-header>
    <section class="flex-grow-1">
      <blog-swipe class=""></blog-swipe>
      <section class="d-flex box-border px-1">
        <blog-main class="flex-1"></blog-main>
        <blog-aside class="flex-shrink-0"></blog-aside>
      </section>
    </section>
    <blog-footer></blog-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BlogHeader from '@/components/content/BlogHeader.vue'
import BlogAside from '@/components/content/BlogAside.vue'
import BlogMain from '@/components/content/BlogMain.vue'
import BlogFooter from '@/components/content/BlogFooter.vue'
import BlogSwipe from '@/components/content/BlogSwipe.vue'

// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    BlogHeader,
    BlogSwipe,
    BlogAside,
    BlogMain,
    BlogFooter
  }
})
</script>
