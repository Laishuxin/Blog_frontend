<template>
  <li class="blog-nav-item">
    {{ blogNavItem }}
  </li>
</template>

<script lang="ts">
import { BlogNavItem } from '@/types/defineBlogNav'
import { defineComponent, PropType } from 'vue'


export default defineComponent({
  name: 'blog-nav-item',
  props: {
    blogNavItem: {
      type: Object as PropType<BlogNavItem>,
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
