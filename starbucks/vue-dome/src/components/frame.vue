<template>
    <div  v-if="open" class="frame">
        {{text}}
    </div>
</template>
<script>
export default {
    props:["text"],
    components:{

    },
    data(){
        return {
            timer:null,
            open:true
        }
    },
    
    mounted(){
         this.timer=setTimeout(() => {
             this.open=false
        }, 3000)
    },
    destroyed(){
        clearTimeout( this.timer)
    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.frame{
    padding: pxTorem(10px) pxTorem(20px);
    position: fixed;
    background: rgba(0,0,0,.6);
    color:#fff;
    left: 50%;
    top: 50%;
    font-size: pxTorem(18px);
    transform: translate(-50%,-50%)
}
</style>