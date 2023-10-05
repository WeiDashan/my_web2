<template>
  <div class="loading_mask">
    <div class="loading">
      <div class="logo">
        <svg x="0" y="0" viewBox="0 0 120 120">
          <line x1="5" y1="105" x2="20" y2="35"></line>
          <line x1="20" y1="35" x2="40" y2="85"></line>
          <line x1="40" y1="85" x2="60" y2="5"></line>
          <line x1="60" y1="5" x2="80" y2="85"></line>
          <line x1="80" y1="85" x2="100" y2="35"></line>
          <line x1="100" y1="35" x2="115" y2="105"></line>
        </svg>
      </div>
      <div class="left1"></div>
      <div class="right1"></div>
      <div class="left2"></div>
      <div class="right2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted} from "vue";
const myProps = defineProps({
  flag: {
    type: Boolean,
    required: true,
    default: true
  }
})

onMounted(()=>{
  const timer = setInterval(()=>{
    if (!myProps.flag){
      let element = document.querySelector('.loading_mask') as HTMLElement
      element.style.display = 'none'
      clearInterval(timer)
    }
  },200)
})

</script>

<style scoped lang="less">
@loadingWidth: 200px;
@loadingBorderWidth: 20px;
@animationTime: 2s;
@colorBlue: #77b6ff;
@colorGreen: #42b983;
@colorYellow: #e8ef21;
@colorLogo: #fcece0;
.loading_mask{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 99;
  background-color: #ffffff;
  .loading{
    position: absolute;
    left: 50%;
    top: 50%;
    //background-color: pink;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
  }
  .logo {
    width: @loadingWidth;
    height: @loadingWidth;
    background-color: @colorLogo;
    position: absolute;
    left: calc(50% - @loadingWidth/2);
    top: calc(50% - @loadingWidth/2);
    border-radius: 50%;
    animation: beginlogo @animationTime linear infinite normal;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      width: 120px;
      height: 120px;
      line{
        stroke: @colorGreen;
        stroke-width: 4;
        stroke-dasharray: 120;
        stroke-dashoffset: 120;
      }
      line:nth-child(1){
        animation: myLoadingSVG @animationTime linear       infinite;
      }
      line:nth-child(2){
        animation: myLoadingSVG @animationTime linear 160ms infinite;
      }
      line:nth-child(3){
        animation: myLoadingSVG @animationTime linear 320ms infinite;
      }
      line:nth-child(4){
        animation: myLoadingSVG2 @animationTime linear      infinite;
      }
      line:nth-child(5){
        animation: myLoadingSVG2 @animationTime linear 160ms infinite;
      }
      line:nth-child(6){
        animation: myLoadingSVG2 @animationTime linear 320ms infinite;
      }
    }
  }
  @keyframes myLoadingSVG{
    0%{
      stroke-dashoffset: 120;
    }
    40%{
      stroke-dashoffset: 120;
    }
    48%{
      stroke-dashoffset: 0;
    }
    90%{
      stroke-dashoffset: 0;
    }
    100%{
      stroke-dashoffset: 120;
    }
  }
  @keyframes myLoadingSVG2{
    0%{
      stroke-dashoffset: 120;
    }
    64%{
      stroke-dashoffset: 120;
    }
    72%{
      stroke-dashoffset: 0;
    }
    90%{
      stroke-dashoffset: 0;
    }
    100%{
      stroke-dashoffset: 120;
    }
  }
  @keyframes beginlogo{
    0%{
      transform: scale(0);
    }
    20%{
      transform: scale(.1);
    }
    40%{
      transform: scale(1);
    }
    80%{
      opacity: 1;
    }
    100%{
      transform: scale(1);
      opacity: 0;
    }
  }
  .left1,
  .right1{
    width: @loadingBorderWidth;
    height: @loadingBorderWidth;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - @loadingBorderWidth/2);
    top: calc(50% - @loadingBorderWidth/2);
  }
  .left1{
    background-color: @colorBlue;
    animation: beginCircleLeft @animationTime linear infinite normal;
  }
  .right1{
    background-color: @colorYellow;
    animation: beginCircleRight @animationTime linear infinite normal;
  }
  @keyframes beginCircleRight{
    0%{
      transform: scale(0);
      left: calc(50% - @loadingBorderWidth/2);
    }
    20%{
      transform: scale(1);
      left: calc(50% - @loadingBorderWidth/2);
    }
    30%{
      left: calc(50% - @loadingBorderWidth/2);
    }
    40%{
      left: calc(50% + @loadingWidth/2);
    }
    50%{
      transform: scale(1);
      left: calc(50% + @loadingWidth/2);
    }
    51%{
      transform: scale(0);
    }
    100%{
      transform: scale(0);
    }
  }
  @keyframes beginCircleLeft{
    0%{
      transform: scale(0);
      left: calc(50% - @loadingBorderWidth/2);
    }
    20%{
      transform: scale(1);
      left: calc(50% - @loadingBorderWidth/2);
    }
    30%{
      left: calc(50% - @loadingBorderWidth/2);
    }
    40%{
      left: calc(50% - @loadingBorderWidth - @loadingWidth/2);
    }
    50%{
      left: calc(50% - @loadingBorderWidth - @loadingWidth/2);
      transform: scale(1);
    }
    51%{
      transform: scale(0);
    }
    100%{
      transform: scale(0);
    }
  }
  .left2{
    position: absolute;
    left: calc(50% - @loadingWidth/2 - @loadingBorderWidth);
    top: calc(50% - @loadingWidth/2 - @loadingBorderWidth);
    width: @loadingWidth + @loadingBorderWidth*2;
    height: @loadingWidth + @loadingBorderWidth*2;
    border-radius: 50%;
    clip-path: polygon(0% 40%,50% 50%, 0% 60%);
    border: @loadingBorderWidth solid @colorBlue;
    box-sizing: border-box;
    animation: an_circle_left @animationTime linear infinite;
  }
  .right2{
    position: absolute;
    left: calc(50% - @loadingWidth/2 - @loadingBorderWidth);
    top: calc(50% - @loadingWidth/2 - @loadingBorderWidth);
    width: @loadingWidth + @loadingBorderWidth*2;
    height: @loadingWidth + @loadingBorderWidth*2;
    border-radius: 50%;
    clip-path: polygon(100% 40%,50% 50%, 100% 60%);
    box-sizing: border-box;
    border: @loadingBorderWidth solid @colorYellow;
    animation: an_circle_right @animationTime linear infinite;
  }
  @keyframes an_circle_left{
    0%{
      transform: rotate(0deg) scale(0);
      clip-path: polygon(0% 40%,50% 50%, 0% 60%);
    }
    50%{
      transform: rotate(0deg) scale(0);
      clip-path: polygon(0% 48%,50% 50%, 0% 52%);
    }
    51%{
      transform: rotate(0deg) scale(1);
    }
    70%{
      transform: rotate(144deg) scale(1);
      clip-path: polygon(0% 40%,50% 50%, 0% 60%);
    }
    80%{
      opacity: 1;
    }
    100%{
      transform: rotate(360deg) scale(1);
      opacity: 0;
    }
  }
  @keyframes an_circle_right{
    0%{
      transform: rotate(0deg) scale(0);
      clip-path: polygon(100% 40%,50% 50%, 100% 60%);
    }
    50%{
      transform: rotate(0deg) scale(0);
      clip-path: polygon(100% 48%,50% 50%, 100% 52%);
    }
    51%{
      transform: rotate(0deg) scale(1);
    }
    70%{
      transform: rotate(144deg) scale(1);
      clip-path: polygon(100% 40%,50% 50%, 100% 60%);
    }
    80%{
      opacity: 1;
    }
    100%{
      transform: rotate(360deg) scale(1);
      opacity: 0;
    }
  }
}
</style>