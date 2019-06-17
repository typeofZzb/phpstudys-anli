<template>
<div class="main-item">
    <div class="contentTab">
        <ul >
          <li v-for="(item,index) in spanArr" :key=index :class="{'liActive':index==ind}"
            @click="spanFn(index,item.type)"
          >{{item.title}}</li>
        </ul>
        <p>
            <i class="iconfont piling"  @click.self="$router.push('screen')">&#xe62b;</i>
            <i class="iconfont paixu" @click.self="SortFn">&#xe736;</i>
        </p>
    </div>
    <div class="contentList">
        <MyList v-for="(item,index) in listdata" :key=index :item=item :index=index></MyList>
        
        <div class="btn" @click="dialogFn">
            <i class="iconfont jia">&#xe62b;</i> 发布任务
        </div>
    </div>
    <Dialog v-show="open" :clickFn="closeFn"/>
</div>
</template>
<script>
import Dialog from "../components/Dialog"
export default {
    props: ["listdata"],
    components: {
        Dialog
    },
    data() {
        return {
            open:false,
            spanArr:[
                {
                    title:"加班",
                    type:"overtime"
                },
                 {
                    title:"休假",
                    type:"vacation"
                }
            ],
            ind:0
        }
    },
    computed: {

    },
    methods: {
        SortFn() {
            this.$router.push({
                name: "sort"
            })
        },
        dialogFn(){
            this.open=true;
        },
        closeFn(){
            this.open=false;
        },
        spanFn(index,type){
            this.ind=index;
            this.$emit("changType",type)
            // console.log(type)
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.main-item {
    background: #F6F6F6;
    width: 100%;
    height: 100%;
    @include box_flex;
    @include direction(column);
    .contentTab {
        box-shadow: 0 pxTorem(5px) pxTorem(13px) 0 #e6e6e6;
        width: 100%;
        height: pxTorem(80px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        p {
            position: absolute;
            top: 40%;
            right: 5%;
            .iconfont {
                font-size: pxTorem(14px);
                padding-left: pxTorem(5px);
            }
        }
        ul {
            width: 60%;
            border: 2px solid green;
            border-radius: pxTorem(20px);
            height: pxTorem(30px);
            display: flex;
            overflow: hidden;
            li {
                width: 100%;
                line-height: pxTorem(30px);
                height: 100%;
                flex: 1;
                text-align: center;
            }
            .liActive {
                background-color: green;
                color: #fff;
            }
        }
    }
    .contentList {
        flex: 1;
        overflow: auto;
        position: relative;
        .btn {
            position: fixed;
            height: pxTorem(46px);
            width: pxTorem(126px);
            right: pxTorem(20px);
            bottom: pxTorem(24px);
            background: #096242;
            font-size: pxTorem(15px);
            color: #fff;
            border-radius: pxTorem(23px);
            @include box_flex;
            @include justify;
            @include align;
            i{
                padding-right: pxTorem(5px);
            }
        }
    }
}
</style>