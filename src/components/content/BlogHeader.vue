<template>
  <header
    class="blog-header d-flex justify-between align-center text-sm card-box-shadow-positive py-1 px-6"
  >
    <blog-home-link class="h-100 d-flex" />
    <blog-nav class="h-100" :blogNavList="navList" />
    <div class="wrapper d-flex justify-center align-center">
      <blog-search class="" />
      <!-- TODO(rushui 2021-04-19): isLogin? show profile : show login button -->
      <!-- <blog-profile class="flex-0 ml-4" /> -->
    </div>
  </header>
</template>

<script lang="ts">
import BlogNav from '@/components/common/BlogNav/index.vue'
import BlogHomeLink from '@/components/common/BlogHomeLink.vue'
import BlogSearch from '@/components/common/BlogSearch.vue'
import BlogProfile from '@/components/common/BlogProfile/index.vue'

import { computed, defineComponent, ref } from 'vue'
import { State, useStore } from '@/store'
import { Store } from 'vuex'
import { validate } from '@/api/Auth'
import { SET_LOGIN, SET_USER } from '@/store/mutation-types'

function preLogin(store: Store<State>) {
  let token = localStorage.getItem('token')
  if (!token) return

  const result = validate(token)
  result
    .then((value) => {
      store.commit(SET_USER, value)
      store.commit(SET_LOGIN, true)
    })
    .catch((err) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('pre login err: ', err)
      }
    })
}

export default defineComponent({
  name: 'blog-header',
  components: {
    BlogNav,
    BlogHomeLink,
    BlogSearch,
    BlogProfile,
  },
  setup() {
    const store = useStore()
    const isLogin = computed(() => store.state.isLogin)
    const user = computed(() => store.state.user)
    const navList = store.state.navList
    if (!isLogin.value) preLogin(store)

    return {
      navList,
      isLogin,
      user,
    }
  },
})
</script>

<style scoped lang="scss">
// .blog-header {
//   height: 60px;
// }
</style>
