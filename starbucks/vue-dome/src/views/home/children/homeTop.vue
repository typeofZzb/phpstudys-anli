<template>
    <ul class="header-foot">
        <li  v-for="(item,index) in list" :key=index :class="{active:index==ind}"
            @click="TabFn(index,item.status)"
        >
                <i class="iconfont iconfonts" v-html=item.icon></i>
                <p class="title">{{item.title}}</p>
            </li>
    </ul>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
             list: [{
                    title: "待处理",
                    icon: "&#xe62e;",
                    status:0

                },
                {
                    title: "已发起",
                    icon: "&#xe63e;",
                     status:1

                },
                {
                    title: "已处理",
                    icon: "&#xe631;",
                     status:2

                }
            ],
            ind:0
        }
    },
    computed:{

    },
    methods:{
        TabFn(index,status){
            this.ind=index
            this.$emit("change",status)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
.header-foot{
    height: pxTorem(72px);
     @include box_flex;
     list-style: none;
     li{
       flex: 1;

        @include box_flex;
      @include justify;
      @include align;
      @include direction(column);
      color: #DBDBDB;
      font-size: 35px;
     }
     .active{
       color:#0A6141;
     }
  }
</style>