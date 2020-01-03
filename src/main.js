import Vue from 'vue'

import app from './App.vue'

import mintUI from 'mint-ui'
Vue.use(mintUI)
import { Header } from 'mint-ui';
import 'mint-ui/lib/header/style.css'
Vue.component(Header.name, Header);

import './lib/mui-master/dist/css/mui.min.css'
var vm = new Vue({
        el:"#app",
        data:{},
        methods:{

        },
        render:e=>e(app)
})