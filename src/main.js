import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from '@/router'
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
//Vue.use(BootstrapVue);

