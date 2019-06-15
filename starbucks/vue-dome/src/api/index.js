import request from "../utils/request";

export default {
    //查询用户是否登陆
    userInfo: () => request.get("/api/user/info"),
    //用户登陆
    signUserInfo: (data) => request.post("/api/login", data),
    //获取任务列表
    getListData: (data) => request.get("/api/task/list", data),
    //获取加班详情数据
    overtimeDetails: (data) => request.get("/api/apply/overtime", data),
    //获取调休详情
    vacationDetails: (data) => request.get("/api/apply/vacation", data),
    //提交加班
    overtimeSetDetails: (data) => request.post("/api/apply/overtime", data),
    //提交休假
    vacationSetDetails: (data) => request.post("/api/apply/vacation", data),
    //上传图片
    fileImgage: (file) => request.post("/api/upload", file),
    //审批历史
    history: (data) => request.get("/api/task/history", data),
}