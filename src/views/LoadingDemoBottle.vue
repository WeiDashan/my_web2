<template>
  <div class="background">
    <div class="bottle">
      <div class="water">
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
//bottle
@bottleWidth: 250px;
@bottleTopHeight: 30px;
@bottleTopWidth: 80px;
@bottleBorderWidth: 5px;
@bottlePadding: 10px;

//bottleShadow
@bottleShadowWidth: 100px;
@bottleShadowHeight: 50px;
@bottleShadowPositionTop: -30px;

//bottleLight
@bottleLightPositionTop: 10px;
@bottleLightBorderWidth: 3px;

@WaterTopHeight: 40px;

//color
@bottleColor: rgba(129, 223, 255, .3);
@bottleBorderColor: #ffffff;
@bottleShadowColor: rgba(0, 0, 0, .15);
@bottleLightBorderColor: #ffffff;
@backgroundColor: gold;
@waterColor: #0047fc;
@waterLightColor: #00b0fc;

  .background{
    background-color: @backgroundColor;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .bottle{
      width: @bottleWidth;
      height: @bottleWidth;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - @bottleWidth/2);
      top: calc(50% - @bottleWidth/2);
      background-color: @bottleColor;
      border: @bottleBorderWidth solid @bottleBorderColor;
      //padding: ;
      .water{
        position: absolute;
        left: @bottlePadding;
        bottom: @bottlePadding;
        width: calc(@bottleWidth - @bottlePadding*2);
        height: calc(@bottleWidth - @bottlePadding*2);
        border-radius: 50%;
        overflow: hidden;
        animation: waterInner 5s ease infinite;
        z-index: 2;
      @keyframes waterInner {
        from {
          transform: rotate(0deg);
        }

        25% {
          transform: rotate(-3deg);
        }

        50% {
          transform: rotate(6deg);
        }

        75% {
          transform: rotate(-5deg);
        }

        to {
          transform: rotate(0deg);
        }
      }
        .inner{
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: @waterColor;
          width: calc(@bottleWidth - @bottlePadding*2);
          height: calc(@bottleWidth/2 - @bottlePadding);

        }
      }

    }
      .water::before{
        content: "";
        position: absolute;
        width: 100%;
        height: @WaterTopHeight;
        top: calc(50% - @WaterTopHeight/2);
        background-color: @waterLightColor;
        border-radius: 50%;
        z-index: 2;
      }
    .bottle::after{
      content: "";
      position: absolute;
      left: calc(50% - @bottleShadowWidth/2);
      bottom: @bottleShadowPositionTop;
      height: @bottleShadowHeight;
      width: @bottleShadowWidth;
      border-radius: 50%;
      background-color: @bottleShadowColor;
      z-index: 1;
    }
    .bottle::before{
      content: "";
      position: absolute;
      left: calc(50% - @bottleTopWidth/2);
      top: @bottleLightPositionTop;
      height: @bottleTopHeight;
      width: @bottleTopWidth;
      border-radius: 50%;
      border: @bottleLightBorderWidth solid @bottleLightBorderColor;
      box-sizing: border-box;
    }


  }
</style>