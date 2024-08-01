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
  <header>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style="margin-left: 400px;">
          <li><a href="#" class="nav-link px-2 header-font">首页</a></li>
          <li><a href="#" class="nav-link px-2 header-font">非遗一览</a></li>
          <li><a href="#" class="nav-link px-2 header-font">非遗学堂</a></li>
          <li><a href="#" class="nav-link px-2 header-font">关于我们</a></li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="搜索" aria-label="Search">
        </form>
        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
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
  </header>
</template>

<style scoped>
.container {
  padding-top: 6px;
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