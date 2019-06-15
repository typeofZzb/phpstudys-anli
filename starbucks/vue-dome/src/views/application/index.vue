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
                <img :src="userInfo.avatar" alt="">
            </dt>
            <dd>
                <span>申请人姓名</span>
                <span>直接主管</span>

            </dd>
            <dd>
                <span>
                   {{userInfo.nickname}} 
                </span>
                <span>秦义超</span>

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
                <span>
                    <el-date-picker
                        format="yyyy-MM-dd"
                        v-model="date"
                        :placeholder="new Date().toLocaleDateString()"
                    />
                </span>
            </p>
            <p>
                <span>{{typeName}}类型<i>*</i></span>
                <span>
                     <select  v-model="detailsData.type" class="type">
                        <option :value='item.id' v-for="item in this[type+'Types']" :key="item.id">{{item.title}}</option>
                    </select>
                </span>
            </p>
            <p>
                <span>{{typeName}}起始时间<i>*</i></span>
                <span>
                   <el-time-picker v-model="detailsData.startTime" format="HH:MM"/>
                </span>
            </p>
            <p>
                <span>{{typeName}}截止时间<i>*</i></span>
                <span>
                     <el-time-picker v-model="detailsData.endTime" format="HH:MM" @change="getendTime"/>
                </span>
            </p>
            <p>
                <span>共计时数<i>*</i></span>
                <span>
                    {{times}}
                </span>
            </p>
        </div>
        <div class="reason">
            <h3>{{typeName}}事由</h3>
            <p>
                <textarea v-model="detailsData.describe"></textarea>
            </p>
        </div>
        <div class="reason">
            <h3>附件</h3>
            <p>
                <span class="img" v-for="(item,i) in imgArr" :key=i>
                    <img :src="'http://localhost:3000'+item" alt="">
                    
                </span>
                <span class="file">
                    <input type="file" ref="fileBtn" @change="fileFn">
                </span>
            </p>
        </div>
    </div>
    <footer class="footer">
        <p class="quit" @click="$router.back()">取消</p>
        <p class="argee" @click="submit">提交</p>
    </footer>
</div>
</template>
<script>
import api from "@/api"
import fileFn from "@/utils/file"
import {
    mapActions,
    mapState
} from "vuex"
export default {
    props: {
        type: String,

    },
    components: {

    },
    data() {
        return {
            detailsData: {
                annex: [],
                describe: "",
                endTime: "",
                startTime: "",
                type: ""
            },
            date: "",
            value2: "",
            overtimeTypes: [{
                    title: "双休日加班",
                    id: 1
                },
                {
                    title: "节假日加班",
                    id: 2
                },
                {
                    title: "工作日加班",
                    id: 3
                }
            ],
            vacationTypes: [{
                    title: "年假",
                    id: 1
                },
                {
                    title: "调休",
                    id: 2
                }
            ],
            imgArr: [],
            times: null,
        }
    },
    computed: {
        ...mapState("user", ["userInfo"]),
        typeName() {
            return this.type == "overtime" ? "加班" : "休假"
        }
    },
    methods: {
        ...mapActions("user", ["getUserInfo"]),

        getDetailsData(data) {
            // console.log( api[this.type + "SetDetails"])
            api[this.type + "SetDetails"](data).then(res => {
                this.$alert(res.msg)
                this.$router.back()
            })
        },
        fileFn(e) {
            const files = this.$refs.fileBtn.files[0];
            // console.log(files)
            let FileFn = new fileFn({
                file: files,
                type: ["jpg", "png", "svg", "jpeg", "gif"],
                size: 1
            });
            if (FileFn.isSize() && FileFn.isType()) {
                let formData = new FormData()
                formData.append("file", files)
                api.fileImgage(formData).then(res => {
                    this.imgArr.push(res.url)
                    this.detailsData.annex = this.imgArr;
                })
            } else {
                this.$alert("格式/大小不对");
            }
        },
        getendTime() {
            let n =
                new Date(this.detailsData.endTime).getTime() - new Date(this.detailsData.startTime).getTime();
            if (n < 0) {
                this.$alert("您的操作不合法");
                return;
            }
            this.times = (n / 1000 / 3600).toFixed(1) + "小时";
        },
        submit() {
            console.log(this.detailsData)
            if(this.detailsData.endTime !=="" && this.detailsData.startTime!=="" && this.detailsData.describe){
                this.getDetailsData(this.detailsData)
            }else{
                this.$alert("理由/时间请选择")
            }
        }

    },
    created() {
        // console.log(this.$route)
        this.getUserInfo()
        // this.getDetailsData()
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
                    overflow: hidden;
                    span {
                        font-size: pxTorem(14px);
                        display: block;
                        width: 100%;
                        color: #B1E8D5;
                         box-sizing: border-box;
                        padding: 0 0 pxTorem(5px) pxTorem(15px);
                    }
                }
                &:nth-child(4) {
                    width: pxTorem(30px);
                }
            }
        }
    }
    .content {
        width: 94%;
        margin-left: 3%;
        margin-top: pxTorem(-25px);
        flex: 1;
        overflow: auto;
        .meg {
            width: 100%;
            background: #fff;
            border-radius: pxTorem(8px);
            h3 {
                width: 94%;
                margin-left: 3%;
                height: pxTorem(40px);
                line-height: pxTorem(40px);
                font-size: pxTorem(14px);
                border-bottom: 1px solid #eee;
            }
            >p {
                width: 94%;
                height: pxTorem(40px);
                margin-left: 3%;
                display: flex;
                justify-content: space-between;
                line-height: pxTorem(40px);
                font-size: pxTorem(14px);
                span:nth-child(1) {
                    color: #A6A6A6;
                    i {
                        color: red;
                    }
                }
                .type {
                    width: pxTorem(100px);
                    height: pxTorem(30px);
                    font-size: pxTorem(12px);
                }
            }
        }
        .reason {
            width: 100%;
            margin-top: pxTorem(16px);
            background: #fff;
            border-radius: pxTorem(8px);
            h3 {
                width: 94%;
                height: pxTorem(40px);
                line-height: pxTorem(40px);
                font-size: pxTorem(14px);
                border-bottom: 1px solid #eee;
                margin-left: 3%;
            }
            >p {
                width: 94%;
                margin-left: 3%;
                min-height: pxTorem(60px);
                font-size: pxTorem(14px);
                padding-top: pxTorem(3px);
                >textarea {
                    width: 94%;
                    margin-left: 3%;
                    height: pxTorem(60px);
                    font-size: pxTorem(14px);
                    padding-top: pxTorem(3px);
                }
                .file {
                    display: inline-block;
                    width: pxTorem(80px);
                    height: pxTorem(80px);
                    margin-left:  pxTorem(15px);
                    background: #eee url("../../static/img/pic1.png") no-repeat center;
                    input {
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                    }
                }
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
    .footer {
        width: 100%;
        height: pxTorem(50px);
        display: flex;
        line-height: pxTorem(50px);
        font-size: pxTorem(14px);
        p {
            text-align: center;
            &:first-child {
                width: pxTorem(100px);
            }
            &:last-child {
                flex: 1;
            }
        }
        .quit {
            background: #404A53;
            color: #fff
        }
        .argee {
            background: #0b6242;
            color: #fff;
        }
    }
    .bg {
        background: #F6F6F6;
        display: flex;
        flex-direction: column;
    }
}
</style>