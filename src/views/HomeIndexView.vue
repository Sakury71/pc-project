<script setup>
import Header from '@/components/Header/Header.vue'
import DataStatstic from "@/components/Main/DataStatstic.vue";
import Footer from "@/components/Footer/Footer.vue";
import Hello from "@/components/Main/Hello.vue";
</script>

<template>
  <el-container class="home-background">
    <!-- 页面导航条 -->
    <el-header style="padding:0">
      <Header />
    </el-header>
    <!-- 首页主体 -->
    <el-main style="padding:0">
      <div>
        <!-- 欢迎界面 -->
        <Hello />
        <!-- 过渡界面 -->
        <div class="main-bg-cover"></div>
        <!-- 数据展示 -->
        <DataStatstic></DataStatstic>
      </div>
    </el-main>
    <!-- 页脚 -->
    <el-footer style="padding:0">
      <Footer />
    </el-footer>
  </el-container>
</template>

<style scoped>
.home-background {
  display: flex;
  flex-direction: column;
  background-color: #475669;

}

.main-bg-cover {
  display: block;
  height: 480px;
  background-image: url(https://www.itbaima.cn/image/welcome/background/bg-cover-dark.webp);
  background-size: 100% 100%;
}
</style>
