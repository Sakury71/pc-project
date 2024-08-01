<script setup>
import { Position } from '@element-plus/icons-vue'
import ImageGallery from "@/components/Main/ImageGallery.vue";
</script>

<template>
  <div class="home-title">
    <div class="home-title-right">
      <h1 class="home-intro-wel-1">欢迎来到</h1>
      <span class="home-intro-wel-2">时创</span>
      <span class="home-intro-wel-3">官方网站</span>
      <div class="main-line"></div>
      <p class="sub-test">非遗文化，即非物质文化遗产，指代代相传并具有重要文化意义的传统技艺、表演艺术、习俗等。
        这些遗产通过口头传授和实践活动传承至今，承载着特定社群的历史记忆和文化认同。
        非遗文化不仅展示了人类创造力的多样性，还反映了不同地域的生活方式和价值观念。</p>
      <div class="button-group el-button">
        <botton>
          <span>
            立即探索
            <el-icon class="fa-solid fa-location-arrow" style="margin-left: 10px;">
              <Position />
            </el-icon>
          </span>
        </botton>
      </div>
      <div class="down-text">
        向下滑动探索更多内容
      </div>
    </div>
    <div>
      <ImageGallery></ImageGallery>
    </div>
  </div>
</template>

<style scoped>
.home-title {
  display: flex;
  height: 490px;
  margin-bottom: 0;
  margin-top: 50px;
  padding-left: 80px;
}

.home-title-right {
  display: block;
  width: 650px;
  padding-left: 60px;
  margin-left: 60px;
  margin-top: 50px;

}

.home-intro-wel-1 {
  display: block;
  height: auto;
  width: auto;
  font-family: 微软雅黑, serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 55.2px;
  letter-spacing: 5px;
  text-align: left;
  text-shadow: rgba(255, 255, 255, 0.25) 0 0 30px;
  text-size-adjust: 100%;
  color: rgb(255, 255, 255);
  cursor: default;
}

.home-intro-wel-2 {
  -webkit-background-clip: text;
  display: inline;
  height: auto;
  width: auto;
  font-family: 微软雅黑, serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 55.2px;
  letter-spacing: 12px;
  text-align: left;
  text-shadow: rgba(255, 255, 255, 0.25) 0 0 30px;
  text-size-adjust: 100%;
  color: transparent;
  background-attachment: scroll;
  background-clip: text;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(62, 130, 255), rgb(92, 32, 255));
  background-origin: padding-box;
  background-position-x: 0;
  background-position-y: 0;
  background-repeat: repeat;
  background-size: auto;
  cursor: default;
  color-scheme: dark;
}

.home-intro-wel-3 {
  display: inline;
  height: auto;
  width: auto;
  font-family: 微软雅黑, serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 55.2px;
  letter-spacing: 5px;
  text-align: left;
  text-shadow: rgba(255, 255, 255, 0.25) 0 0 30px;
  text-size-adjust: 100%;
  color: rgb(255, 255, 255);
  cursor: default;
}

.main-line {
  display: block;
  height: 3px;
  width: 200px;
  margin-bottom: 25px;
  margin-top: 25px;
  color: rgb(208, 207, 207);
  background-repeat: repeat;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(246, 108, 108);
  background-origin: padding-box;
  background-size: auto;
}

.sub-test {
  display: block;
  height: auto;
  width: auto;
  font-family: 微软雅黑, serif;
  font-size: 16.8px;
  line-height: 24px;
  letter-spacing: 2px;
  text-align: left;
  text-size-adjust: 100%;
  color: rgb(169, 169, 169);
}

.button-group {
  display: inline-flex;
  height: 40px;
  width: 140px;
  margin-top: 30px;
  margin-bottom: 95px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
  background-color: rgb(245, 108, 108);
  border-color: rgb(245, 108, 108);
}

.down-text {
  display: block;
  position: relative;
  left: 600px;
  height: auto;
  width: 170px;
  font-family: 微软雅黑, serif;
  font-size: 15px;
  letter-spacing: 2px;
  text-align: center;
  color: white;
}
</style>