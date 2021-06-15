<template>
  <div class="login bg-white">
    <div class="h-100" v-if="isLogin">
      <blog-not-found />
    </div>
    <div class="w-100" v-else>
      <blog-login @formSubmit="handleLoginFormSubmit" ref="blogLoginRef" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'
import BlogLogin from '@/components/common/BlogLogin/index.vue'
import { LoginApi, LoginApiResponse } from '@/types/defineApi'
import { login } from '@/api/User'
import { encrypt } from '@/utils/crypt_util'
import router from '@/router'
import { ResponseError } from '@/api/http'
import { Store } from 'vuex'
import { State, useStore } from '@/store/'
import { SET_LOGIN, SET_USER } from '@/store/mutation-types'
import BlogNotFound from '@/components/common/BlogNotFound/index.vue'
// TODO(rushui 2021-04-19): fix a error when isLogin, and visit login view will
//                          cause render error

function _handleLoginSuccess(response: LoginApiResponse, store: Store<State>) {
  localStorage.setItem('token', response.token)
  // 1. save user information
  store.commit(SET_USER, response.data)
  // 2. save login status
  store.commit(SET_LOGIN, true)
  // 3. go home page
  router.push('/home')
  // router.replace('/home')
}

function _handleLoginFail(err: ResponseError, loginRef: Ref<any>) {
  loginRef.value['setErrorTip']({ showMessage: true, message: err.message })
}

export default defineComponent({
  name: 'Login',
  components: {
    BlogLogin,
    BlogNotFound,
  },
  setup() {
    const blogLoginRef = ref(null)
    const store = useStore()
    const isLogin = computed(() => store.state.isLogin)

    const handleLoginFormSubmit = async (user: LoginApi) => {
      login<LoginApiResponse>({
        username: user.username,
        password: encrypt(user.password),
      })
        .then((value) => _handleLoginSuccess(value, store))
        .catch((err) => _handleLoginFail(err, blogLoginRef))
    }
    return {
      handleLoginFormSubmit,
      blogLoginRef,
      isLogin,
    }
  },
})
</script>

<style scoped>
</style>
