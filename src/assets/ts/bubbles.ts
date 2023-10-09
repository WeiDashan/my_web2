// 抛出的总函数
const bubbles=(bubblesOption: {
    body?: string,
    idName?: string,
    position?: string,
    top?: string,
    left?: string,
    width?: string,
    height?: string,
    zIndex?: string,
    pointerEvents?: string,
    opacity?: string,
    bubbleNum?: number,
    background?: string,
    bubbleColor?: string,
}, runBubblesOrNot:Ref<true|false>)=>{
    window.addEventListener('resize', bbOnResize)
    for (const key in bubblesOption){
        if (key in bbOptions){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            bbOptions[key]= bubblesOption[key]
        }
    }
    window.addEventListener('load', runBobbles)
    watch(runBubblesOrNot,()=>{
        if (runBubblesOrNot.value){
            bbOnResize()
            runBobbles()
            window.addEventListener('resize', bbOnResize)
            window.addEventListener('load', runBobbles)
        }else {
            window.removeEventListener('resize', bbOnResize)
            window.removeEventListener('load', runBobbles)
            cancelAnimationFrame(bubbleAniFrameId)
        }
    })
}
// 参数列表
import {Ref, watch} from "vue";

const bbOptions: {
    body: string,
    idName: string,
    position : string,
    top : string,
    left : string,
    width : string,
    height : string,
    zIndex : string,
    pointerEvents : string,
    opacity : string,
    bubbleNum: number,
    background: string,
    bubbleColor: string,
}={
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
}

let bbBody: HTMLElement|null
let bbCanvas: HTMLCanvasElement|null
let bbCtx: CanvasRenderingContext2D|null
let bbCanvasWidth: number
let bbCanvasHeight: number
let bubbleList: Bubble[]
let bubbleAniFrameId: number

// 初始化canvas画布
const createBubblesCanvas=()=>{
    bbBody = document.querySelector(bbOptions.body)
    bbCanvas = document.querySelector("#"+bbOptions.idName) as HTMLCanvasElement|null
    if (bbBody != null && bbCanvas == null){
        bbCanvas = document.createElement('canvas')
        // <!--  canvas初始默认width=300,height=150  -->
        // <!--  canvasWidth = background.clientWidth * window.devicePixelRatio  -->
        // <!--  canvasHeight = background.clientHeight * window.devicePixelRatio  -->
        bbCanvasWidth = bbBody.clientWidth*window.devicePixelRatio
        bbCanvasHeight = bbBody.clientHeight*window.devicePixelRatio
        bbCanvas.width                  = bbCanvasWidth
        bbCanvas.height                 = bbCanvasHeight
        bbCanvas.id                     = bbOptions.idName
        bbCanvas.style.position         = bbOptions.position
        bbCanvas.style.top              = bbOptions.top
        bbCanvas.style.left             = bbOptions.left
        bbCanvas.style.width            = bbOptions.width
        bbCanvas.style.height           = bbOptions.height
        bbCanvas.style.zIndex           = bbOptions.zIndex
        bbCanvas.style.pointerEvents    = bbOptions.pointerEvents
        bbCanvas.style.opacity          = bbOptions.opacity
        bbCanvas.style.backgroundColor  = bbOptions.background
        bbCtx = bbCanvas.getContext('2d')
        bbBody.appendChild(bbCanvas)
    }
}

// Bubble类初始化
class Bubble{
    x: number
    y: number
    radius: number
    speed: number
    minY: number
    constructor(canvasWidth:number,canvasHeight:number) {
        this.x = Math.random()*canvasWidth                      // 气泡的x坐标
        this.radius = 3+Math.random()*4                         // 气泡半径 3~9
        this.minY = this._initMinY(canvasWidth,canvasHeight)     // 气泡上升的最高位置
        this.speed = this._initSpeed(canvasWidth,canvasHeight)   // 气泡上升的速度
        this.y = canvasHeight+this.radius                       // 气泡的y坐标
    }
    _initMinY(canvasWidth:number,canvasHeight:number):number{
        if (this.radius>4){
            return canvasHeight*0.55+Math.random()*canvasHeight*0.4
        }else {
            return 40+Math.random()*canvasHeight*0.9
        }
    }
    _initSpeed(canvasWidth:number,canvasHeight:number):number{
        return Math.random()*0.5+1-(canvasHeight-this.minY)/canvasHeight
    }
    updateBubble(){
        this.y = Math.max(this.y-this.speed,this.minY)
    }
    validBubbleOut():boolean{
        return this.y<=this.minY
    }
}

// 初始化气泡数组
const BubblesInit=()=>{
    if (bubbleList == null||bubbleList.length==0){
        bubbleList = []
        for (let index=0;index<bbOptions.bubbleNum;index++){
            bubbleList.push(new Bubble(bbCanvasWidth,bbCanvasHeight))
        }
    }
}

// 渲染气泡
const drawBubbles=()=>{
    if (bbCtx!=null){
        bbCtx.clearRect(0,0,bbCanvasWidth,bbCanvasHeight)
        for (let i=0;i<bbOptions.bubbleNum;i++){
            bbCtx.beginPath()
            bbCtx.arc(bubbleList[i].x, bubbleList[i].y, bubbleList[i].radius, 0, Math.PI*2)
            bbCtx.fillStyle= bbOptions.bubbleColor;//设置填充颜色
            bbCtx.fill();//开始填充
        }
    }
}

const drawBubblesStep=()=>{
    // update
    for (let index=0;index<bbOptions.bubbleNum;index++){
        bubbleList[index].updateBubble()
        if (bubbleList[index].validBubbleOut()){
            bubbleList[index] = new Bubble(bbCanvasWidth,bbCanvasHeight)
        }
    }
    // draw
    drawBubbles()
    bubbleAniFrameId = requestAnimationFrame(drawBubblesStep)
}

// 运行逻辑
const runBobbles=()=>{
    createBubblesCanvas()
    BubblesInit()
    drawBubblesStep()
}

// 监听页面宽度
const bbOnResize = ()=>{
    bbBody = document.querySelector(bbOptions.body)
    bbCanvas = document.querySelector("#"+bbOptions.idName) as HTMLCanvasElement|null
    if (bbBody!=null && bbCanvas!=null){
        bbCanvasWidth = bbBody.clientWidth*window.devicePixelRatio
        bbCanvasHeight = bbBody.clientHeight*window.devicePixelRatio
        bbCanvas.width = bbCanvasWidth
        bbCanvas.height = bbCanvasHeight
    }
}

export default bubbles