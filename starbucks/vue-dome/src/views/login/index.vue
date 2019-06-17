<template>
<div class="login">
    <MyHead></MyHead>
    <div class="login_header">
        <form>
            <i class="iconfont sousuo">&#xe612;</i>
            <input type="text" placeholder="搜索">
        </form>
        <span @click="$router.back()">取消</span>
    </div>
    <div class="login_center">
        <div class="login-title">搜索制定内容</div>
        <div class="login-cont">
            <p v-for="(item) in history" :key="item.id">{{item.title}}</p>
        </div>

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
            history: [{
                    title: "加班类型",
                    id: 1,
                },
                {
                    title: "发起时间",
                    id: 2,
                },
                {
                    title: "加班日期",
                    id: 3,
                },
                {
                    title: "申请单号",
                    id: 4
                },
                {
                    title: "加班时数",
                    id: 5
                }
            ]

        }
    },
    computed: {

    },
    methods: {
         ...mapActions("user",["getUserInfo"]),
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
.login {
    .login_header {
        width: 100%;
        height: pxTorem(32px);
        box-sizing: border-box;
        padding: pxTorem(0px) pxTorem(8px);
        @include box_flex;
        margin: pxTorem(10px) 0;
        form {
            flex: 1;
            background: #F7F7F7;
            @include box_flex;
            i {
                display: inline-block;
                width: pxTorem(24px);
                font-size: pxTorem(15px);
                color: #C5C6CA;
                @include box_flex;
                @include justify;
                @include align;
            }
            input {
                flex: 1;
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                background: transparent;
                font-size: pxTorem(15px);
                color: #C5C6CA
            }
        }
        span {
            @include box_flex;
            @include justify;
            @include align;
            width: pxTorem(44px);
            color: #89AFA2;
        }
    }
    .login_center {
        width: 100%;
        margin-top: pxTorem(25px);
        box-sizing: border-box;
        padding: pxTorem(0px) pxTorem(10px);
        .login-title {
            color: #dadada;
            text-align: center;
            font-size: pxTorem(14px);
            margin:  pxTorem(15px) 0;
        }
        .login-cont{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        >p{
            width: 33%;
            height: pxTorem(20px);
            border-right:1px solid #ccc;
            text-align: center;
            margin-top:pxTorem(30px);
            color:#0b6242;
            &:nth-child(3),&:nth-child(5){
                border:0;
            }
        }
    }

    }
}
</style>