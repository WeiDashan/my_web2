<template>
  <div class="home">
    <LoadingPage  :flag=loadingFlag />
    <div class="background">
      <img class="backgroundImg" alt="" src="../assets/img/background_img_light.png">
      <img class="backgroundDown" @click="clickBackgroundDown" alt="" src="../assets/img/down_dbdbdb.png">
      <!--  canvas初始默认width=300,height=150  -->
      <!--  canvasWidth = background.clientWidth * window.devicePixelRatio  -->
      <!--  canvasHeight = background.clientHeight * window.devicePixelRatio  -->
      <canvas id="backgroundBubbleCan"></canvas>
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
    #backgroundBubbleCan{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: transparent;
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

const proj = ref([
  {
    name:'东软睿购商城',
    desc:'该系统是一款移动端微服务电商应用，包括用户、订单、商品、购物车等全方位多模块设计，为了反馈用户的账号操作，利用RabbitMQ实现邮件通知；为了缓存验证码，增加了SSDB；为了提升搜索效果，增加了ElasticSearch。',
    img: require('../assets/img/neusoft.jpg'),
  },
  {
    name:'HIS东软云医院信息系统',
    desc:'本系统包括登录、挂号、问诊、开药、发药、缴费共六个模块设计，聚焦于患者诊疗全过程，规范医院诊疗流程，辅助医院信息化建设。',
    img: require('../assets/img/neu_hospital.jpg'),
  },
  {
    name:'东软睿购商城',
    desc:'该系统是一款移动端微服务电商应用，包括用户、订单、商品、购物车等全方位多模块设计，为了反馈用户的账号操作，利用RabbitMQ实现邮件通知；为了缓存验证码，增加了SSDB；为了提升搜索效果，增加了ElasticSearch。',
    img: require('../assets/img/neusoft.jpg'),
  },
  {
    name:'HIS东软云医院信息系统',
    desc:'本系统包括登录、挂号、问诊、开药、发药、缴费共六个模块设计，聚焦于患者诊疗全过程，规范医院诊疗流程，辅助医院信息化建设。',
    img: require('../assets/img/neu_hospital.jpg'),
  },
])
const loadingFlag = ref(true)
let canvasWidth: number
let canvasHeight: number
let bubbleNum = 120
let bubbleList: Bubble[] = []

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
class Bubble{
  x: number
  y: number
  radius: number
  speed: number
  minY: number
  constructor() {
    this.x = Math.random()*canvasWidth                  // 气泡的x坐标
    this.radius = 3+Math.random()*6                     // 气泡半径 3~9
    this.minY = this.initMinY()                         // 气泡上升的最高位置
    this.speed = this.initSpeed()                       // 气泡上升的速度
    this.y = canvasHeight+this.radius                   // 气泡的y坐标
  }
  initMinY():number{
    if (this.radius>4){
      return canvasHeight*0.55+Math.random()*canvasHeight*0.4
    }else {
      return 40+Math.random()*canvasHeight*0.9
    }
  }
  initSpeed():number{
    return Math.random()*0.5+1-(canvasHeight-this.minY)/canvasHeight
  }
  init(){
    this.x = Math.random()*canvasWidth
    this.radius = 3+Math.random()*6
    this.minY = this.initMinY()
    this.speed = this.initSpeed()
    this.y = canvasHeight+this.radius
  }
  draw(ctx: CanvasRenderingContext2D){
    ctx.beginPath()
    if (this.y>this.minY){
      this.y = Math.max(this.y-this.speed,this.minY)
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
      ctx.fillStyle="rgba(220,220,220,0.3)";//设置填充颜色
      ctx.fill();//开始填充
    }else {
      this.init()
    }
  }
}
const resetCanvasWidthAndHeight=()=>{
  let canvas = document.querySelector("#backgroundBubbleCan") as HTMLCanvasElement
  let background = document.querySelector(".background") as HTMLElement
  canvasWidth  = background.clientWidth * window.devicePixelRatio
  canvasHeight = background.clientHeight * window.devicePixelRatio
  canvas.width = canvasWidth
  canvas.height = canvasHeight
}

const bubbleMoving=()=>{
  let canvas = document.querySelector("#backgroundBubbleCan") as HTMLCanvasElement
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  for (let i=0;i<bubbleNum;i++){
    bubbleList.push(new Bubble())
  }
  const bubbleMoveStep=()=>{
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    for (let i=0;i<bubbleNum;i++){
      bubbleList[i].draw(ctx)
    }
    requestAnimationFrame(bubbleMoveStep)
  }
  requestAnimationFrame(bubbleMoveStep)
}

onMounted(()=>{
  listenShowMenu()
  listenShowTools()
  lazyLoading()
})

const homeOnLoad=()=>{
  resetCanvasWidthAndHeight()
  bubbleMoving()
  loadingFlag.value = false
}
const homeOnResize=()=>{
  resetCanvasWidthAndHeight()
}
window.addEventListener('load',homeOnLoad)
window.addEventListener('resize',homeOnResize)

// 初始判断是否加载停止加载streamers
const changeRunStreamerConfig = ()=>{
  const screenWidth = document.body.clientWidth
  runStreamersOrNot.value = screenWidth >= 960;
}
changeRunStreamerConfig()
// 当屏幕Width小于@screenMinSize4: 960px时，停止加载streamers
window.addEventListener('resize',changeRunStreamerConfig)



// window.onload=function (){
  // resetCanvasWidthAndHeight()
  // bubbleMoving()
  // loadingFlag.value = false
// }
// window.onresize=()=>{
//   resetCanvasWidthAndHeight()
// }
</script>