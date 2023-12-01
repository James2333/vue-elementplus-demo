<template>
  <el-form
      label-width="120px"
      class="container"
      ref="forgotForm"
      :model="forgotUser"
      :rules="forgotRules"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
          type="email"
          v-model="forgotUser.email"
          placeholder="输入邮箱"
      />
    </el-form-item>
    <el-form-item>
      <!-- 提交前进行校验 -->
      <el-button @click="handleForgotPassword(forgotForm)" type="primary" class="submit-btn"
      >发送邮件
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {ref, inject} from 'vue'
import {forgotUser, forgotRules} from "@/utils/loginValidators";
// import {useRouter} from 'vue-router'

const axios = inject('axios')

// ? 获取 DOM 元素
let forgotForm = ref()

// let commitDisable = ref<boolean>(false)
const handleForgotPassword = (formEl: any): void => {
  formEl.validate((valid: boolean) => {
    if (valid) {
      axios.post('/api/v1/auth/forgotpassword', {email: forgotUser.email})
          .then((res: any): void => {
            console.log(res.data)
          }).catch((err: any) => {
        console.log(err);
      })
      formEl.resetFields()
    } else {
      console.log('提交的格式有误，请重新提交')
      return false
    }
  })
}
// const handleForgotPassword = () => {
//   // @ts-ignore
//   axios.post('/api/v1/auth/forgotpassword', {email: forgotUser.email})
//       .then((res: any): void => {
//         console.log(res.data)
//       }).catch((err: any) => {
//     console.log(err);
//
//   })
// }
</script>

<style scoped>
.container {
  width: 50%;
  margin: 200px auto;
}

.submit-btn {
  width: 100%;
}
</style>