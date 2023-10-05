<template>
  <div class="home">
    <LoadingPage  :flag=loadingFlag />
    <div class="background">
      <img class="backgroundImg" alt="" src="../assets/background_img_light.png">
      <img class="backgroundDown" @click="clickBackgroundDown" alt="" src="../assets/down_dbdbdb.png">
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
    </div>
  </div>
</template>
<style lang="less">
@menuOn:#dbdbdb;
@menuOff:#ffffff;
@dayProjectShadowColor: #d0cfcf;
@darkProjectShadowColor: rgba(0, 0, 0, 0.2);
.day{
  .projectItem:hover{
    transition: all .3s;
    box-shadow:
        2px 2px 16px @dayProjectShadowColor;
  }
}
.dark{
  .projectItem{
    box-shadow:
        0 0 20px 10px @darkProjectShadowColor;
  }
}
.home{
  width: 100%;
  .background{
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
    .backgroundImg{
      display: block;
    }
    .backgroundDown{
      position: absolute;
      left: 50%;
      bottom: 6%;
      width: 40px;
      height: 40px;
      z-index: 2;
      animation: backgroundDown 4s linear infinite;
    }
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
}
@keyframes backgroundDown {
  from{
    transform: translateX(-50%);
  }
  50%{
    transform: translateX(-50%);
  }
  60%{
    transform: translateX(-50%) translateY(-30%);
  }
  70%{
    transform: translateX(-50%);
  }
  75%{
    transform: translateX(-50%) translateY(-10%);
  }
  80%{
    transform: translateX(-50%);
  }
  to{
    transform: translateX(-50%);
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
  .background{
    .backgroundImg{
      height: 226px;
      width: auto;
      object-fit: cover;
      transform: translate(calc(50vw - 50%),0);
    }
    .backgroundDown{
      display: none;
    }
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
  .background{
    .backgroundImg{
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .backgroundDown{
      display: none;
    }
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
  .background{
    .backgroundImg{
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .backgroundDown{
      display: none;
    }
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
  .background{
    .backgroundImg{
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .backgroundDown{
      display: flex;
    }
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

import {onMounted, ref} from "vue"
import LoadingPage from "@/components/LoadingPage.vue";
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
const loadingFlag = ref(true)
const changeScrollRolling=(pageHeight:number, innerHeight:number, scrollTop:number)=>{
  let totalDistance = Math.max(pageHeight - innerHeight);
  if (totalDistance>0){
    let scrollWidth:string = (scrollTop*100/totalDistance).toFixed(2)+"%";
    let element = document.querySelector(".screen_progress_bar") as HTMLElement;
    element.style.width=scrollWidth;
  }
}
const clickBackgroundDown = ()=>{
  let downSpeed = 10
  let element = document.querySelector(".background") as HTMLElement;
  let moveDistance = element.clientHeight
  let scrollTop = document.documentElement.scrollTop
  let rafId: number
  let moveDown = ()=>{
    scrollTop = Math.min(scrollTop+downSpeed, moveDistance)
    document.documentElement.scrollTop = scrollTop
    changeScrollRolling(document.body.clientHeight, document.documentElement.clientHeight, scrollTop)
    if (scrollTop<moveDistance){
      rafId = requestAnimationFrame(moveDown)
    }else {
      cancelAnimationFrame(rafId)
    }
  }
  rafId = requestAnimationFrame(moveDown)
}
const listenShowMenu = ()=>{
    const options={
      threshold: 0,
    };
    const listenShowMenuCall=(entries:IntersectionObserverEntry[])=>{
      entries.forEach((entry:IntersectionObserverEntry)=>{
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
    const showToolsCall = (entries: IntersectionObserverEntry[])=>{
      entries.forEach((entry: IntersectionObserverEntry)=>{
        let element = document.querySelector('.tools') as HTMLElement;
        if (entry.isIntersecting && entry.intersectionRatio>0.95){
          element.style.display='none';
        }else {
          element.style.display='flex';
        }
      })
    }
    const observer = new IntersectionObserver(showToolsCall,options)
    const section = document.querySelector(".background") as HTMLElement;
    observer.observe(section);
  }
const lazyLoading = () =>{
  const options = {
    threshold: 0
  }
  const listenTarget=(entries:IntersectionObserverEntry[])=>{
    entries.forEach((entry:IntersectionObserverEntry)=>{
      if (entry.isIntersecting){
        // console.log(entry.target.getAttribute("data-src"))
        let data_src = entry.target.getAttribute("data-src") as string
        entry.target.setAttribute('src',data_src)
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
onMounted(()=>{
  listenShowMenu()
  listenShowTools()
  lazyLoading()
})
window.onload=function (){
  loadingFlag.value = false
}
</script>