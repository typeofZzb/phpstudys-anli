<template>
<div id="app">
  <keep-alive include="home">
      <router-view></router-view>
    
  </keep-alive>
</div>
</template>

<script> 
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
@import "./static/scss/_minix.scss";
@import "./static/scss/common.scss";
#app {
  @include sizing;
    width: 100%;
    height: 100%;
  .wrap,.sign,.screen,.sort, .login,.details,.approval{
    width: 100%;
    height: 100%;
    @include box_flex; 
    @include direction(column);
  }
  
}




</style>
