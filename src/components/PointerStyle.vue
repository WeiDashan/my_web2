<template>
  <div id="pointer"></div>
  <div id="pointer2"></div>
</template>

<script setup lang="ts">

  import {onMounted} from "vue";
  const isMobile=():boolean=>{
    return !!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  }
  onMounted(()=>{
    if (!isMobile()) {
      let point = document.querySelector('#pointer') as HTMLElement
      let point2 = document.querySelector('#pointer2') as HTMLElement
      point.style.display = "flex"
      point2.style.display = "flex"
    }
  })

</script>

<style scoped lang="less">
:root{
  --theme-pointer_background: #222;
  --theme-pointer_border_color: #696969;
}
.day{
  --theme-pointer_background: #222;
  --theme-pointer_border_color: #696969;
}
.dark{
  --theme-pointer_background: #fff;
  --theme-pointer_border_color: #fff;
}
#pointer{
  position: absolute;
  left: -13px;
  top: -13px;
  width: 6px;
  display: none;
  height: 6px;
  border-radius: 50%;
  background-color: var(--theme-pointer_background);
  z-index: 999;
  pointer-events: none;
  transition: 50ms;
}
#pointer2{
  position: absolute;
  left: -20px;
  top: -20px;
  width: 20px;
  height: 20px;
  display: none;
  border-radius: 5px;
  border: 1px var(--theme-pointer_border_color) solid;
  background-color: rgba(0,0,0,0);
  transition: .1s ease-out;
  z-index: 998;
  pointer-events: none;
}
</style>