<template>
  <aside class="blog-aside" v-show="showAside">aside</aside>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/'

export default defineComponent({
  name: 'blog-aside',
  setup() {
    const store = useStore()
    const showAside = computed(() => store.state.showAside)
    return {
      showAside,
    }
  },
})
</script>

<style scoped lang="scss">
.blog-aside {
  width: 220px !important;
}
</style>
