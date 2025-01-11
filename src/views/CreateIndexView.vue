<script lang="js" setup>
import axios from 'axios'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import { post } from '@/net/index.js'
import { ref } from 'vue'
const textarea = ref('')
const resultContent = ref('')

function handleKeydown(event) {
  if (event.key === 'Enter') {
    // 阻止默认的换行行为
    event.preventDefault()
    console.log(textarea.value)
    post('/create/video', { text: textarea.value }, handleSuccess, handleFailure)
  }
}
function handleSuccess(response) {
  console.log(response)
  resultContent.value = response
}

function handleFailure(error) {
  console.error(error)
}
</script>
<template>
  <div class="about-container">
    <!-- 页面导航条 -->
    <Header></Header>
    <!-- 页面内容 -->
    <div class="about-content">
      <div class="about-title">欢迎使用非遗AI二创视频功能！</div>
      <div>
        <el-input v-model="textarea" class="custom-input" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
          size="large" placeholder="请输入要生成的视频信息" @keydown="handleKeydown">
        </el-input>
      </div>
      <div class="result">{{ resultContent }}</div>
    </div>
    <!-- 页脚 -->
    <div id="sticky-footer">
      <Footer style="background-color: #212121;"></Footer>
    </div>
  </div>
</template>
<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #212121;
  height: 100vh;
}

.about-content {
  margin-top: 120px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .about-title {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .custom-input :deep(.el-textarea__inner) {
    background-color: #2f2f2f;
    color: #fff;
    width: 560px;
    border-radius: 10px;
    outline: 1px solid #444;
    box-shadow: none;
    margin-bottom: 50px;
  }

  .custom-input :deep(.el-textarea__inner::placeholder) {
    color: #888;
  }
}

.result {
  margin-top: 25px;
  height: auto;
  width: auto;
  color: #fff;
  font-size: 20px
}

#sticky-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>