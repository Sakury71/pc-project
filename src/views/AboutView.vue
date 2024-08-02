<script setup>
import Header from '@/components/Header/Header.vue'
import Footer from "@/components/Footer/Footer.vue";
</script>
<template>
  <div class="about-container">
    <!-- 页面导航条 -->
    <div>
      <Header></Header>
    </div>
    <!-- 页面内容 -->
    <div></div>
    <!-- 页脚 -->
    <div id="sticky-footer">
      <Footer style="background-color: #475669;"></Footer>
    </div>
  </div>
</template>
<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  background-color: #475669;
  height: 100vh;
  overflow: hidden;
}

#sticky-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>