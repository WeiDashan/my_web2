<template>
  <div class="home day"
       @mousemove="listenMouseMove"
       @mousewheel="listenScrollRolling"
       @mousedown="listenMouseDown"
       @mouseup="listenMouseUp">
    <div id="showTools"></div>
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
    <div id="pointer" class="border1"></div>
    <div id="pointer2"></div>
    <div class="mark"></div>
    <div class="screen_progress_bar"></div>
    <div class="background">
        <img alt="" src="../assets/background_img_light.png">
      </div>
    <div class="menu">
        <img alt="" class="menu_off" src="../assets/menu_ffffff.png">
        <img alt="" class="menu_on" src="../assets/menu_dbdbdb.png">
        <span>MENU</span>
      </div>
    <div class="menu2">
        <img alt="" src="../assets/menu_ffffff.png">
      </div>
    <div class="body">
      <div class="projectItem" v-for="item in proj" :key="item">
          <div class="img">
            <img class="lazyImg" alt="" :data-src="item.img" src="">
          </div>
          <div class="proj_info">
            <div class="proj_title">
              {{item.name}}
            </div>
            <div class="proj_desc">
              {{item.desc}}
            </div>
          </div>
        </div>

      <div class="projectItem" v-for="item in proj" :key="item">
        <div class="img">
          <img class="lazyImg" alt="" :data-src="item.img" src="">
        </div>
        <div class="proj_info">
          <div class="proj_title">
            {{item.name}}
          </div>
          <div class="proj_desc">
            {{item.desc}}
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>
<style lang="less">

@menuOn:#dbdbdb;
@menuOff:#ffffff;
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
  //background-color: gold;
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
    //background-color: red;
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
    //background-color: red;
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
*{
  margin: 0;
  padding: 0;
}
:root{
  --theme-color: #000;
  --theme-body_background: rgb(245,245,245,0.9);
  --theme-project_item_background: rgb(255,255,255,0.9);
  --theme-pointer_background: #222;
  --theme-pointer_border_color: #696969;
  --theme-tools_background: rgb(240,240,240,0.1);
  --theme-tools_hover1_background: rgb(235,235,235,0.1);
  --theme-tools_hover2_background: rgb(220,220,220,0.1);
}
.day{
  --theme-color: #000;
  --theme-body_background: rgb(245,245,245,0.9);
  --theme-project_item_background: rgb(255,255,255,0.9);
  --theme-pointer_background: #222;
  --theme-pointer_border_color: #696969;
  --theme-tools_background: rgb(240,240,240,0.1);
  --theme-tools_hover1_background: rgb(235,235,235,0.1);
  --theme-tools_hover2_background: rgb(220,220,220,0.1);
  .mark{
    display: none;
  }
  .projectItem:hover{
    transition: all .3s;
    box-shadow:
        2px 2px 16px #d0cfcf;
  }
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
  --theme-color: #fff;
  --theme-body_background: rgb(51,51,51,0.9);
  --theme-project_item_background: rgb(70,70,70,0.9);
  --theme-pointer_background: #fff;
  --theme-pointer_border_color: #fff;
  --theme-tools_background: rgb(70,70,70,0.1);
  --theme-tools_hover1_background: rgb(75,75,75,0.1);
  --theme-tools_hover2_background: rgb(90,90,90,0.1);
  .mark{
    display: flex;
  }
  .projectItem{
    box-shadow:
        0 0 20px 10px rgba(0, 0, 0, 0.2);
  }
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
.home{
  .mark{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .background{
    margin: 0;
    padding: 0;
    img{
      display: block;
    }
  }
  .screen_progress_bar{
    position: fixed;
    left: 0;
    top: 0;
    height: 2px;
    background-color: #77b6ff;
    width: 0;
    transition: .3s ease-out;
    z-index: 2;
  }
  #pointer{
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--theme-pointer_background);
    z-index: 3;
    pointer-events: none;
    transition: 50ms;
  }
  #pointer2{
    position: absolute;
    left: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px var(--theme-pointer_border_color) solid;
    background-color: rgba(0,0,0,0);
    transition: .1s ease-out;
    z-index: 2;
    pointer-events: none;
  }
  .menu2{
    position: fixed;
    left: 0;
    top: 20px;
    height: 40px;
    width: 30px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    img{
      width: 16px;
      height: 16px;
    }
  }
  .menu2:hover{
    background-color: #515151;
  }
  .menu{
    position: fixed;
    left: 20px;
    top: 20px;
    color: @menuOff;
    display: none;
    flex-direction: row;
    align-items: center;
    font-size: 12px;

    img{
      width: 12px;
      height: 12px;
      margin-right: 10px;

    }
    .menu_on{
      display: none;
    }
  }
  .menu:hover{
    color: @menuOn;
    border-color: @menuOn;
    //cursor: pointer;
    .menu_on{
      display: block;
    }
    .menu_off{
      display: none;
    }
  }
  .body{
    background: var(--theme-body_background);
    color: var(--theme-color);
    padding-top: 20px;
    padding-bottom: 20px;

    .projectItem{
      width: 100%;
      //height: 235px;
      background: var(--theme-project_item_background);
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
      overflow: hidden;
      transition: all .3s;
      //display: flex;
      display: flex;
      opacity: 0.9;
      //flex-direction: row;
      .img{
        //width: 40%;
        height: 235px;
        overflow: hidden;
        img{
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all .6s;
          //visibility: hidden;
        }
      }
      .proj_info{
        //width: 60%;
        height: 235px;
        padding: 45px 50px 55px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: lighter;
        .proj_title{
          width: 100%;
          height: 40px;
          font-size: 1.5rem;
        }
        .proj_desc{
          width: 100%;
          line-height: 28px;
          overflow: hidden;
          -webkit-line-clamp:3;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
    .projectItem:hover {
      .img{
        img{
          transform: scale(1.2);
          transition: all .6s;
        }
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
}


@keyframes settingRotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

//小屏幕：屏幕宽度<=400px
@media screen and (max-width: 400px) {
  .menu{
    padding: 0;
    border: none;
  }
  .background img{
    height: 226px;
    width: auto;
    object-fit: cover;
    transform: translate(calc(50vw - 50%),0);
  }
  .projectItem{
    flex-direction: column;
    .img{
      width: 100%;
    }
    .proj_info{
      width: 100%;
    }
  }
}
//中小屏幕：400px<屏幕宽度<720px
@media screen and (min-width: 401px) {
  .menu{
    padding: 0;
    border: none;
  }
  .background img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .body{
    padding-left: 0;
    padding-right: 0;
  }
  .projectItem{
    flex-direction: column;
    .img{
      width: 100%;
    }
    .proj_info{
      width: 100%;
    }
  }
}
//大屏幕：720px<=屏幕宽度<960px
@media screen and (min-width: 720px) {
  .menu{
    padding: 10px 20px;
    border: 1px @menuOff solid;
    border-radius: 4px;
  }
  .background img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .body{
    padding-left: 0;
    padding-right: 0;
    :nth-child(odd){
      flex-direction: row;
    }
    :nth-child(even){
      flex-direction: row-reverse;
    }
    .projectItem{
      .img{
        width: 40%;
      }
      .proj_info{
        width: 60%;
      }
    }
  }
}
//超大屏幕：屏幕宽度>=960px
@media screen and (min-width: 960px) {
  .menu{
    padding: 10px 20px;
    border: 1px @menuOff solid;
    border-radius: 4px;
  }
  .background img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .body{
    padding-left: 10%;
    padding-right: 10%;
    :nth-child(odd){
      flex-direction: row;
    }
    :nth-child(even){
      flex-direction: row-reverse;
    }
    .projectItem{
      .img{
        width: 40%;
      }
      .proj_info{
        width: 60%;
      }
    }
  }
}
//最大屏幕：屏幕宽度>=960px
@media screen and (min-width: 1200px) {
  .body{
    padding-left: 20%;
    padding-right: 20%;
    :nth-child(odd){
      flex-direction: row;
    }
    :nth-child(even){
      flex-direction: row-reverse;
    }
    .projectItem{
      .img{
        width: 40%;
      }
      .proj_info{
        width: 60%;
      }
    }
  }
}
</style>
<script setup lang="ts">
import {onBeforeMount, onMounted, ref} from "vue"
const proj = ref([
  {
    name:'东软睿购商城',
    desc:'该系统是一款移动端微服务电商应用，包括用户、订单、商品、购物车等全方位多模块设计，为了反馈用户的账号操作，利用RabbitMQ实现邮件通知；为了缓存验证码，增加了SSDB；为了提升搜索效果，增加了ElasticSearch。',
    img: require('../assets/neusoft.jpg'),
  },
  {
    name:'HIS东软云医院信息系统',
    desc:'本系统包括登录、挂号、问诊、开药、发药、缴费共六个模块设计，聚焦于患者诊疗全过程，规范医院诊疗流程，辅助医院信息化建设。',
    img: require('../assets/neu_hospital.jpg'),
  },
  {
    name:'东软睿购商城',
    desc:'该系统是一款移动端微服务电商应用，包括用户、订单、商品、购物车等全方位多模块设计，为了反馈用户的账号操作，利用RabbitMQ实现邮件通知；为了缓存验证码，增加了SSDB；为了提升搜索效果，增加了ElasticSearch。',
    img: require('../assets/neusoft.jpg'),
  },
  {
    name:'HIS东软云医院信息系统',
    desc:'本系统包括登录、挂号、问诊、开药、发药、缴费共六个模块设计，聚焦于患者诊疗全过程，规范医院诊疗流程，辅助医院信息化建设。',
    img: require('../assets/neu_hospital.jpg'),
  },
])
const to_top_below_speed=20
const listenShowMenu = ()=>{
    const options={
      threshold: 0,
    };
    const listenShowMenuCall=(entries:any)=>{
      entries.forEach((entry:any)=>{
        const element = document.querySelector('.menu') as HTMLElement;
        const element2 = document.querySelector('.menu2') as HTMLElement;
        if (entry.isIntersecting){
          element.style.display='flex'
          element2.style.display='none'
        }else{
          element.style.display='none'
          element2.style.display='flex'
        }
      })
    }
    const observer = new IntersectionObserver(listenShowMenuCall,options);
    const section = document.querySelector(".background") as HTMLElement;
    observer.observe(section);
  }
const listenShowTools = ()=>{
    const options = {
    threshold: 1
  }
    const showToolsCall = (entries: any)=>{
      entries.forEach((entry: any)=>{
        let element = document.querySelector('.tools') as HTMLElement;
        if (entry.isIntersecting && entry.intersectionRatio>0.01 ){
          element.style.display='none';
        }else {
          element.style.display='flex';
        }
      })
    }
    const observer = new IntersectionObserver(showToolsCall,options)
    const section = document.querySelector("#showTools") as HTMLElement;
    observer.observe(section);
  }
const listenMouseMove = (e:any)=>{
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
const listenScrollRolling=(e:any)=>{
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
const changeScrollRolling=(webPageHeight:number, innerHeight:number, scrollTop:number)=>{
  let startPosition:number   = innerHeight / 2;
  let endPosition:number     = webPageHeight - innerHeight / 2;
  let currentPosition:number = scrollTop + innerHeight / 2;
  let scrollWidth:string = ((currentPosition-startPosition)*100/(endPosition-startPosition)).toFixed(2)+"%";
  let element = document.querySelector(".screen_progress_bar") as HTMLElement;
  element.style.width=scrollWidth;
}
const lazyLoading = () =>{
  const options = {
    threshold: 0
  }
  const listenTarget=(entries:any)=>{
    entries.forEach((entry:any)=>{
      if (entry.isIntersecting){
        // console.log(entry.target.getAttribute("data-src"))
        entry.target.setAttribute('src',entry.target.getAttribute("data-src"))
        observer.unobserve(entry.target)
      }
    })
  }
  const observer = new IntersectionObserver(listenTarget,options);
  const sections = document.querySelectorAll(".lazyImg");
  sections.forEach((section)=>{
    observer.observe(section)
  })
}
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
const changeStyle=()=>{
    let element1 = document.querySelector(".home") as HTMLElement;
    element1.className=element1.className=="home day"?"home dark":"home day";
  }
onMounted(()=>{
  listenShowMenu()
  listenShowTools()
  lazyLoading()
  setTimeout(()=>{
    //有点小问题，二次刷新后scrollTop值会异常
    // console.log(webPageHeight," ",innerHeight," ",scrollTop)
    let webPageHeight:number = document.body.clientHeight;
    let innerHeight:number = document.documentElement.clientHeight;
    let scrollTop:number = document.documentElement.scrollTop;
    changeScrollRolling(webPageHeight, innerHeight, scrollTop);
  },200)

})
window.onload=function (){
  let element = document.querySelector('.loading_mask') as HTMLElement
  element.style.display = "none"
}

</script>
