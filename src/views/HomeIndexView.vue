<script setup>
import Header from '@/components/header/Header.vue'
import DataStatstic from "@/components/Main/DataStatstic.vue";
import Footer from "@/components/Footer/Footer.vue";
import Hello from "@/components/Main/Hello.vue";
</script>

<template>
  <div class="home-background">
    <el-container>
      <el-header class="common-header">
        <Header />
      </el-header>
      <el-main style="padding:0">
        <div class="main-bg-cover-container">
          <Hello />
          <div class="main-bg-cover"></div>
          <DataStatstic></DataStatstic>
        </div>
      </el-main>
      <el-footer class="common-footer">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.home-background {
  display: flex;
  height: 880px;
  width: 100%;
  flex-direction: column;
  background-color: #475669;
}

.common-header {
  position: fixed;
  box-sizing: border-box;
  display: block;
  height: 58px;
  min-height: 58px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  z-index: 2000;
  width: 100%;
  font-family: 微软雅黑, serif;
  font-size: 16px;
  line-height: 18.4px;
  text-size-adjust: 100%;
  opacity: 0.75;
  background-color: #414E61;
  border-color: #414E61;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-property: height, top, transform;
  transition-timing-function: ease, ease, cubic-bezier(0.22, 0.61, 0.36, 1);
}

.common-footer {
  height: auto;
  background-color: #151515;
}

.main-bg-cover {
  display: block;
  height: 480px;
  margin-top: -64px;
  width: 1707.33px;
  color: rgb(208, 207, 207);
  background-image: url(https://www.itbaima.cn/image/welcome/background/bg-cover-dark.webp);
  background-size: 100% 100%;
}
</style>
