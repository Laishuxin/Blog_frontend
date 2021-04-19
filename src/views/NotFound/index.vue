<template>
  <div class="not-found h-100 bg-white w-100">
    <blog-not-found class="h-100" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlogNotFound from '@/components/common/BlogNotFound/index.vue'

export default defineComponent({
  name: 'not-found',
  components: {
    BlogNotFound,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>