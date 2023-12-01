import axios, {InternalAxiosRequestConfig, AxiosResponse} from "axios";
import {ElLoading} from "element-plus";
//请求拦截

let loading: any
const startLoading = () => {
    interface Options {
        lock: boolean;
        text: string;
        background: string;
    }

    const options: Options = {
        lock: true,
        text: '加载中...',
        background: 'rgba(0,0,0,0.7)'
    }
    loading = ElLoading.service(options)
}

const endLoading = () => {
    loading.close()
}
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    startLoading()
    return config
})


//响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
    endLoading()
    return response
}, error => {
    endLoading()
    //错误提示
    return Promise.reject(error)
})

export default axios