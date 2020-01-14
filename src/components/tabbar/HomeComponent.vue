
<template>
    <div class="home-component">
       <rotationplot :swipe="swipe" :isfull=true></rotationplot>


<div>
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/newslist">
                    <img src = "/src/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/photoList">
                <img src="/src/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/goodslist">
                <img src = "/src/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link ></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src = "/src/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src = "/src/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="/src/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
                </ul>
                </div>
    </div>
</template>


<script>
import rotationplot from '../subcomponents/rotationplot.vue'

export default{
    data(){
        return {
            swipe:[],
        }
    },
    created(){
        this.getSwipe()
    },
    methods:{
        getSwipe(){
            this.$http.get('lunbo').then(result=>{
                if(result.body.status===0){
                    this.swipe  = result.body.list
                    
                }
                else{
                    Toast('加载图片失败！！')
                }
            })
        }
    },
    components:{
        rotationplot
    }
}

</script>


<style scoped>



.home-component img{
    width:100%;
    height:100%;
}

.mui-grid-view.mui-grid-9 {
    border:none;
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 li{
    border:none;
}

.mui-grid-view.mui-grid-9 img{
    width:30px;
    height:30px;
}

</style>