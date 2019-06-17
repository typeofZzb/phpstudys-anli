<template>
<div class="item" @click="detailsFn(item.applicationNumber,item.list_type)">
    <p>
        <span>{{item.applicationNumber}}</span>
        <span>待审批</span>
    </p>
    <p>
        <span>申请人 <b>{{item.nickname}}</b></span>
        <span>加班类型 <b>工作日加班</b></span>
    </p>
    <p>
        <span>加班日期 <b>{{toTime}}</b></span>
        <span>加班时数 <b>{{times}}</b></span>
    </p>
</div>
</template>
<script>
export default {
    props: ["item", "index"],
    components: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        detailsFn(id, type) {
            this.$router.push({
                name: "details",
                params: {
                    type,
                    id
                }
            })
            console.log(id, type)
        },
        
    },
    computed:{
        
        toTime() {
            return new Date(this.item.startTime).toLocaleDateString();
        },

        times() {
            let newTime = new Date(this.item.endTime) - new Date(this.item.startTime);
            let days = parseInt(newTime / 1000 / 60 / 60 / 24);
            let hours = parseInt((newTime / 1000 / 60 / 60) % 24);
            return days + '.' + hours + '天'
        },
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
.item {
    width: 100%;
    height: pxTorem(120px);
    background: #FFFFFF;
    margin-bottom: pxTorem(11px);
    box-sizing: border-box;
    padding: 0 pxTorem(18px);
    font-size: pxTorem(13px);
    p {
        span {
            color: #BEBEBE;
            b {
                padding-left: pxTorem(16px);
                color: #000;
            }
        }
        &:first-child {
            padding: pxTorem(16px) 0;
            display: flex;
            justify-content: space-between;
        }
        &:nth-child(2),
        &:nth-child(3) {
            padding: pxTorem(7px) 0;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>