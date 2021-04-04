<template>
  <footer class="blog-footer d-flex flex-column align-center py-2">
    <div class="signature-wrapper my-8 text-center">
      <!-- TODO(rushui 2021-04-04): modify title -->
      <img
        src="~@/assets/images/signature.jpg"
        title="Ru Shui"
        class="h-100"
        alt="signature"
      />
    </div>
    <div class="contact"></div>
    <div class="copyright">
       <!-- TODO(rushui 2021-04-04): slot -->
      MIT Licensed | Copyright © 2021-present Ru Shui
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.blog-footer {
  // height: 100px!important;
  .signature-wrapper {
    height: 80px;
  }
  
  // .signature {
  //   font-size: 100px;
  //   font-weight: 200;
  //   line-height: 200px;
  // }
}
</style>
