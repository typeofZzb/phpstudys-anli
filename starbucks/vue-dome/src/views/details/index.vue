<template>
<div class="details">
    <MyHead>
        <div class="header-center" slot="header-center">
            <div class="iconfont xiangzuo" @click="$router.go(-1)">&#xe614;</div>
            <h4>{{type=="overtime" ? "办公室加班申请表" :"办公室休假申请表"}}</h4>
        </div>

    </MyHead>
    <div class="username">
        <dl>
            <dt>
                <img :src="detailsData.avatar" alt="">
            </dt>
            <dd>
                <span>申请人姓名</span>
                <span>直接主管</span>
                <span>申请单号</span>
                <span>发起时间</span>
            </dd>
            <dd>
                <span>{{detailsData.nickname}}</span>
                <span>秦义超</span>
                <span>{{detailsData.applicationNumber}}</span>
                <span>{{toTime}}</span>
            </dd>
            <dd>
                <span>&gt;</span>
            </dd>
        </dl>
    </div>
    <div class="content">
        <div class="meg">
            <h3>申请信息</h3>
            <p>
                <span>{{typeName}}日期<i>*</i></span>
                <span>{{toTime}}</span>
            </p>
            <p>
                <span>{{typeName}}类型<i>*</i></span>
                <span>{{detailsData.list_type==='overtime' ? '工作日加班' : '休假'}}</span>
            </p>
            <p>
                <span>{{typeName}}起始时间<i>*</i></span>
                <span>{{toStrings}}</span>
            </p>
            <p>
                <span>{{typeName}}截止时间<i>*</i></span>
                <span>{{toStrings}}</span>
            </p>
            <p>
                <span>共计时数<i>*</i></span>
                <span>{{times}}</span>
            </p>
        </div>
        <div class="reason">
            <h3>{{typeName}}事由</h3>
            <p>
                {{detailsData.describes}}
            </p>
        </div>
        <div class="reason">
            <h3>附件</h3>
            <p>
                <span class="img" v-for="(item,i) in detailsData.annex" :key=i>
                    <img :src="'http://localhost:3000'+item" alt="">
                </span>
            </p>
        </div>
    </div>
    <footer class="footer">
        <span 
            @click="$router.push({
                name:'approval',
                params:{
                    name:detailsData.nickname,
                    id:detailsData.applicationNumber
                }
            })"
            >
            审批历史
        </span>
        <p class="quit" @click="$router.back()">退出</p>
        <p class="argee">同意</p>
    </footer>
</div>
</template>
<script>
import api from "@/api"
import {
    mapActions
} from "vuex"
export default {
    props: {
        type: String,
        id: String
    },
    components: {

    },
    data() {
        return {
            detailsData: {}
        }
    },
    computed: {
        typeName(){
            return this.type=="overtime" ?"加班" :"休假"
        },
        toTime() {
            return new Date(this.detailsData.startTime).toLocaleDateString();
        },

        times() {
            let newTime = new Date(this.detailsData.endTime) - new Date(this.detailsData.startTime);
            let days = parseInt(newTime / 1000 / 60 / 60 / 24);
            let hours = parseInt((newTime / 1000 / 60 / 60) % 24);
            return days + '.' + hours + '天'
        },
        toStrings(){
        return new Date(this.detailsData.startTime).toLocaleString()
    },
    },
    methods: {
        ...mapActions("user", ["getUserInfo"]),
        getDetailsData() {
            //  console.log(api[this.type+"Details"]())
            api[this.type + "Details"]({
                params: {
                    applicationNumber: this.id
                }
            }).then(res => {
                this.detailsData = res.data;
                console.log(res.data)
            })
        },
    },
    created() {
        // console.log(this.$route)
        this.getUserInfo()
        this.getDetailsData()
    },
    mounted() {

    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.details {
    background: #F7F7F7;
    .header {
        color: #fff;
        background: #0B6242;
        box-sizing: border-box;
        border-bottom: 1px solid #0B6242;
    }
    .username {
        width: 100%;
        color: #fff;
        background: #0B6242;
        height: pxTorem(130px);
        border-radius: 0 0 pxTorem(15px) pxTorem(15px);
        box-sizing: border-box;
        overflow: hidden;
        padding: pxTorem(14px) pxTorem(15px);
        dl {
            width: 100%;
            height: 100%;
            @include box_flex;
            dt {
                width: pxTorem(42px);
                height: pxTorem(42px);
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            dd {
                &:nth-child(2),
                &:nth-child(3) {
                    flex: 1;
                    span {
                        font-size: pxTorem(14px);
                        display: block;
                        color: #B1E8D5;
                        padding: 0 0 pxTorem(5px) pxTorem(15px)
                    }
                }
                &:nth-child(4) {
                    width: pxTorem(30px);
                }
            }
        }
    }
    .content{
    width: 94%;
    margin-left: 3%;
    margin-top: pxTorem(-18px);
    flex: 1;
    overflow: auto;
    .meg{
        width: 100%;
        background: #fff;
        border-radius: pxTorem(8px);

        h3{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
        }
        >p{
            width: 94%;
            height: pxTorem(40px);
            margin-left: 3%;
            display: flex;
            justify-content: space-between;
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            span:nth-child(1){
                color: #A6A6A6;
                i{
                    color: red;
                }
            }
        }
    }
    .reason{
        width: 100%;
        margin-top: pxTorem(16px);
        background: #fff;
        border-radius: pxTorem(8px);
        h3{
            width: 94%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
            margin-left: 3%;
        }
        >p{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(60px);
            font-size: pxTorem(14px);
            padding-top: pxTorem(3px);
            .img {
                    float: left;
                    display: inline-block;
                    width: pxTorem(80px);
                    height: pxTorem(80px);
                    margin: 0 pxTorem(15px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
        }

    }
}
.footer{
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    line-height: pxTorem(50px);
    font-size: pxTorem(14px);
    span{
        width: pxTorem(80px);
        height: 100%;
        text-align: center;

    }
    p{
        flex: 1;
        text-align: center;
    }
    .quit{
        background: #404A53;
        color: #fff
    }
    .argee{
        background: #0b6242;
        color: #fff;
    }
}
.bg{
    background: #F6F6F6;
    display: flex;
    flex-direction: column;
}
}
</style>