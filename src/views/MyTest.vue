<template>
  <div class="test2">

  </div>
  <div class="projectBody">
<!--  canvas初始默认width=300,height=150  -->
<!--  canvasWidth = background.clientWidth * window.devicePixelRatio  -->
<!--  canvasHeight = background.clientHeight * window.devicePixelRatio  -->
<!--    <div  v-for="index in 10" :key="index" class="test">-->
    <canvas></canvas>
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
// import streamers from "@/assets/ts/streamers"
// streamers({
//   idName: 'stCanvas',
//   body: '.projectBody',
//   position : "absolute",
//   top : "0",
//   left : "0",
//   width : "100%",
//   height : "100%",
//   zIndex : "1",
//   pointerEvents : "none",
//   opacity : "0.6",
//   xSpeed : 150,
//   streamersNum: 3,
//   streamerColorSaturation: "80%",
//   streamerColorLightness: "60%",
//   streamerColorAlphaSpeed: 0.01,
//   streamerColorAlphaMidValue: 0.1,
//   streamerColorHueSpeed: 1,
//   stInitWidth: 90,
//   ctxGlobalAlpha: 0.6,
// })
</script>

<style scoped lang="less">
  .test2{
    height: 600px;
    width: 100%;
    background: #77b6ff;
  }
  .projectBody{
    width: 100%;
    height: 400px;
    background: green;
    position: relative;
    left: 0;
    top: 0;
    canvas{
      position : absolute;
      top : 0;
      left : 0;
      width : 100%;
      height : 100%;
      z-index : 1;
      background: pink;
    }
  }
</style>