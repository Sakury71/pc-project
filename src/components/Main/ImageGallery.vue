<script setup>
import {ref} from "vue";

const images = ref([
  {src: 'src/assets/img/login.png', alt: 'Image 1'},
  {src: 'src/assets/img/tupian.jpg', alt: 'Image 2'},
  {src: '/path/to/image3.jpg', alt: 'Image 3'},
  {src: '/path/to/image4.jpg', alt: 'Image 4'},
]);
</script>

<template>
  <div class="container">
    <el-carousel style="width:750px;" height="400px" motion-blur>
      <el-carousel-item v-for="(item, index) in images" :key="index"
                        :style="{ borderRadius: '10px', overflow: 'hidden' }">
        <img :src="item.src" :alt="item.alt" class="carousel-image"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.container {
  justify-content: center;
  padding-left: 50px;
  padding-top: 10px;
  border-radius: 10px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

</style>