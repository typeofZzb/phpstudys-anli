<template>
<div class="screen">
    <MyHead>
        <div class="header-center" slot="header-center">
            <div class="iconfont xiangzuo" @click="$router.go(-1)">&#xe614;</div>
            <h4>筛选</h4>
        </div>
    </MyHead>
    <div class="screen_list">
        <div class="screen_item" v-for="item in screenArr" :key=item.id>
            <h3>{{item.title}}</h3>
            <span v-for="v in item.list" :class="{'active':item.ind==v.id}" :key=v.id @click="spanClick(item,v.id)">
                    {{v.title}}
                </span>
        </div>
    </div>
    <div class="screen_foot">
        <div v-for="item in btnArr" :key=item.id :class="{'active':item.id==ind}">{{item.title}}</div>
    </div>
</div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            screenArr: [{
                    title: "级别",
                    id: 0,
                    ind: 2,
                    list: [{
                            title: "直接下属",
                            id: 2
                        },
                        {
                            title: "二级下属",
                            id: 3
                        }
                    ]
                },
                {
                    title: "假期类型",
                    id: 1,
                    ind: 4,
                    list: [{
                            title: "全部",
                            id: 4
                        },
                        {
                            title: "年假",
                            id: 5
                        }, {
                            title: "Carryover年假",
                            id: 6
                        },
                        {
                            title: "病假",
                            id: 7
                        }, {
                            title: "调休假",
                            id: 8
                        },
                        {
                            title: "丧假",
                            id: 9
                        }, {
                            title: "陪产假",
                            id: 10
                        }
                    ]
                }
            ],
            btnArr: [{
                    title: "取消全部选择",
                    id: 0,
                },
                {
                    title: "确认",
                    id: 1,
                }
            ],
            ind: 1
        }
    },
    computed: {

    },
    methods: {
         ...mapActions("user",["getUserInfo"]),
        spanClick(item, id) {
            item.ind = id
            // console.log(item,id)
        }
    },
    created() {
         this.getUserInfo()
    },
    mounted() {

    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.screen {
    .screen_list {
        flex: 1;
        box-sizing: border-box;
        padding: 0 pxTorem(21px);
        .screen_item {
            margin-top: pxTorem(38px);
            h3 {
                line-height: pxTorem(29px);
                font-size: pxTorem(15px);
            }
            span {
                display: inline-block;
                width: 47%;
                background: #F5F5F5;
                height: pxTorem(37px);
                border-radius: pxTorem(2.5px);
                line-height: pxTorem(37px);
                text-align: center;
               font-size: pxTorem(15px);
                margin: pxTorem(10px) pxTorem(8px) pxTorem(10px) 0;
            }
            span.active {
                background: #006341;
                color: #fff;
            }
        }
    }
    .screen_foot {
        width: 100%;
        height: pxTorem(51px); // background: #ccc;
        // box-shadow: -3px 0 10px 0 blue
        box-shadow: pxTorem(-3px) pxTorem(0px) pxTorem(10px) pxTorem(0px) #D4D4D4;
        @include box_flex;
        >div {
              font-size: pxTorem(15px);
            flex: 1;
            @include box_flex;
            @include justify;
            @include align;
            color:#006341;
        }
         .active{
            background:#006341;
            color:#fff; 
        }
    }
}
</style>