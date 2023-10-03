<template>
  <div id="app">


    <router-view/>

  </div>
</template>

<style lang="less">
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/
//#showTools{
//  background-color: pink;
//  z-index: 20;
//  position: absolute;
//  left: 0px;
//  top: 0px;
//  height: 100px;
//  width: 100%;
//}
*{
  padding: 0;
  margin: 0;
}
html::-webkit-scrollbar{
  display: none;
}
html{
  -ms-overflow-style: none;
  scroll-width: none;
}
body{
  cursor: none;
  transition: .3s;
}

#app{
  position: relative;
}


/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
<script lang="ts">
  export default {
    data(){
      return{

      }
    },

    methods:{
    },


  }
</script>
