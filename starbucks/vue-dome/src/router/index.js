import Vue from "vue";
import VueRouter from "vue-router";

const Home = () =>
    import ("../views/home/index")
const Login = () =>
    import ("../views/login/index")
const Screen = () =>
    import ("../views/screen/index")
const Sign = () =>
    import ("../views/Sign/index")
const Sort = () =>
    import ("../views/sort/index")
const Details = () =>
    import ("../views/details/index")
const Application = () =>
    import ("../views/application/index")
const Approval = () =>
    import ("../views/approval/index")
Vue.use(VueRouter);

const routes = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            meta: {
                title: "加班/休假"
            },
            component: Home,


        },
        {
            path: "/login",
            name: "login",
            meta: {
                title: "登录"
            },
            component: Login
        },
        {
            path: "/screen",
            name: "screen",
            meta: {
                title: "筛选"
            },
            component: Screen
        },
        {
            path: "/sign",
            name: "sign",
            meta: {
                title: "登录"
            },
            component: Sign
        },
        {
            path: "/sort",
            name: "sort",
            meta: {
                title: "排序"
            },
            component: Sort
        },
        {
            path: "/details/:type/:id",
            name: "details",
            meta: {
                title: "详情"
            },
            props: true,
            component: Details
        },
        {
            path: "/application/:type",
            name: "application",
            meta: {
                title: "申请表"
            },
            props: true,
            component: Application
        },
        {
            path: "/approval/:name/:id",
            name: "approval",
            meta: {
                title: "审批历史"
            },
            props: true,
            component: Approval
        }
    ]
})

export default routes;

routes.beforeEach((to, from, next) => {
    // console.log(to)
    document.title = to.meta.title;
    next()
})