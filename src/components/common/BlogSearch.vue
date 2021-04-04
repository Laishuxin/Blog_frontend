<template>
  <div class="blog-search">
    <i class="icon icon-search iconfont"></i>
    <input
      type="text"
      :class="{ focused: focus }"
      aria-label="Search"
      autocomplete="off"
      placeholder="search..."
      spellcheck="false"
      @blur.prevent="focus = false"
      @focus.prevent="focus = true"
      value
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    // const state1 = ref('')
    // const focus= false
    const focus = ref(false)
    return {
      focus
    }
  }
})
</script>

<style scoped lang="scss">
$search-input-height: 32px;
$icon-size: 20px;
.blog-search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
}

.icon {
  position: relative;
  display: inline-block;
  width: $icon-size;
  height: $icon-size;
  left: 30px;
  color: var(--text-color, #242424);
  // background: lightblue;
}

.blog-search input {
  display: inline-block;
  cursor: text;
  width: 180px;
  height: $search-input-height;
  color: #5b5b5b;
  border: 1px solid #cfd4db;
  border-radius: $search-input-height / 2;
  font-size: 14px;
  line-height: $search-input-height;
  outline: none;
  padding: 0px 16px 0 30px;
  transition: all 0.6s ease;
  background: #efeef4;

  &:hover {
    border-color: var(--primary-color-2, #2196f3);
  }
}
.blog-search input.focused {
  width: 240px;
  background: #fff;
}
</style>
