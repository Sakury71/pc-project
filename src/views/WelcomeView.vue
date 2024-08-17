<script setup>
</script>
<template>
  <div style="width: 100vw;height: 100vh;overflow: hidden;display: flex">
    <div style="flex: 1">
      <el-image style="width: 100%;height:100%" fit="cover" :src="'src/assets/img/login.png'">
      </el-image>
    </div>
    <div class="welcome-title">
      <div style="font-size: 36px;font-weight: bold">欢迎来到“时创”——非遗文化交流平台！</div>
      <div style="font-size: 18px;margin-top: 14px">在这里你可以与非物质文化遗产传承者密切交流</div>
      <div style="font-size: 18px;margin-top: 7px">在这里你可以观看非遗视频，了解非遗文化，快来加入我们吧！</div>
    </div>
    <div class="right-card">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped>
.right-card {
  width: 400px;
  z-index: 1;
  background-color: aliceblue;
}

.welcome-title {
  position: absolute;
  bottom: 25px;
  left: 30px;
  color: white;
  text-shadow: 0 0 10px black;
}
</style>