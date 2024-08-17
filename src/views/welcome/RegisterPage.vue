<script setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const form = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})
const rule = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ]
}
</script>
<template>
  <div style="text-align: center;margin: 0 20px;">
    <div style="margin-top: 75px;">
      <div style="font-size: 25px;font-weight: bold;">注册新用户</div>
      <div style="font-size: 14px;color: grey;">欢迎您注册，请在下方填写信息</div>
    </div>
    <div style="margin-top: 50px;">
      <el-form :model="form" :rule="rule">
        <el-form-item prop="username">
          <el-input v-model="form.username" type="text" maxlength="15" placeholder="用户名/邮箱">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" maxlength="20" placeholder="密码" show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.confirmPassword" type="password" maxlength="20" placeholder="重复密码" show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-top: 60px;">
      <el-button type="success" plain style="width: 270px;">立即注册</el-button>
    </div>
    <div style="margin-top: 20px;">
      <span style="font-size: 15px;line-height: 15px; color: grey;">已有账号？</span>
      <router-link to="/" style="translate: 0 -1px;">立即登录</router-link>
    </div>
  </div>

</template>
<style scoped></style>