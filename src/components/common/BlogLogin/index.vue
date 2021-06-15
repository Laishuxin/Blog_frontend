<template>
  <div
    class="blog-login d-flex justify-center align-center w-100 h-100 bg-white"
  >
    <div class="login-wrap w-45 mt-4">
      <div class="logo mb-4 text-center">
        <img src="~@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="tip my-3 text-xxl text-center">Sign in to Blog</div>
      <el-form
        label-position="top"
        label-width="100px"
        class="login-form bg-grey-1 p-4 border-1-primary"
        ref="loginFormRef"
        hide-required-asterisk
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item label="Username" prop="username">
          <el-input
            v-model="loginForm.username"
            @focus="handleInputFocus"
          ></el-input>
        </el-form-item>
        <el-form-item label="Passwrod" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
            @focus="handleInputFocus"
          ></el-input>
        </el-form-item>
        <div class="error-tip mb-4">
          <transition name="fade">
            <span v-if="errorTip.showMessage">
              {{ errorTip.message }}
            </span>
          </transition>
        </div>
        <el-form-item class="text-center w-100" :class="{shake: isShake}">
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
            class="w-100"
          >
            Login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
export default defineComponent({
  name: 'blog-login',
  setup(props, context) {
    // 设置登录表单信息
    const loginForm = ref({
      username: '',
      password: '',
    })
    const loginFormRef = ref<null | any>(null)

    const errorTip = ref({
      showMessage: false,
      message: '',
    })
    const isShake = ref(false)

    // 验证规则
    const rules = {
      username: [
        {
          required: true,
          message: 'Please input  username',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 32,
          message: 'Length should be 3 to 10',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please enter password',
          trigger: 'blur',
        },
        {
          min: 6,
          max: 255,
          message: 'Match length error',
          trigger: 'blur',
        },
      ],
    }

    // 提交表单
    const submitForm = async () => {
      // 获取表单
      const form = unref(loginFormRef as any)
      if (!form || errorTip.value.showMessage) return false
      try {
        // 验证表单
        await form.validate()
        // - pass: 表单提交
        context.emit('formSubmit', loginForm.value)
        isShake.value = false
      } catch (err) {
        // - fail: 提醒用户
        // console.log('表单验证失败')
        isShake.value = true
      }
    }

    // set login error tip
    const setErrorTip = (tip: { showMessage: boolean; message: string }) => {
      errorTip.value.showMessage = tip.showMessage
      errorTip.value.message = tip.message
    }
    const handleInputFocus = () => {
      errorTip.value.showMessage = false
      errorTip.value.message = ''
    }
    return {
      loginForm,
      rules,
      loginFormRef,
      submitForm,
      errorTip,
      setErrorTip,
      handleInputFocus,
      isShake,
    }
  },
})
</script>

<style scoped>
.login-wrap {
  max-width: 420px;
}

.login-form {
  border-radius: 10px;
}

.error-tip {
  color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.error-tip {
  height: 16px;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
