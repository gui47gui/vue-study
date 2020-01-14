<template>
    <div class= "photolist-container">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class= "['mui-control-item',heads.id == 0 ? 'mui-active' : '']" @click="getPhotoListByCateId(heads.id)" data-wid="tab-top-subpage-1.html" v-for="heads in head" :key="heads.id">
                        {{heads.title}}
                    </a>
                </div>
            </div>

        </div>
        <ul class = "photo-list">
            <router-link :to="'/home/photoinfo/' + item.id" tag="li" v-for="item in list" :key=item.id>
                <img v-lazy= "item.img_url" style="width:100%;height:280px;margin:auto;vertical-align:middle">
                <div class = "info">
                        <div>
                        <h1 class="title">{{item.title}}</h1>
                        </div>
                    <div>
                        <h1 class="body">{{item.zhaiyao}}</h1>
                    </div>

                </div>

            </router-link>
        </ul>
    </div>
</template>


<script>
    

export default {
    data(){
        return {
            head:[],
            list:[],
        }
    },
    created(){
        this.getAllCategory()
        this.getPhotoListByCateId(0)
    },
    mounted(){
        setTimeout(()=>{
    this.mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 
    })})

    },
    methods:{
        getAllCategory(){
            this.$http.get('getphotoshead').then(result=>{
                if(result.body.status === 0){
                    this.head = result.body.photosHead
                }
            })
        },
        getPhotoListByCateId(cateId){
            this.$http.get('getimages/' + cateId).then(result=>{
                if(result.body.status === 0){
                    this.list=result.body.photolist
                }
            })
        }
    }
}
</script>

<style  lang="scss"  scoped>

.photo-list{
    list-style:none;
    margin:0;
    padding:10px;
    padding-bottom:0;
}
.photo-list li{
    background-color: #ccc;
    text-align:center;
    margin-bottom:10px;
    box-shadow:0 0 9px #999;
    position:relative;
}

.info{
    color:white;
    text-align:left;
    position:absolute;
    bottom:0;
    background-color: rgba(0,0,0, 0.4);
    width:100%;
    max-height: 80px;
}

.info .title{
    font-size:14px;

}

.info .body{
    font-size:12px;
    
}
</style>