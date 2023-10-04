<template>
  <div class="screen_progress_bar"></div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
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
</style>