<template>
<div class="sort">
    <MyHead>
        <div class="header-center" slot="header-center">
            <h4>排序</h4>
        </div>
    </MyHead>
    <div class="sort_list">
        <div class="sort_item" v-for="item in sortArr" :key=item.id>
            <h3>{{item.title}}</h3>
            <span v-for="v in item.list" :class="{'active':v.id==index}" :key=v.id @click="spanClick(v.id)">
                    {{v.title}}
                </span>
        </div>
    </div>
    <div class="sort_foot">
        <div @click="$router.back()">返回</div>
        <div class="active">确认</div>
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
            sortArr: [{
                    title: "按发起时间排序",
                    id: 0,
                    list: [{
                            title: "按时间倒序",
                            id: 3
                        },
                        {
                            title: "按时间顺序",
                            id: 4
                        }
                    ]
                },
                {
                    title: "按加班日期排序",
                    id: 1,
                    list: [{
                            title: "按日期倒序",
                            id: 5
                        },
                        {
                            title: "按日期顺序",
                            id: 6
                        }
                    ]
                },
                {
                    title: "按加班时数排序",
                    id: 2,

                    list: [{
                            title: "按时数倒序",
                            id: 7
                        },
                        {
                            title: "按时数顺序",
                            id: 8
                        }
                    ]
                }
            ],
            index:3
        }
    },
    computed: {

    },
    methods: {
         ...mapActions("user",["getUserInfo"]),
        spanClick(id) {
            // console.log(id)
           this.index=id
         
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
.sort {
    .sort_list {
        flex: 1;
        box-sizing: border-box;
        padding: 0 pxTorem(21px);
        .sort_item {
            margin-top: pxTorem(38px);
            h3 {
                line-height: pxTorem(29px);
                font-size: 30px;
            }
            span {
                display: inline-block;
                width: 47%;
                background: #F5F5F5;
                height: pxTorem(37px);
                border-radius: 5px;
                line-height: pxTorem(37px);
                text-align: center;
                font-size: 30px;
                margin: pxTorem(10px) pxTorem(8px) pxTorem(10px) 0;
            }
            span.active {
                background: #006341;
                color: #fff;
            }
        }
    }
    .sort_foot {
        width: 100%;
        height: pxTorem(51px); // background: #ccc;
        // box-shadow: -3px 0 10px 0 blue
        box-shadow: pxTorem(-3px) pxTorem(0px) pxTorem(10px) pxTorem(0px) #D4D4D4;
        @include box_flex;
        >div {
             font-size: 30px;
            @include box_flex;
            @include justify;
            @include align;
            color:#006341;
            &:first-child{
                width: pxTorem(100px);
            }
            &:last-child{
                flex: 1;
            }
        }
         .active{
            background:#006341;
            color:#fff; 
        }
    }
}
</style>