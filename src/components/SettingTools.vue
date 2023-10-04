<template>
  <div class="tools">
    <div class="tools_item" @click="toTop">
      <img alt="" src="../assets/top_dbdbdb.png">
      <img alt="" src="../assets/top_8a8a8a.png">
      <img alt="" src="../assets/top_515151.png">
    </div>
    <div class="tools_item" @click="clickSetting">
      <img alt="" src="../assets/setting_dbdbdb.png">
      <img alt="" src="../assets/setting_8a8a8a.png">
      <img alt="" src="../assets/setting_515151.png">
    </div>
    <div class="tools_item toBelow" @click="toBelow">
      <img alt="" src="../assets/top_dbdbdb.png">
      <img alt="" src="../assets/top_8a8a8a.png">
      <img alt="" src="../assets/top_515151.png">
    </div>
    <div class="tools_item changeStyle" @click="changeStyle">
      <img alt="" src="../assets/sun_8a8a8a.png">
      <img alt="" src="../assets/sun_515151.png">
      <img alt="" src="../assets/moon_dbdbdb.png">
      <img alt="" src="../assets/moon_8a8a8a.png">
    </div>
  </div>
</template>

<script setup lang="ts">
const to_top_below_speed=20
const clickSetting=()=>{
  let toBelow = document.querySelector(".toBelow") as HTMLElement;
  let changeStyle = document.querySelector(".changeStyle") as HTMLElement;
  if (toBelow.style.transform==""){
    toBelow.style.transform = "translateX(-60px)"
    changeStyle.style.transform = "translateX(-60px)"
  }else {
    toBelow.style.transform = ""
    changeStyle.style.transform = ""
  }
}
const toTop=()=>{
  let scrollTop = document.documentElement.scrollTop
  let steep = to_top_below_speed
  let rafId:number
  let toTopStep = ()=>{
    scrollTop = Math.max(0,scrollTop-steep)
    document.documentElement.scrollTop = scrollTop
    changeScrollRolling(document.body.clientHeight, document.documentElement.clientHeight, scrollTop)
    if (scrollTop>0){
      rafId = requestAnimationFrame(toTopStep)
    }else{
      cancelAnimationFrame(rafId)
    }
  }
  rafId = requestAnimationFrame(toTopStep)
  // let timer = setInterval(()=>{
  //   scrollTop -= steep;
  //   // steep += 2;
  //   if (scrollTop<=0){
  //     clearInterval(timer);
  //   }
  //   document.documentElement.scrollTop = scrollTop;
  //   changeScrollRolling(document.body.clientHeight, document.documentElement.clientHeight, scrollTop);
  // },10)
}
const toBelow=()=>{
  let steep = to_top_below_speed
  let scrollTop = document.documentElement.scrollTop
  let webHeight = document.body.clientHeight
  let innerHeight = document.documentElement.clientHeight
  let scrollMaxBottom = webHeight - innerHeight
  let rafId:number
  let toBelowStep = ()=>{
    scrollTop = Math.min(scrollMaxBottom, scrollTop+steep)
    document.documentElement.scrollTop = scrollTop
    changeScrollRolling(webHeight, innerHeight, scrollTop)
    if (scrollTop<scrollMaxBottom){
      rafId = requestAnimationFrame(toBelowStep)
    }else {
      cancelAnimationFrame(rafId)
    }
  }
  rafId = requestAnimationFrame(toBelowStep)
  // let scrollTop = document.documentElement.scrollTop;
  // let webBodyLength = document.body.clientHeight;
  // let screenVisualLength = document.documentElement.clientHeight;
  // let target = webBodyLength-screenVisualLength;
  // let steep = 20;
  // let timer = setInterval(()=>{
  //   scrollTop = Math.min(scrollTop+steep, target);
  //   if (scrollTop>=target){
  //     clearInterval(timer);
  //   }
  //   document.documentElement.scrollTop = scrollTop;
  //   changeScrollRolling(webBodyLength, screenVisualLength, scrollTop);
  // },10)
}
const changeScrollRolling=(webPageHeight:number, innerHeight:number, scrollTop:number)=>{
  let startPosition:number   = innerHeight / 2;
  let endPosition:number     = webPageHeight - innerHeight / 2;
  let currentPosition:number = scrollTop + innerHeight / 2;
  let scrollWidth:string = ((currentPosition-startPosition)*100/(endPosition-startPosition)).toFixed(2)+"%";
  let element = document.querySelector(".screen_progress_bar") as HTMLElement;
  element.style.width=scrollWidth;
}
const changeStyle=()=>{
  let element1 = document.querySelector(".app") as HTMLElement;
  element1.className=element1.className=="app day"?"app dark":"app day";
}
</script>

<style scoped lang="less">
:root{
  --theme-tools_background: rgb(240,240,240,0.1);
  --theme-tools_hover1_background: rgb(235,235,235,0.1);
  --theme-tools_hover2_background: rgb(220,220,220,0.1);
}
.day{
  --theme-tools_background: rgb(240,240,240,0.1);
  --theme-tools_hover1_background: rgb(235,235,235,0.1);
  --theme-tools_hover2_background: rgb(220,220,220,0.1);
  .tools .tools_item:nth-child(4){
    img:nth-child(2),
    img:nth-child(3),
    img:nth-child(4){
      display: none;
    }
    img:nth-child(1){
      display: block;
    }
  }
  .tools .tools_item:nth-child(1):hover,
  .tools .tools_item:nth-child(2):hover,
  .tools .tools_item:nth-child(3):hover{
    img:nth-child(1),
    img:nth-child(2){
      display: none;
    }
    img:nth-child(3){
      display: block;
    }
  }
  .tools .tools_item:nth-child(4):hover{
    img:nth-child(2){
      display: block;
    }
    img:nth-child(1),
    img:nth-child(3),
    img:nth-child(4){
      display: none;
    }
  }
}
.dark{
  --theme-tools_background: rgb(70,70,70,0.1);
  --theme-tools_hover1_background: rgb(75,75,75,0.1);
  --theme-tools_hover2_background: rgb(90,90,90,0.1);
  .tools .tools_item:nth-child(4){
    img:nth-child(1),
    img:nth-child(2),
    img:nth-child(3){
      display: none;
    }
    img:nth-child(4){
      display: block;
    }
  }
  .tools .tools_item:nth-child(1):hover,
  .tools .tools_item:nth-child(2):hover,
  .tools .tools_item:nth-child(3):hover{
    img:nth-child(2),
    img:nth-child(3){
      display: none;
    }
    img:nth-child(1){
      display: block;
    }
  }
  .tools .tools_item:nth-child(4):hover{
    img:nth-child(3){
      display: block;
    }
    img:nth-child(1),
    img:nth-child(2),
    img:nth-child(4){
      display: none;
    }
  }
}
.tools{
  position: fixed;
  right: 10px;
  bottom: 40px;
  //初始不显示，当页面下滑后再显示
  display: none;
  flex-direction: column-reverse;
  opacity: 0.6;
  transform: translateX(60px);
  .tools_item{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--theme-tools_background);
    border-radius: 6px;
    margin-bottom: 4px;
    transition: .3s;
    img{
      width: 20px;
      height: 20px;
      opacity: 1;
    }
  }
  .toBelow img{
    transform: rotate(180deg);
  }
  .toBelow,
  .changeStyle{
    //transform: translateX(60px);
  }
  .tools_item:nth-child(1),
  .tools_item:nth-child(2){
    transform: translateX(-60px);
  }
  .tools_item:nth-child(1),
  .tools_item:nth-child(2),
  .tools_item:nth-child(3){
    img:nth-child(1),
    img:nth-child(3){
      display: none;
    }
    img:nth-child(2){
      display: block;
    }
  }
}
.tools_item:nth-child(2) img{
  animation: settingRotate 2s linear infinite;
  -webkit-animation: settingRotate 2s linear infinite;
}
.tools:hover .tools_item{
  background-color: var(--theme-tools_hover1_background);
}
.tools .tools_item:hover{
  background-color: var(--theme-tools_hover2_background);
}
</style>