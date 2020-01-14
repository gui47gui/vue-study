
import VueRouter from 'vue-router'

import Home from './components/tabbar/HomeComponent.vue'
import MemberContainer from './components/tabbar/MemberContainerComponent.vue'
import Shopcar from './components/tabbar/ShopcarComponent.vue'
import SeachContainer from './components/tabbar/SeachContainerComponent.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'
import GoodList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
        routes:[
                {path:'/',redirect:'/tabbar'},
                {path:'/tabbar',component:Home},
                {path:'/tabbar-with-chat',component:MemberContainer},
                {path:'/tabbar-with-contact',component:Shopcar},
                {path:'/tabbar-with-map',component:SeachContainer},
                {path:'/home/newslist',component:NewsList},
                {path:'/home/newsinfo/:id',component:Newsinfo},
                {path:'/home/photoList',component:PhotoList},
                {path:'/home/photoinfo/:id',component:PhotoInfo},
                {path:'/home/goodslist',component:GoodList},
                {path:'/home/goodsInfo/:id',component:GoodsInfo},
                {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
                {path:'/home/goodscomment/:id',component:GoodsComment,name:'goodscomment'},
        ],
        scrollBehavior (to, from, savedPosition) {
                if (savedPosition) {
                    return savedPosition
                } else {
                    return { x: 0, y: 0 }
                }
            },
        linkActiveClass:'mui-active'  /* 覆盖默认的路由高亮的类，默认的类叫做 router-link-active */
})

export default router