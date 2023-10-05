<template>
  <div id="app" class="app day"
    @mousewheel="listenScrollRolling"
    @mousemove="listenMouseMove"
    @mousedown="listenMouseDown"
    @mouseup="listenMouseUp">
    <ScrollStyle />
    <router-view/>
    <setting-tools/>
    <PointerStyle />
    <DarkMask />
  </div>
</template>

<style lang="less">
:root{
  --theme-color: #000;
  --theme-body_background: rgb(245,245,245,0.9);
  --theme-project_item_background: rgb(255,255,255,0.9);
  --theme-pointer_background: #222;
  --theme-pointer_border_color: #696969;

}
.day{
  --theme-color: #000;
  --theme-body_background: rgb(245,245,245,0.9);
  --theme-project_item_background: rgb(255,255,255,0.9);
  --theme-pointer_background: #222;
  --theme-pointer_border_color: #696969;
}
.dark{
  --theme-color: #fff;
  --theme-body_background: rgb(51,51,51,0.9);
  --theme-project_item_background: rgb(70,70,70,0.9);
  --theme-pointer_background: #fff;
  --theme-pointer_border_color: #fff;
}
*{
  padding: 0;
  margin: 0;
}
html::-webkit-scrollbar{
  display: none;
}
html{
  -ms-overflow-style: none;
  scroll-width: none;
}
body{
  cursor: none;
  transition: .3s;
}
#app{
  position: relative;
}

</style>
<script setup lang="ts">
  import PointerStyle from "@/components/PointerStyle.vue";
  import ScrollStyle from "@/components/ScrollStyle.vue";
  import SettingTools from "@/components/SettingTools.vue";
  import DarkMask from "@/components/DarkMask.vue";
  import {onMounted} from "vue";
  const listenMouseMove = (e:MouseEvent)=>{
    const pointer = document.getElementById("pointer");
    const pointer2 = document.getElementById("pointer2");
    // const body = document.querySelector("body");
    if (pointer&&pointer2){
      window.requestAnimationFrame(()=>{
        pointer.style.left = e.pageX-3+"px";
        pointer.style.top = e.pageY-3+"px";
        pointer2.style.left = e.pageX-11+"px";
        pointer2.style.top = e.pageY-11+"px";
      })
    }
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
  const listenScrollRolling=(e: WheelEvent)=>{
    let webPageHeight:number = document.body.clientHeight;
    let innerHeight:number = document.documentElement.clientHeight;
    let scrollTop:number = document.documentElement.scrollTop+e.deltaY;
    if (e.deltaY<0){
      scrollTop = scrollTop<0 ? 0 : scrollTop;
    }else {
      scrollTop = scrollTop>(webPageHeight-innerHeight)?(webPageHeight-innerHeight):scrollTop
    }
    changeScrollRolling(webPageHeight, innerHeight, scrollTop)
  }
  const changeScrollRolling=(pageHeight:number, innerHeight:number, scrollTop:number)=>{
    let totalDistance = Math.max(pageHeight - innerHeight);
    if (totalDistance>0){
      let scrollWidth:string = (scrollTop*100/totalDistance).toFixed(2)+"%";
      let element = document.querySelector(".screen_progress_bar") as HTMLElement;
      element.style.width=scrollWidth;
    }
  }
  onMounted(()=>{
    setTimeout(()=>{
      //有点小问题，二次刷新后scrollTop值会异常
      // console.log(webPageHeight," ",innerHeight," ",scrollTop)
      let webPageHeight:number = document.body.clientHeight;
      let innerHeight:number = document.documentElement.clientHeight;
      let scrollTop:number = document.documentElement.scrollTop;
      changeScrollRolling(webPageHeight, innerHeight, scrollTop);
    },200)
  })
</script>
