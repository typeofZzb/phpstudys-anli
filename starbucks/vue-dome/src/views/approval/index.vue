<template>
<div class="approval">
    <MyHead>
        <div class="header-center" slot="header-center">
            <div class="iconfont xiangzuo" @click="$router.go(-1)">&#xe614;</div>
            <h4>审批历史</h4>
        </div>
    </MyHead>
    <div class="approval-username"></div>
    <div class="approval-content">
        <div class="approval-meg">
            <div>
                <p>
                    <span>申请人 <b>{{name}}</b></span>
                    <span>员工职务 <b>P2</b></span>

                </p>
                <p>
                    <span>部门 <b>星巴克营运部</b></span>
                    <span>员工编号 <b>06060606</b></span>
                </p>
            </div>
        </div>

        <div class="approval-reason">
            <el-timeline v-if="data">
                <el-timeline-item v-for="(item,index) in data" :key=index :timestamp="new Date().toLocaleDateString()" placement="top" size='large'>
                    <el-card>
                        <span>
                            <img :src="item.avatar" alt="">
                        </span>
                        <div>
                            <h4>{{item.nickname}}</h4>
                            <p>审批意见：{{item.remark}}</p>
                        </div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            <div v-else>暂无审批历史</div>
        </div>
    </div>
</div>
</template>
<script>
import api from "@/api"
import {
    mapActions
} from "vuex"
export default {
    props: ["id", "name"],
    components: {

    },
    data() {
        return {
            data: []
        }
    },
    computed: {

    },
    methods: {
        ...mapActions("user", ["getUserInfo"]),
        getHistory() {
            //   console.log(this.id)
            api.history({
                params: {
                    applicationNumber: this.id
                }
            }).then(res => {
                console.log(res.data)
                this.data = res.data;
            })
        }
    },
    created() {
        this.getHistory()
        this.getUserInfo()
    },
    mounted() {

    }
}
</script>
<style lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.approval {
    background: #F7F7F7;
    .header {
        color: #fff;
        background: #0B6242;
        box-sizing: border-box;
        border-bottom: 1px solid #0B6242;
    }
    .approval-username {
        width: 100%;
        color: #fff;
        background: #0B6242;
        height: pxTorem(75px);
        border-radius: 0 0 pxTorem(15px) pxTorem(15px);
    }
    .approval-content {
        width: 94%;
        margin-left: 3%;
        margin-top: pxTorem(-25px);
        flex: 1;
        overflow: auto;
        .approval-meg {
            width: 100%;
            background: #fff;
            height: pxTorem(74px);
            border-radius: pxTorem(8px);
            box-sizing: border-box;
            overflow: hidden;
            padding: pxTorem(14px) pxTorem(12px);
            >div {
                width: 100%;
                height: 100%;
                @include box_flex;
                p {
                    &:nth-child(1),
                    &:nth-child(2) {
                        flex: 1;
                        overflow: hidden;
                        @include box_flex;
                        flex-direction: column;
                        span {
                            font-size: pxTorem(10px);
                            display: block;
                            width: 100%;
                            color: #C5C5C5;
                            box-sizing: border-box;
                            b {
                                color: #4A4A4A;
                                padding-left: pxTorem(10px);
                            }
                            &:first-child {
                                margin-bottom: pxTorem(14px);
                            }
                        }
                    }
                }
            }
        }
        .approval-reason {
            width: 100%;
            margin-top: pxTorem(16px);
            box-sizing: border-box;
            padding: 0 pxTorem(10px); // background: #fff;
            border-radius: pxTorem(8px);
            .el-timeline-item__timestamp.is-top {
                font-size: pxTorem(16px);
                padding-left: pxTorem(16px);
            }
            .el-timeline-item__node {
                transform: scale(2)
            }
            .el-card__body {
                display: flex;
                font-size: pxTorem(16px);
                span {
                    display: inline-block;
                    width: pxTorem(40px);
                    height: pxTorem(40px);
                    border-radius: 50%;
                    overflow: hidden;
                    // background: red;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                div {
                    padding-left: pxTorem(20px);
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
}
</style>