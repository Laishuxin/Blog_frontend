<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ title }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in dropdownMenuItems" :key="item.name">
          <template v-if="item.childrenItem">
            <el-dropdown>
              <span class="el-dropdown-link">
                {{ item.name }}<i class="el-icon-arrow-right el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="subItem in item.childrenItem"
                    :key="subItem.name"
                  >
                    {{ subItem.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
          <template v-else>{{ item.name }}</template>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { NavItem } from '@/store/'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    dropdownMenuItems: {
      type: Array as PropType<NavItem[]>,
      required: true,
      default() {
        return []
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>
