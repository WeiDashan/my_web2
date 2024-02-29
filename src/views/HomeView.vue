<template>
  <div class="home">
    <LoadingPage  :flag=loadingFlag />
    <div class="background">
      <img class="backgroundImg" alt="" src="../assets/img/background_img_light.png">
      <img class="backgroundDown" @click="clickBackgroundDown" alt="" src="../assets/img/down_dbdbdb.png">
    </div>
    <div class="menu">
      <img alt="" class="menu_off" src="../assets/img/menu_ffffff.png">
      <img alt="" class="menu_on" src="../assets/img/menu_dbdbdb.png">
      <span>MENU</span>
    </div>
    <div class="menu2">
      <img alt="" src="../assets/img/menu_ffffff.png">
    </div>
    <div class="projectBody">
      <div class="projectColumn">
        <div class="projectItem" v-for="item in proj" :key="item" @click="goTo(item.url)">
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
      <div class="webID">
        <a href="https://beian.miit.gov.cn/">辽ICP备2023016322号</a>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@menuOn:#dbdbdb;
@menuOff:#ffffff;
@dayProjectShadowColor: #d0cfcf;
@darkProjectShadowColor: rgba(0, 0, 0, 0.2);
@projectColumnZIndex: 1;
@screenMinSize1: 400px;
@screenMinSize2: 401px;
@screenMinSize3: 720px;
@screenMinSize4: 960px;
@screenMinSize5: 1200px;
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
  background: var(--theme-body_background);
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
  .projectBody{
    color: var(--theme-color);
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    .webID{
      text-align: center;
      margin-top: 40px;
      a{
        color: var(--theme-webid_color);
        text-decoration:none;
        font-size: 14px;
      }
    }
    .projectColumn{
      position: relative;
      top: 0;
      z-index: @projectColumnZIndex;
      .projectItem{
        width: 100%;
        background: var(--theme-project_item_background);
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
        transition: all .3s;
        display: flex;
        opacity: 0.9;
        .img{
          height: 235px;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all .6s;
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
@media screen and (max-width: @screenMinSize1) {
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
    .backgroundBubbleCan{
      display: none;
    }
  }
  .projectItem{
    flex-direction: column;
    .projectColumn {
      left: 0;
      width: 100%;
      .img{
        width: 100%;
      }
      .proj_info{
        width: 100%;
      }
    }
  }
}
//中小屏幕：400px<屏幕宽度<720px
@media screen and (min-width: @screenMinSize2) {
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
    .backgroundBubbleCan{
      display: none;
    }
  }
  .projectBody{
    .projectColumn {
      left: 0;
      width: 100%;
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
  }

}
//大屏幕：720px<=屏幕宽度<960px
@media screen and (min-width: @screenMinSize3) {
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
    .backgroundBubbleCan{
      display: none;
    }
  }
  .projectBody{
    .projectColumn{
      left: 0;
      width: 100%;
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
}
//超大屏幕：屏幕宽度>=960px
@media screen and (min-width: @screenMinSize4) {
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
    .backgroundBubbleCan{
      display: flex;
    }
  }
  .projectBody{
    .projectColumn{
      left: 10%;
      width: 80%;
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
}
//最大屏幕：屏幕宽度>=960px
@media screen and (min-width: @screenMinSize5) {
  .projectBody{
    .projectColumn{
      left: 20%;
      width: 60%;
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
}
</style>
<script setup lang="ts">
import {onMounted, Ref, ref} from "vue"
import LoadingPage from "@/components/LoadingPage.vue"
import streamers from "@/assets/ts/streamers"
import bubbles from "@/assets/ts/bubbles";
let runStreamersOrNot:Ref<true|false> = ref(true)
streamers({
  idName: 'stCanvas',
  body: '.projectBody',
  position : "absolute",
  top : "0",
  left : "0",
  width : "100%",
  height : "100%",
  zIndex : "0",
  pointerEvents : "none",
  opacity : "0.6",
  streamersNum: 3,
  streamerColorSaturation: "80%",
  streamerColorLightness: "60%",
  streamerColorAlphaSpeed: 0.01,
  streamerColorAlphaMidValue: 0.1,
  streamerColorHueSpeed: 1,
  stInitWidth: 25,
  ctxGlobalAlpha: 0.6,
  xSpeed: 150,
  ySpeed: 100,
},runStreamersOrNot)
let runBubblesOrNot:Ref<true|false> = ref(true)
bubbles({
  body: '.background',
  idName: 'bbCanvas',
  position : "absolute",
  top : "0",
  left : "0",
  width : "100%",
  height : "100%",
  zIndex : "1",
  pointerEvents : "none",
  opacity : "0.8",
  bubbleNum: 150,
  background: 'transparent',
  bubbleColor: "rgba(220,220,220,0.3)",
},runBubblesOrNot)
const baseURL = 'http://49.233.51.52:'
const proj = ref([
  {
    name:'东软睿购商城移动端Web',
    desc:'该商城是包括用户、登录、商品、购物车、订单、秒杀等6个模块，利用MQ实现了邮件验证码登录，利用Redis的lua脚本和MQ实现秒杀，利用MinIO存储图片',
    img: require('../assets/img/shopWeb.jpg'),
    url: baseURL+"8084"
  },
  {
    name:'东软睿购商城PC端管理系统设计',
    desc:'该管理系统包括用户、角色、资源、品牌、分类、商品、秒杀等7个模块，利用MinIO存储图片',
    img: require('../assets/img/shopBackWeb.jpg'),
    url: baseURL+"8083"
  },
  {
    name:'东软云医院信息系统设计',
    desc:'本系统包括登录、挂号、问诊、开药、发药、缴费共六个模块设计，聚焦于患者诊疗全过程，规范医院诊疗流程，辅助医院信息化建设。',
    img: require('../assets/img/neu_hospital.jpg'),
    url: null
  },
  {
    name:'应急管理系统设计',
    desc:'该系统为应对突发事件设计的管理系统，利用EChart完成辽宁省矢量地图',
    img: require('../assets/img/neusoft.jpg'),
    url: baseURL+"8082"
  },
  {
    name:'电影网站设计',
    desc:'该系统包括首页展示，分类和详情模块',
    img: require('../assets/img/movieWeb.jpg'),
    url: baseURL+"8081"
  },
])
const goTo = (url:string|null)=>{
  if (url === null){
    console.log("未部署到网站上QAQ")
  }else {
    window.location.href = url;
  }
}
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
    threshold: 0.1,
  }
  const listenShowMenuCall=(entries:IntersectionObserverEntry[])=>{
      entries.forEach((entry:IntersectionObserverEntry)=>{
        const element = document.querySelector('.menu') as HTMLElement;
        const element2 = document.querySelector('.menu2') as HTMLElement;
        if (entry.isIntersecting&&entry.intersectionRatio>0.1){
          element.style.display='flex'
          element2.style.display='none'
        }
        else{
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
const homeOnLoad=()=>{
  loadingFlag.value = false
}
window.addEventListener('load',homeOnLoad)

// 初始判断是否加载canvas特效
const changeRunCanvasConfig = ()=>{
  const screenWidth = document.body.clientWidth
  runStreamersOrNot.value = screenWidth >= 960
  runBubblesOrNot.value = screenWidth >= 960
}
changeRunCanvasConfig()
// 当屏幕Width小于@screenMinSize4: 960px时，停止加载streamers
window.addEventListener('resize',changeRunCanvasConfig)

</script>