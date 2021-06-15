<template>
  <el-menu mode="horizontal" router>
    <blog-nav-item
      v-for="item in blogNavList"
      :key="item.path"
      :blogNavItem="item"
    />
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import BlogNavItem from '@/components/common/BlogNav/BlogNavItem.vue'
import { NavItem, NavList } from '@/store/'

export default defineComponent({
  name: 'blog-nav',
  props: {
    blogNavList: {
      type: Array as PropType<NavList>,
      require: true,
    },
  },
  components: {
    BlogNavItem,
  },
  setup() {
    return {}
  },
})
</script>

<style>
.el-menu {
  border: none !important;
}
</style>
