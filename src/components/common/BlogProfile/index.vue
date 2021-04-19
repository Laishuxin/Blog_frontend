<template>
  <div class="blog-profile">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
         <!-- TODO(rushui 2021-04-19): :src -->
        <img class="avatar" src="@/assets/images/logo.png" alt="avatar">
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped>
.avatar{
  width: 30px;
  height: 30px;
}
</style>
