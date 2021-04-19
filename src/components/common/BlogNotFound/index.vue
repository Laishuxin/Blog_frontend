<template>
  <section class="blog-not-found d-flex justify-between h-100 w-100 bg-white ">
    <div class="msg-box">
      <h2 class="font-800 text-xxl">404</h2>
      <p class="my-4">你似乎来到了没有知识存在的荒原</p>
      <el-button type="primary">
        <router-link :to="backTo" class="text-white">去往首页</router-link>
      </el-button>
    </div>
    <div class="img-box">
      <img src="https://zhstatic.zhihu.com/assets/error/liukanshan_wire.svg" alt="errorImg">
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'blog-not-found',
  props: {
    backTo: {
      required: false,
      default: '/home',
      type: String,
    },
  },
  setup(props) {
    return {
      backTo: props.backTo,
    }
  },
})
</script>

<style scoped>
.blog-not-found {
  padding: 10% 30%;
}
</style>