import api from "@/api";
export default {
    namespaced: true,
    state: {
        userInfo: {}
    },
    actions: {
        getUserInfo({ commit }) {

            api.userInfo().then(res => {
                // console.log(res)
                commit("SetUserInfo", res.data)
            })
        }
    },
    mutations: {
        SetUserInfo(state, data) {
            state.userInfo = data;
            console.log(state.userInfo)
        }
    }
}