import Vue from 'vue'

import app from './App.vue'

import mintUI from 'mint-ui'
Vue.use(mintUI)

import 'mint-ui/lib/style.css'
/* import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui';
Vue.use(Lazyload);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
 */
import mui from './lib/js/mui.min.js'
Vue.prototype.mui = mui
import './lib/css/mui.css'
import './lib/css/icons-extra.css'
import './lib/js/webviewGroup.js'

import moment from 'moment'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:8080/vue/'
Vue.http.options.emulateJSON = true

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import Vuex from 'vuex'
Vue.use(Vuex)


Vue.filter('dateFormat',function(dateStr,patten="YYYY-MM-DD HH:mm:ss"){
        return moment(dateStr).format(patten)
})

var car = JSON.parse(localStorage.getItem('car')||'[]')
var store = new Vuex.Store({
        state:{
                car:car,
        },
        mutations:{
                addToCar(state,goodsinfo){
                        var flag = false
                        state.car.some((item,index)=>{
                                if(item.id == goodsinfo.id){
                                        item.count += parseInt(goodsinfo.count)
                                        item.price = goodsinfo.price
                                        flag = true
                                        return true
                                }
                        })
                if (!flag){
                        state.car.push(goodsinfo)
                }
               localStorage.setItem('car',JSON.stringify(state.car))
                },
                update(state,goodsinfo){
                        state.car.some(item=>{
                                if(item.id == goodsinfo.id){
                                        item.count = parseInt(goodsinfo.count)
                                        return true
                                }
                        })
                localStorage.setItem('car',JSON.stringify(state.car))                    
                },
                delete(state,goodsinfo){
                        state.car.some((item,index)=>{
                                if(item.id == goodsinfo.id){
                                        state.car.splice(index,1)
                                        return true
                                }
                        })
                        localStorage.setItem('car',JSON.stringify(state.car))   
                },
                selectedUpdate(state,goodsinfo){
                        state.car.some((item,index)=>{
                                if(item.id == goodsinfo.id){
                                        item.selected = goodsinfo.switch
                                        return true
                                }
                        })
                        localStorage.setItem('car',JSON.stringify(state.car))   
                },
                
        },
        getters:{
                getAllCount(state){
                        var goodsnbm = 0
                        state.car.forEach((item,index)=>{
                                goodsnbm +=item.count
                        })
                        return goodsnbm
                },
                
                getGoodId(state){
                        var o = {}
                        state.car.forEach(item=>{
                            o[item.id] = item.count
                        })
                        return o
                    },
                    getGoodsSlected(state){
                           var o = {}
                           state.car.forEach((item,index)=>{
                                o[item.id] = item.selected
                           } )
                           return o
                    },
                    getGoodsCountAndAmount(state){
                            var o = {count:0,amount:0}
                            state.car.forEach((item,index)=>{
                                 if(item.selected === true) {
                                         o.count += item.count
                                         o.amount += item.count*item.price
                                 }
                            })
                            return o
                    }
        },
        action:{
                /* //这是处理异步的api接口，Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。！感觉这里的context省略了
                incrementAsync ({ commit },data) {//可以执行异步操作
                setTimeout(() => {
                    commit('increment',data)
                }, 1000)
            }
            通过调用this.$store.dispatch('incrementAsync');
        } */
        }
})

var vm = new Vue({
        el:"#app",
        data:{},
        methods:{
                
        },
        render:e=>e(app),/* function(createElements){return createElements(app)}的简写在左边 */
        router:router,
        store:store

})

