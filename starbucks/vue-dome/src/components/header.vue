<template>
  <div class="header">
    <div class="header-top">
      <img src="../static/img/1_r2_c2.jpg" alt="">
    </div>
    <slot  name="header-center"></slot>
  
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.header {
  width: 100%;
  // height: pxTorem(124px);
  // background: #eee;
  
  .header-center {
    width: 100%;
    height: pxTorem(34px);
    display: flex;
    .iconfont {
      font-size: 32px;
    }
    .xiangzuo {
      @include box_flex;
      @include justify;
      @include align;
      width: pxTorem(46px);
    }
    .sousuo {
      @include box_flex;
      @include justify;
      @include align;
      width: pxTorem(48px);
    }
    .rili {
      @include box_flex;
      @include justify;
      @include align;
      width: pxTorem(22px);
    }
    h4 {
      flex: 1;
      @include box_flex;
      @include justify;
      @include align;
      font-size: 32px;
    }
  }
  .header-top{
    width: 100%;
    height: pxTorem(16px);
    img{
      width: 100%;
      height: 100%;
    }
  }
  
  
}

</style>