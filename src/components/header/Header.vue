<script setup>
import { logout } from "@/net/index.js";
import router from "@/router/index.js";

function userLogout() {
  logout(() => {
    router.push('/')
  })
}
</script>

<template>
  <div class="header-view">
    <div class="header-container">
      <!-- icon图标 -->
      <div style="margin-left: 120px;margin-right: 60px;">
        <img src="@/assets/img/logo.png" alt="logo" style="width: 80px;border-radius: 5px;">
      </div>
      <!-- 导航栏 -->
      <div style="margin: auto;">
        <ul class="nav col-12">
          <li><a href="/home" class="nav-link px-2 header-font">首页</a></li>
          <li><a href="/article" class="nav-link px-2 header-font">非遗一览</a></li>
          <li><a href="/video" class="nav-link px-2 header-font">非遗学堂</a></li>
          <li><a href="/about" class="nav-link px-2 header-font">关于我们</a></li>
        </ul>
      </div>
      <!-- 搜索框 -->
      <div>
        <form class="col-12 col-lg-auto me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="搜索" aria-label="Search">
        </form>
      </div>
      <!-- 用户头像 -->
      <div class="dropdown ml-2">
        <a class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          <img src="@/assets/img/user.jpg" alt="mdo" width="32" height="32" class="rounded-circle">
        </a>
        <ul class="dropdown-menu text-small">
          <li><a class="dropdown-item" href="#">个人首页</a></li>
          <li><a class="dropdown-item" href="#">消息中心</a></li>
          <li><a class="dropdown-item" href="#">我的好友</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="/">退出登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-view {
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
  background-color: rgba(53, 58, 64, 0.75);
  border-style: none;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-property: height, top, transform;
  transition-timing-function: ease, ease, cubic-bezier(0.22, 0.61, 0.36, 1);
}

.header-container {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 150px;
  margin-right: 50px;
}


.header-font {
  font-family: 微软雅黑, serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 18.4px;
  text-wrap: nowrap;
  white-space-collapse: collapse;
  color: aliceblue;
  margin-right: 15px;
  margin-left: 15px;
}
</style>