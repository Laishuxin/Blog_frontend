<template>
  <div class="blog-home-link">
    <a href="#" class="home-link d-flex h-100">
      <img src="~@/assets/images/logo.png" alt="logo" class="logo mr-2" />
      <span class="site-name">Ru Shui</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
$logo-size: 44px;

.blog-home-link {
  width: 200px;
  min-width: 200px;
  color: var(--text-color, #242424);
  a:hover {
    color: var(--text-color, #242424);
  }

  .logo {
    width: $logo-size;
    height: $logo-size;
  }

  // .site-name {}
}
</style>
