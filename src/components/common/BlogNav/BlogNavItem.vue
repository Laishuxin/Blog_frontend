<template>
  <!-- second series -->
  <template v-if="!blogNavItem.children">
    <el-menu-item :index="blogNavItem.path">
      {{ blogNavItem.name }}
    </el-menu-item>
  </template>

  <!-- second series -->
  <template v-else>
    <el-submenu :index="blogNavItem.path">
      <template #title>
        {{ blogNavItem.name }}
      </template>

      <!-- third series -->
      <template v-for="item in blogNavItem.children" :key="item.path">
      </template>
    </el-submenu>
  </template>
</template>

<script lang="ts">
import { NavItem } from '@/store'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'blog-nav-item',
  props: {
    blogNavItem: {
      type: Object as PropType<NavItem>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.blog-nav-item {
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  // height: 100%;
  box-sizing: border-box;

  &:hover {
    border-bottom: 4px solid var(--primary-color-2, #2196f3);
  }
  transition: all 0.5s;
  &.active {
    border-bottom: 4px solid var(--primary-color-2, #2196f3);
  }
}

.clear-hover {
  &:hover {
    border-bottom: none !important;
  }
}

.text {
  font-size: 14px !important;
  color: #606266 !important;
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif !important;
}
</style>
