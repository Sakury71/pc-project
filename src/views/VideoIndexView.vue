<script setup>
import { ref } from 'vue';
import { VideoPlay, DocumentCopy, Pointer, StarFilled, Share } from '@element-plus/icons-vue'
import Header from '@/components/Header/Header.vue'
import Footer from "@/components/Footer/Footer.vue";
const value1 = ref(true);
</script>
<template>
  <div class="video-container">
    <!-- 页面导航条 -->
    <div>
      <Header></Header>
    </div>
    <!-- 页面内容 -->
    <div class="video-content">
      <div class="left-container">
        <div class="video-info-container">
          <div class="video-info-title">
            <div class="video-info-title-inner">
              非遗大师手把手教你木板徽画
            </div>
          </div>
          <div class="video-info-meta">
            <div class="vider-info-detail-list">
              <div style="margin-right: 12px; "><el-icon>
                  <VideoPlay />
                </el-icon> : 1.3w</div>
              <div style="margin-right: 12px;"><el-icon>
                  <DocumentCopy />
                </el-icon> : 598</div>
              <div style="margin-right: 12px;">2024-08-06 17:03:14</div>
            </div>
          </div>

        </div>
        <div class="video-player-container">
          <div class="video-player-container-top">
            <iframe width="1031px" height="580px"
              src="//player.bilibili.com/player.html?isOutside=true&aid=567234278&bvid=BV1Vv4y1s7EH&cid=1015551830&p=1"
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
          </div>
          <div class="video-player-container-bottom">
            <div>5人正在看，已装填845条弹幕</div>
            <div style="margin-left: 500px;"><el-icon>
                <Pointer />
              </el-icon> 6597 <el-icon style="margin-left: 15px;">
                <StarFilled />
              </el-icon> 482 <el-icon style="margin-left: 15px;">
                <Share />
              </el-icon> 841</div>
          </div>
        </div>
        <div class="video-toolbar-container"></div>
        <div class="left-container-under-player">
          <div class="video-desc-container"></div>
        </div>
      </div>
      <div class="right-container">
        <div class="right-container-inner">
          <div class="up-panel-container">
            <div class="up-info-container">
              <div class="up-info-left">
                <div class="up-avatar">
                  <img src="@/assets/img/user.jpg" alt="avatar"
                    style="width: 45px;border-radius: 10px;padding-top: 10px;"></img>
                </div>
              </div>
              <div class="up-info-right">
                <div class="up-info-detail">
                  <div class="up-info-detail-top">
                    <span
                      style="color: black;font-size: 20px;font-weight: 500;margin-top: 15px;margin-bottom: 5px;">Sakury</span>
                  </div>
                  <div class="up-info-detail-bottom">
                    <span>陌生花开，可缓缓归矣</span>
                  </div>
                </div>
                <div style="display: block;">
                  <el-button type="primary" style="width: 230px;">+关注</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="danmaku-box">
            <el-select placeholder="弹幕列表" style="width: 400px;">

            </el-select>
          </div>
          <div class="next-play">
            <span style="font-size: 16px;font-weight: 600;">接下来播放</span>
            <div>
              <span style="font-size: 16px;font-weight: 400;margin-right: 5px;">自动连播</span>
              <el-switch v-model="value1" />
            </div>
          </div>
          <div class="video-list">
            <div class="card-box">
              <div class="pic-box">
                <img src="@/assets/img/video1.avif" alt="" style="width: 100%;height: 100%;">
              </div>
              <div class="info">
                <div style="font-size: 16px;color:black;font-weight: 500;">【木版年画】一木一纸印华年
                </div>
                <div>UP:格物集_LifeArt</div>
                <div>播放量: 548</div>
              </div>
            </div>
            <div class="card-box">
              <div class="pic-box">
                <img src="@/assets/img/video2.avif" alt="" style="width: 100%;height: 100%;">
              </div>
              <div class="info">
                <div style="font-size: 16px;color:black;font-weight: 500;">【南阳烙画】玩弄温度的艺术
                </div>
                <div>UP:格物集_LifeArt</div>
                <div>播放量: 548</div>
              </div>
            </div>
            <div class="card-box">
              <div class="pic-box">
                <img src="@/assets/img/video3.avif" alt="" style="width: 100%;height: 100%;">
              </div>
              <div class="info">
                <div style="font-size: 16px;color:black;font-weight: 500;">【拓印】一方拓片 一段历史
                </div>
                <div>UP:格物集_LifeArt</div>
                <div>播放量: 548</div>
              </div>
            </div>
            <div class="card-box">
              <div class="pic-box">
                <img src="@/assets/img/video4.avif" alt="" style="width: 100%;height: 100%;">
              </div>
              <div class="info">
                <div style="font-size: 16px;color:black;font-weight: 500;">【黑陶】尼西黑陶三千年传承
                </div>
                <div>UP:格物集_LifeArt</div>
                <div>播放量: 548</div>
              </div>
            </div>
            <div class="card-box">
              <div class="pic-box">
                <img src="@/assets/img/video5.avif" alt="" style="width: 100%;height: 100%;">
              </div>
              <div class="info">
                <div style="font-size: 16px;color:black;font-weight: 500;">【湖笔】文房四宝湖笔首要
                </div>
                <div>UP:格物集_LifeArt</div>
                <div>播放量: 548</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <div id="sticky-footer">
      <Footer style="background-color: #475669;"></Footer>
    </div>
  </div>
</template>
<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  background-color: #475669;
  height: calc(100vh - 58px);
}

#sticky-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.video-content {
  position: relative;
  box-sizing: content-box;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 58px;
  max-width: 2540px;
  min-width: 1080px;
  padding-left: 10px;
  padding-right: 10px;
}

.left-container {
  position: sticky;
  display: block;
  margin: 0;
  padding: 0;
  z-index: 1;
  width: 1031px;
}

.right-container {
  position: relative;
  display: block;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  width: 411px;
  margin: 0 0 0 30px;
  padding: 0;
}

.video-info-container {
  position: relative;
  display: block;
  box-sizing: border-box;
  height: 108px;
  margin: 0;
  padding-top: 22px;
}

.video-info-title {
  height: auto;
  margin: 0;
  padding: 0;
}

.video-info-title-inner {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: 530;
  line-height: 34px;
  color: black;
}

.video-info-meta {
  height: auto;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 6px 0 0 0;
}

.vider-info-detail-list {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0%;
  flex-shrink: 1;
  height: 24px;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  color: rgb(148, 153, 160);
  font-size: 13px;
}

.video-player-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 636px;
  padding: 0;
  margin: 0;
}

.video-player-container-top {
  position: relative;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  height: 580px;
  width: 1031px;
}

.video-player-container-bottom {
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 12px 0 12px;
  margin: 0;
}

.video-toolbar-container {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 18px 0 12px 0;
}

.right-container-inner {
  position: sticky;
  display: block;
  margin: 0;
  padding: 0;
}

.up-panel-container {
  height: 108px;
}

.up-info-container {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.up-info-left {
  display: block;
  width: 48px;
  height: 48px;
}

.up-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.up-info-right {
  display: block;
  flex-grow: 1;
  flex-basis: 0%;
  flex-shrink: 1;
  margin-left: 12px;
}

.danmaku-box {
  position: relative;
  height: 44px;
}

.next-play {
  display: flex;
  height: 20px;
  justify-content: space-between;
  margin-bottom: 12px;
}

.up-info-detail {
  display: block;
  margin-bottom: 5px;
}

.up-info-detail-top {
  display: flex;
  flex-direction: column;
  margin: 0;

}

.up-info-detail-bottom {
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: rgb(148, 153, 160);
}

.video-list {
  display: block;
  height: 107px;
  margin: 0 0 16px 0;
  padding: 0;
}

.card-box {
  display: flex;
  margin: 0 0 16px 0;
  padding: 0;
}

.pic-box {
  position: relative;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 189px;
  height: 107px;
}

.info {
  display: block;
  height: 107px;
  width: 212px;
  margin: 0 0 0 10px;
  padding: 0;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>