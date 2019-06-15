// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./static/scss/common.scss";
import "./utils/flexble"
import "./static/icon/iconfont.css"
import router from "./router"
import Base from "./plugins"
import store from "./store"
import { DatePicker, TimePicker, Timeline, TimelineItem, Card } from 'element-ui';
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Base);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})