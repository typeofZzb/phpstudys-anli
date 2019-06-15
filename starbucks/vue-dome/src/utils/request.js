import axios from "axios";
import router from "../router"
const request = axios.create({
    baseURL: "http://192.168.137.1:3000",
    timeout: 1000
});


request.interceptors.request.use((request) => {
    return {
        ...request,
        headers: {
            ...request.headers,
            token: window.localStorage.getItem("token")
        }
    }
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    // console.log(error.response)
    const response = error.response;
    const status = error.response.status;
    // console.log(status,router)
    if (status > 400) {
        switch (status) {
            case 401:
                // alert(response.data.message)
                router.push("/sign")
                break;
            case 404:
                alert("页面走丢了")
                break;
            case 403:
                alert("没有权限")
                break;

        }
    }
    return Promise.reject(error)
})

export default request