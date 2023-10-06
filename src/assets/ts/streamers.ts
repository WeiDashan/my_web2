function streamers(streamersOptions:any){
    window.onresize=()=>{
        resetCanvasWidthAndHeight()
    }
    window.onload=()=>{
        for (const key in streamersOptions){
            if (key in stOptions){
                stOptions[key] = streamersOptions[key]
            }
        }
        resetCanvasWidthAndHeight()
        createCanvas()
        init()
        runStreamer()
    }
}
let stBody: HTMLElement
let stCanvasWidth: number
let stCanvasHeight: number
let stCanvas: HTMLCanvasElement
let stCtx:CanvasRenderingContext2D
let streamersList: STPoint[][]
let streamersColor: STColorUnit[][]
let currentHues: number[]

const stOptions:any={
    body: '.body',
    position : "fixed",
    top : "0",
    left : "0",
    width : "100%",
    height : "100%",
    zIndex : "-1",
    pointerEvents : "none",
    opacity : "0.8",
    xSpeed : 150,
    streamersNum: 3,
    // hsla(hue, saturation, lightness, alpha)
    // hue定义色轮上的度数0-360，0为红色，120为绿色，240为蓝色
    // saturation定义饱和度，0%是灰度，100%是全彩色
    // lightness定义亮度，0%是黑色，50%为正常，100%为白色
    // alpha定义不透明度，介于0.0完全透明和1.0完全不透明之间
    streamerColorSaturation: "80%",
    streamerColorLightness: "60%",
    streamerColorAlphaSpeed: 0.01,
    streamerColorAlphaMidValue: 0.1,
    streamerColorHueSpeed: 1,
    stInitWidth: 90,
    ctxGlobalAlpha: 0.6,
}
class STPoint{
    x:number
    y:number
    direction: 'left'|'right'
    constructor(x:number, y: number, direction: 'left'|'right') {
        this.x = 0
        this.y = 0
        this.x = x
        this.y = y
        this.direction = direction
    }
    copy(point: STPoint){
        this.x = point.x
        this.y = point.y
    }
    outside(){
        return this.x<=0
            || this.x>=stCanvasWidth
            || this.y<=0
            || this.y>=stCanvasHeight
    }

}
class STColorUnit{
    streamerColorHue: number
    streamerColorAlpha = 0
    streamerColorAlphaCount = 0
    streamerColorUseful = true
    constructor(streamerColorHue:number) {
        this.streamerColorHue = streamerColorHue
    }
    update(){
        if (this.streamerColorUseful){
            this.streamerColorAlphaCount += stOptions.streamerColorAlphaSpeed
            if (this.streamerColorAlphaCount<=0||this.streamerColorAlphaCount>=2){
                this.streamerColorUseful = false
            }else if (this.streamerColorAlphaCount<=1){
                this.streamerColorAlpha = this.streamerColorAlphaCount
            }else{
                this.streamerColorAlpha = 2 - this.streamerColorAlphaCount
            }
        }
        this.colorValid()
    }
    colorValid(){
        if (this.streamerColorAlphaCount>=2){
            this.streamerColorUseful = false
        }
    }
}
const initGenerateStreamer=()       :STPoint[]=>{
    const getDirection=(x:number)=>{
        return  x==0?'left':'right'
    }
    const stPoints: STPoint[]   = []
    const x         = generateX()
    const centerY   = generateCenterY()
    const direction = getDirection(x)
    stPoints.push(new STPoint(x,centerY+stOptions.stInitWidth, direction))
    stPoints.push(new STPoint(x,centerY-stOptions.stInitWidth, direction))
    stPoints.push(generateNewPoint(stPoints[1]))
    return stPoints
}
const initGenerateColor=(i:number)  :STColorUnit[]=>{
    const stColor = []
    stColor.push(new STColorUnit(currentHues[i]))
    return stColor
}
const generateHue=()              :number=>{
    return Math.round(Math.random()*360)
}
const init=()=>{
    streamersList   = []
    streamersColor  = []
    currentHues     = []
    for (let i=0; i<stOptions.streamersNum;i++){
        currentHues.push(generateHue())
        const stPoints: STPoint[]     = initGenerateStreamer()
        const stColor: STColorUnit[]  = initGenerateColor(i)
        streamersList.push(stPoints)
        streamersColor.push(stColor)
    }
}
const generateCenterY=():number=>{
    return stOptions.stInitWidth+Math.random()*(stCanvasHeight-stOptions.stInitWidth*2)
}
const generateX=():number=>{
    return Math.random()>0.5?0:stCanvasWidth
}
// 根据上一点生成下一个点
const generateNewPoint=(lastSTPoint: STPoint): STPoint=>{
    const moveX=(x: number):number=>{
        if (lastSTPoint.direction=="left"){
            return  x + (Math.random()-0.2)*stOptions.xSpeed
        }else {
            return  x - (Math.random()-0.2)*stOptions.xSpeed
        }
    }
    const moveY=(y: number):number=>{
        const nodeY = y + (Math.random() - 0.5) * stCanvasHeight * 0.25
        return (nodeY > stCanvasHeight || nodeY < 0) ? moveY(y) : nodeY
    }
    return new STPoint(moveX(lastSTPoint.x),moveY(lastSTPoint.y),lastSTPoint.direction)
}
const cannotMove=(point1: STPoint, point2: STPoint):boolean=>{
    return point1.outside() && point2.outside()
}
//绘图
const draw=()=>{
    // 获取填充颜色
    const _getColorByIndex=(i:number,j:number):string=>{
        return "hsla("  + streamersColor[i][j].streamerColorHue + ", "
            + stOptions.streamerColorSaturation + ", "
            + stOptions.streamerColorLightness + ", "
            + streamersColor[i][j].streamerColorAlpha + " )"
    }
    // 清空画板
    stCtx.clearRect(0, 0, stCanvasWidth, stCanvasHeight)
    // 画图
    for (let i=0;i<stOptions.streamersNum;i++){
        for (let j=0;j<streamersList[i].length-2;j++){
            stCtx.beginPath()
            stCtx.moveTo(streamersList[i][j].x, streamersList[i][j].y)
            stCtx.lineTo(streamersList[i][j+1].x, streamersList[i][j+1].y)
            stCtx.lineTo(streamersList[i][j+2].x, streamersList[i][j+2].y)
            stCtx.closePath()
            stCtx.fillStyle = _getColorByIndex(i,j)
            stCtx.fill()
        }
    }
}
// 更新点集
// 1、更新变量和数据:
//          1.1 彩带颜色Hue
//          1.2 小区域的alpha
// 2、剔除
//          2.1 剔除老的点: alpha不满足要求(透明的)
//          2.2 剔除老的彩带: 少于3个点
// 3、生成新的点
//          3.1 判断能不能生成: 点在内部 && 上一个区域透明度够
//          3.2 生成
const updateSTPoints=()=>{
    // 1.1 更新彩带颜色Hue
    for (let i=0;i<stOptions.streamersNum;i++){
        const curHue    = currentHues[i]+stOptions.streamerColorHueSpeed
        currentHues[i]  = curHue<360 ? curHue : curHue-360
    }
    // 1.2 小区域的alpha
    for (let i=0;i<stOptions.streamersNum;i++){
        for (let j=0;j<streamersColor[i].length;j++){
            streamersColor[i][j].update()
        }
    }
    // 2.1 剔除alpha不满足要求(透明的): color && point
    for (let i=0;i<stOptions.streamersNum;i++){
        const color = streamersColor[i][0] as STColorUnit
        if (!color.streamerColorUseful){
            streamersColor[i].splice(0,1)
            streamersList[i].splice(0,1)
        }
    }
    // 2.2 剔除老的彩带(hue,color,point)
    for (let i=0;i<stOptions.streamersNum;i++){
        if (streamersList[i].length<3){
            currentHues[i]      = generateHue()
            streamersList[i]    = initGenerateStreamer()
            streamersColor[i]   = initGenerateColor(i)
        }
    }
    // 3、生成新的点 point && color
    for (let i=0;i<stOptions.streamersNum;i++){
        const pointsLength = streamersList[i].length
        const pointLast = streamersList[i][pointsLength-1]
        const point2 = streamersList[i][pointsLength-2]
        // 3.1 判断能不能生成
        const colorLength = streamersColor[i].length
        if (!cannotMove(pointLast,point2)
            && streamersColor[i][colorLength-1].streamerColorAlpha
            >= stOptions.streamerColorAlphaMidValue ){
            // 3.2 生成
            streamersList[i].push(generateNewPoint(pointLast))
            streamersColor[i].push(new STColorUnit(currentHues[i]))
        }
    }
}

// 运行逻辑
const runStreamer = ()=>{
    draw()
    updateSTPoints()
    requestAnimationFrame(runStreamer)
}

// 初始化canvas画布
const createCanvas=()=>{
    stBody = document.querySelector(stOptions.body) as HTMLElement
    stCanvasWidth  = stBody.clientWidth * window.devicePixelRatio
    stCanvasHeight  = stBody.clientHeight * window.devicePixelRatio
    stCanvas = document.createElement('canvas')
    stCtx = stCanvas.getContext('2d') as CanvasRenderingContext2D
    stCanvas.width                  = stCanvasWidth
    stCanvas.height                 = stCanvasHeight
    stCanvas.style.position         = stOptions.position
    stCanvas.style.top              = stOptions.top
    stCanvas.style.left             = stOptions.left
    stCanvas.style.width            = stOptions.width
    stCanvas.style.height           = stOptions.height
    stCanvas.style.zIndex           = stOptions.zIndex
    stCanvas.style.pointerEvents    = stOptions.pointerEvents
    stCanvas.style.opacity          = stOptions.opacity
    stCtx.globalAlpha               = stOptions.ctxGlobalAlpha
    stBody.appendChild(stCanvas)
}

// 修改画布宽度
const resetCanvasWidthAndHeight=()=>{
    stBody = document.querySelector(".body") as HTMLElement
    stCanvasWidth   = stBody.clientWidth * window.devicePixelRatio
    stCanvasHeight  = stBody.clientHeight * window.devicePixelRatio
    stCanvas.width  = stCanvasWidth
    stCanvas.height = stCanvasHeight
}

export default streamers