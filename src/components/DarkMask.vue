<template>
  <div class="mask"></div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.day{
  .mask{
    display: none;
  }
}
.dark{
  .mask{
    display: flex;
  }
}
.mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  z-index: 5;
  pointer-events: none;
}
</style>