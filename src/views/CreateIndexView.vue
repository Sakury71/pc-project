<script lang="js" setup>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import { post, get } from '@/net/index.js'
import { ref, onMounted } from 'vue'

const textarea = ref('')        // 存放输入的文本
const resultContent = ref('')   // 存放返回的文本
const videoUrl = ref('')        // 存放视频 URL
const isGenerating = ref(false) // 控制是否显示 "视频生成中，请等待"
let progressInterval;           // 外部声明，保存 interval ID
let taskId = ref('')

onMounted(() => {
  const name = new URLSearchParams(window.location.search).get('name')
  if (name) {
    textarea.value = `请帮我生成一个“${name}”的非遗视频`
  }
})

function handleKeydown(event) {
  if (event.key === 'Enter') {
    // 阻止默认换行行为
    event.preventDefault()
    // 开始视频生成请求
    isGenerating.value = true
    post('/create/video', { text: textarea.value }, handleSuccess, handleFailure)
  }
}

function handleSuccess(response) {
  if (response) {
    taskId.value = response
    checkGenerationProgress()
  } else {
    console.error('接口返回的结果格式不正确')
    isGenerating.value = false
    resultContent.value = '请求失败，请重试'
  }
}

function handleFailure(error) {
  console.error(error)
  isGenerating.value = false
  resultContent.value = '请求失败，请重试'
}

function checkGenerationProgress() {
  // 定时查询进度，假设查询接口为 /video/{taskId}
  progressInterval = setInterval(() => {
    get(`/create/video/${taskId.value}`, handleProgressSuccess, handleProgressFailure)
  }, 30000)
}

function handleProgressSuccess(response) {
  if (response) {
    const output = response;
    console.log(output)

    if (output.video_url) {
      // 视频生成完成，停止查询并显示结果
      clearInterval(progressInterval);
      resultContent.value = '视频生成完成！';
      videoUrl.value = output.video_url;
      isGenerating.value = false;
    } else {
      console.log('视频生成中...');
    }
  } else {
    console.error('查询视频进度时，接口返回的结果格式不正确');
    isGenerating.value = false;
    resultContent.value = '查询进度失败，请重试';
  }
}

function handleProgressFailure(error) {
  console.error(error)
  isGenerating.value = false
  resultContent.value = '查询进度失败，请重试'
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
          size="large" placeholder="请输入要生成的视频信息" @keydown="handleKeydown" />
      </div>

      <div v-if="isGenerating" class="result">视频生成中，请等待...</div>
      <div v-else-if="resultContent" class="result">
        视频生成完成！
        <video v-if="videoUrl" :src="videoUrl" controls width="750px"></video>
      </div>
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
    margin-bottom: 25px;
  }

  .custom-input :deep(.el-textarea__inner::placeholder) {
    color: #888;
  }
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  height: auto;
  width: auto;
  color: #fff;
  font-size: 20px
}

video {
  margin-top: 10px;
  max-width: 100%;
}

#sticky-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>