<template>
  <section class="off-line d-flex flex-column justify-center align-center">
    <h3>网络中断中...</h3>
    <div class="btn mt-5">
      <el-button class="btn">
        <router-link to="/home">Take me to home.</router-link>
      </el-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'off-line',
  setup() {
    return {}
  },
})
</script>

<style scoped>
.btn {
  color: #fff!important;
  background: var(--primary-color, #2196f3) !important;
}
.btn a {
  color: #fff;
}
</style>
