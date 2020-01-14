<template>
    <div class="content-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}</span>
        </p>
        <hr>
        <div class = "preview">
            <vue-preview :slides="list"></vue-preview>
        </div>

        <div class="content" v-html = "photoinfo.content">
        </div>
            <comment :commentId="id"></comment>
    </div>

</template>

<script>
    import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{},
            list:[],
        }
    },
    created(){
        this.getPhotoInfo();
        this.getPhotoPreview()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('getimageIfo/' + this.id).then(res=>{
                if(res.body.status ===0 ){
                    this.photoinfo = res.body.message

                }
            })
        },

        getPhotoPreview(){
            this.$http.get('getimagepreview/'+ this.id).then(res=>{
                if(res.body.status === 0){
                    this.list = res.body.list
                    this.list.forEach(function(item){
                        item.w = 300;
                        item.h = 200;
                        item.msrc = item.src
                    })
                }
            })
        }
    },
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
.content-container{
    padding:10px;
}

.content-container h3{
    text-align: center;
    color:rgb(80, 67, 197);
    margin:15px 0;
}

.content-container .subtitle{
    display:flex;
justify-content:space-between;
font-size: 12px;
}

.content-container .content{
    font-size:13px;
    line-height:30px;
    text-indent:2em;
}

.preview {
            /deep/ .my-gallery{  
                display: flex;
                flex-wrap:wrap;
                figure{
                    width: 30%;
                    margin: 5px;
                    img{
                        width: 100%;
                        box-shadow: 0 0 8px #999;
                        border-radius: 5px;
                    }
                }
            }
}
</style>