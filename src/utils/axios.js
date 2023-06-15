import axios from 'axios'
import { configs } from '@/utils/configs'
import { helpers } from '@/utils/helpers'
import { store } from '@/store'

const HTTP = axios.create({
  baseURL: configs.baseURL,
  timeout: configs.axiosTimeout
})

HTTP.interceptors.request.use((config) => {
  const languageCode = store.getters['translation/getData']?.languageCode || "EN"
  const userToken = store.getters['user/getToken']

  config.headers.AppLanguage = languageCode

  if (userToken && userToken !== '') {
    config.headers.Authorization = `Bearer ${userToken}`
  }
  return config
})


const isValidResponse = (res)=>{
  if(typeof res === 'undefined') return false
  return true
}

const formulateUrl = (apiLink)=>{
  return `${configs.baseURL}${apiLink}`
}

const doneUpload = ()=>{
  store.dispatch('page/setData', { isSubmitting: false })
}

const uploadProgress = ()=>{
  store.dispatch('page/setData', { isSubmitting: true })
}

const uploadError = ()=>{
  store.dispatch('page/setData', { isSubmitting: false })
  helpers.catchError({ Code : "ERR_UPLOAD_ERR", Message : "Upload failed, try again later" })
}

const getHeaders = ()=>{
  const userToken = store.getters['user/getToken']
  return (userToken && userToken !== '') ? { "Authorization" : `Bearer ${userToken}` } : {}
}

/* AXIOS REQUESTS: GET, PSOT have own try catch block so we can add global configs/error catchers in the future */

const get = async (apiLink, query, skipLoading) => {
  try {
    
    if(!skipLoading) store.dispatch('page/setData', { isFetching: true })

    let res = await HTTP.get(`${apiLink}${!helpers.isBlank(query) ? helpers.objToQueryString(query || {}) : ''}`)
    //after get
    store.dispatch('page/setData', { isFetching: false })
    if (res && res.status === 200 && res?.data?.data) {
      return res.data.data
    }
    return null

  } catch (err) {
    store.dispatch('page/setData', { isFetching: false })
    helpers.catchError(err)
  }
}

const post = async (apiLink, post, throwError = true) => {
  try {
    store.dispatch('page/setData', { isSubmitting: true })
    let res = await HTTP.post(apiLink, post)
    //after post
    store.dispatch('page/setData', { isSubmitting: false })
    if (res && res.status === 200 && res?.data?.data) {
      return res.data.data
    }
    return null

  } catch (err) {
    store.dispatch('page/setData', { isSubmitting: false })
    if(throwError) helpers.catchError(err)
    if(!throwError) return { Error : err?.response?.data?.Message }
  }
}

const install = (app) => {
  app.config.globalProperties.$HTTP = HTTP
  app.config.globalProperties.$axios = {
    getHeaders, uploadProgress, uploadError, formulateUrl, doneUpload
  }
}

export { install as default, HTTP as $HTTP, get, post, isValidResponse, formulateUrl, doneUpload }