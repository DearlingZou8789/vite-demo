import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000
})

//  前置拦截器(发起请求之前的拦截)
axios.interceptors.request.use(
  (response) => {
    //  对config进行处理，比如在headers中添加请求头参数
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

//  后置拦截器(获取到响应时的拦截)
axios.interceptors.response.use(
  (response) => {
    //  对response和error做处理
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(error)
    }
    return Promise.reject(error)
  }
)

export default axios
