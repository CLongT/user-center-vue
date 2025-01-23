import axios from "axios";
// 创建 Axios 实例
const myAxios = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    withCredentials: true,
});
// 添加请求拦截器
myAxios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
//  添加响应拦截器
myAxios.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        console.log(response);
        return response;
        const {data} = response;
        console.log(data);
//   未登录
        if (data.code === 40100) {
            // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
            if (!response.request.responseURL.includes("user/current") &&
                !window.location.pathname.includes("login")) {
                window.location.href = `/user/login?redirect=${window.location.href}`;
            }
        }
        return response;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
export default myAxios;