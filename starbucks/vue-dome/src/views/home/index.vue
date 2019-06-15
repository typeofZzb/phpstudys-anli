<template>
<div class="wrap">
    <MyHead>
        <div class="header-center" slot="header-center">
            <div class="iconfont xiangzuo" @click="$router.go(-1)">&#xe614;</div>
            <h4>加班/休假</h4>
            <i class="iconfont rili">&#xe666;</i>
            <div class="iconfont sousuo" @click="$router.push('login')">&#xe612;</div>
        </div>
    </MyHead>
    <HomeTop @change="navFn"></HomeTop>
    <div class="main">
        <Children @changType="tableType" :listdata=listdata></Children>
    </div>
</div>
</template>
<script>
import HomeTop from "./children/homeTop"
import Children from "../../components/children"
import api from "@/api"
// console.log(request)
import {mapActions} from "vuex"
export default {
    name:"home",
    props: {

    },
    components: {
        HomeTop,
        Children
    },
    data(){
        return {
            listdata:[],
            listparams:{
                page:1,
                pageSize:5,
                create_at:0,
                type:"overtime",
                status:0
            }
        }
    },
    methods:{
        ...mapActions("user",["getUserInfo"]),
        navFn(index){
            this.ind=index;
            // this.listparams.type='overtime';
            this.listparams.status = index;
            this.getstatus();
        },
        tableType(type){
            this.listparams.type=type;
            this.getstatus();
        },
        getstatus(){
            api.getListData({
                params:this.listparams
            }).then(res=>{
                this.listdata = res.data
                // console.log(this.listdata,'----list')
            })
        },
        
    },

    created() {
        this.getUserInfo()
        this.getstatus()
    },
    mounted() {

    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.main {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #F3F3F3;
}
</style>