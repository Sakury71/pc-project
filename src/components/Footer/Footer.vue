<script setup>
</script>

<template>
  <div class="Footer-container">
    <div class="main-line"></div>
    <p class="footer-font">© 2024 南京财经大学 时创</p>
  </div>
</template>

<style scoped>
.Footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: auto;
  background-color: #151515;
  overflow: hidden;

}

.main-line {
  height: 3px;
  width: 90%;
  margin-bottom: 25px;
  margin-top: 25px;
  background-repeat: repeat;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(142, 126, 126);
  background-origin: padding-box;
  background-size: auto;
}

.footer-font {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.8;
  text-align: center;
  padding: 0;
}
</style>