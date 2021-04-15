<template>
  <div class="page-container d-flex flex-column justify-between px-0 bg-grey-1">
    <!-- header start -->
    <blog-header
      class="box-border bg-white position-fixed zindex-sticky"
    ></blog-header>
    <!-- header end -->
    <router-view class="blog-view"></router-view>
    <!-- footer start -->
    <blog-footer class="bg-white"></blog-footer>
    <!-- footer end -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BlogHeader from '@/components/content/BlogHeader.vue'
import BlogFooter from '@/components/content/BlogFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    BlogHeader,
    BlogFooter
  }
})
</script>

<style lang="scss" scoped>
$header-height: 54px;
.blog-header {
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
}

.blog-view {
  margin-top: $header-height;
}
</style>