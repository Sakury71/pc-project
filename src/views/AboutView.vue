<script setup>
import Header from '@/components/Header/Header.vue'
</script>
<template>
  <div class="about-container">
    <!-- 页面导航条 -->
    <div>
      <Header></Header>
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
</style>