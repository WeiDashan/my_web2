<template>
  <div class="pointerStyle"
       @mousemove="listenMouseMove"
       @mousedown="listenMouseDown"
       @mouseup="listenMouseUp">
    <div id="pointer" class="border1"></div>
    <div id="pointer2"></div>
  </div>
</template>

<script setup lang="ts">
const listenMouseMove = (e:MouseEvent)=>{
  const pointer = document.getElementById("pointer");
  const pointer2 = document.getElementById("pointer2");
  const body = document.querySelector("body");
  if (body&&pointer&&pointer2){
    window.requestAnimationFrame(()=>{
      pointer.style.left = e.pageX-3+"px";
      pointer.style.top = e.pageY-3+"px";
      pointer2.style.left = e.pageX-11+"px";
      pointer2.style.top = e.pageY-11+"px";
    })
  }
}
const isMobile=():boolean=>{
  return !!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}
const mouseUpAndDown=(pointerLength:string, pointer2borderLength:string)=>{
  let pointerElement = document.querySelector("#pointer") as HTMLElement;
  let pointerElement2 = document.querySelector("#pointer2") as HTMLElement;
  pointerElement.style.height = pointerLength;
  pointerElement.style.width = pointerLength;
  pointerElement2.style.height = pointer2borderLength;
  pointerElement2.style.width = pointer2borderLength;
  if (pointerLength.length>pointer2borderLength.length){
    //mouseDown
    pointerElement.style.transform= "translate(-7px,-7px)";
    pointerElement2.style.transform= "translate(7px,7px)";
  }else {
    //mouseUp
    pointerElement.style.transform= "";
    pointerElement2.style.transform= "";
  }
}
const listenMouseDown=()=>{
  mouseUpAndDown("20px","6px");
}
const listenMouseUp=()=>{
  mouseUpAndDown("6px","20px");
}
window.onload=function (){
  if (!isMobile()){
    let point = document.querySelector('#pointer') as HTMLElement
    let point2 = document.querySelector('#pointer2') as HTMLElement
    point.style.display = "flex"
    point2.style.display = "flex"
  }
}
</script>

<style scoped lang="less">
  .pointerStyle{
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    #pointer{
      position: absolute;
      left: -13px;
      top: -13px;
      width: 6px;
      display: none;
      height: 6px;
      border-radius: 50%;
      background-color: var(--theme-pointer_background);
      z-index: 3;
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
      z-index: 2;
      pointer-events: none;
    }
  }
</style>