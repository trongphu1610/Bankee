import axios, { InternalAxiosRequestConfig } from 'axios'

/**
 * configureAxios
 */
export function configureAxios() {
  if (process.env.REACT_APP_API_URL) {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
  }
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
      // Do something before request is sent
      config.headers = config.headers ?? {}
      // Example Get token from store and add to header for each request
      // let authToken = store.getState().session.token
      // if (authToken) {
      //   config.headers['Authorization'] = `Bearer ${authToken}`
      // }
      return config
    },
    function (error: string) {
      // Do something with request error
      return Promise.reject(error)
    },
  )
}
