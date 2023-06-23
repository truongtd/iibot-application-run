import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import PrimeVue from 'primevue/config'
import Router from './router/index'
const pinia= createPinia()
createApp(App)
    .use(Router)
    .use(Antd)
    .use(pinia)
    .use(PrimeVue)
    .mount('#app')