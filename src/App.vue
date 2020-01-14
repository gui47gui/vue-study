<template>
<div class = "app-container"> 
    <mt-header fixed title="这是我的项目" >
        <span slot="left" @click="goBack" v-show="$route.path === '/tabbar'?false:true">
            <mt-button icon="back">返回</mt-button>
        </span>
    </mt-header>
    <transition name="component">
        <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab" >
        <router-link class="mui-tab-item1" router-link-active to="/tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/tabbar-with-chat">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/tabbar-with-contact">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart" ><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/tabbar-with-map">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</div>
</template>



<script>
   export default {
       data(){
           return {
               
           }
       },
       methods:{
           goBack(){
               this.$router.go(-1)
           },
       },
        watch:{
            
        }
   }
</script>

<style lang="scss" scoped>
    .app-container{
        padding-top:40px;
        padding-bottom:50px;
        overflow-x: hidden;
    }
.component-enter {
    opacity:0;
    transform:translateX(100%);
}
.component-enter-active{
    transition:all 0.5s ease
}
.component-leave-active{
    opacity:0;
}
*{touch-action:pan-y}

.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item1.mui-active {
    color: hotpink;
}
.mint-header.is-fixed{
    z-index:999;
}

</style>