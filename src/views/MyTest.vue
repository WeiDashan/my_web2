<template>
  <div class="background">
<!--  canvas初始默认width=300,height=150  -->
<!--  canvasWidth = background.clientWidth * window.devicePixelRatio  -->
<!--  canvasHeight = background.clientHeight * window.devicePixelRatio  -->
    <canvas id="backgroundBubbleCan"></canvas>
  </div>
</template>

<script setup lang="ts">
let canvasWidth: number
let canvasHeight: number
let bubbleList: Bubble[] = []
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
      return canvasHeight*0.6+Math.random()*canvasHeight*0.3
    }else {
      return 40+Math.random()*canvasHeight*0.9
    }
  }
  initSpeed():number{
    return Math.random()+1-(canvasHeight-this.minY)/canvasHeight
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
      ctx.fillStyle="rgba(220,220,220,0.5)";//设置填充颜色
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

  let bubbleNum = 90
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
window.onload=()=>{
  resetCanvasWidthAndHeight()
  bubbleMoving()
}
window.onresize=()=>{
  resetCanvasWidthAndHeight()
}
</script>

<style scoped lang="less">
  .background{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    //background: pink;
    #backgroundBubbleCan{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: green;
    }
  }
</style>