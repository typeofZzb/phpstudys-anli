<template>
<transition name="dialog">
    <div class="dialog" @click=currentFn>
        <div class="cont">
            <router-link to="/application/overtime" tag="p">加班</router-link>
            <router-link to="/application/vacation" tag="p">休假</router-link>
        </div>
    </div>
</transition>
</template>
<script>
export default {
    props: ['clickFn'],
    components: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        currentFn(e) {
            if (e.target === e.currentTarget) {
                console.log(111);
                this.clickFn();
            }
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
.dialog {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 99;
    position: fixed;
    top: pxTorem(16px);
    left: 0;
    >.cont {
        width: 100%;
        height: pxTorem(130px);
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

.dialog-enter,
.dialog-leave-to {
    opacity: 0;
}
.dialog-enter-active {
    transition: opacity 1s ease;
}
.dialog-leave-active {
    transition: opacity 1s ease;
}
.dialog-enter-to {
    opacity: 1;
}



</style>