<template>
  <nav class="blog-nav">
    <ul class="nav-list" v-if="blogNavList">
      <blog-nav-item
        v-for="item in blogNavList"
        :key="item.name"
        :blogNavItem="item"
      >
      </blog-nav-item>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { BlogNavList } from '@/types/defineBlogNav'
import BlogNavItem from '@/components/common/BlogNav/BlogNavItem.vue'

export default defineComponent({
  name: 'blog-nav',
  props: {
    blogNavList: {
      type: Array as PropType<BlogNavList>,
      require: true
    }
  },
  components: {
    BlogNavItem
  },
  setup () {
    return {}
  }
})
</script>

<style>
</style>
