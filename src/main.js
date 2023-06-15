import { createApp } from 'vue'
import App from './App.vue'
import utils from '@/utils'

const mainApp = createApp(App)
utils(mainApp)

import router from "@/router";
import Notifications from '@kyvg/vue3-notification'

mainApp.use(Notifications)
mainApp.use(router);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/fontawesome-free/css/all.min.css";
import "@/assets/css/styles.css";
mainApp.use(ElementPlus)

// VUEX Store
import store from '@/store/index.js'
mainApp.use(store)

mainApp.mount('#app')