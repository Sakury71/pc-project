<script setup>
import Header from '@/components/header/Header.vue'
import DataStatstic from "@/components/Main/DataStatstic.vue";
import Footer from "@/components/Footer/Footer.vue";
import Hello from "@/components/Main/Hello.vue";
</script>

<template>
  <div class="home-background">
    <el-container>
      <el-header style="border-style: none">
        <Header/>
      </el-header>
      <el-main style="padding:0">
        <div class="main-bg-cover-container">
          <Hello/>
          <div class="main-bg-cover"></div>
          <DataStatstic></DataStatstic>
        </div>
      </el-main>
      <el-footer class="common-footer">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.home-background {
  display: flex;
  height: 880px;
  width: 1707.33px;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: auto;
  border-style: none;
  background-color: #475669;
}

.common-footer {
  height: auto;
  background-color: #151515;
  color: white;
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

.main-bg-cover-container {
  overflow-x: hidden;
}
</style>
