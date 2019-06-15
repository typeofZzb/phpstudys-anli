import MyHead from "@/components/header"
import MyChildren from "@/components/children"
import MyList from "@/components/list"
import MyFrame from "@/components/frame"

export default {
    install(Vue) {
        Vue.component("MyHead", MyHead)
        Vue.component("MyChildren", MyChildren)
        Vue.component("MyList", MyList)
        let Frame = Vue.extend(MyFrame);
        Vue.prototype.$alert = (text) => {
            let ElasticFrame = new Frame({
                propsData: {
                    text
                }
            })
            ElasticFrame.$mount()
            console.log(ElasticFrame.$el)
            document.body.appendChild(ElasticFrame.$el)
        }

    }
}