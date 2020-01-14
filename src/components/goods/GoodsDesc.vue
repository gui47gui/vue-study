<template>
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
    
</template>


<script>
export default {
    data(){
        return {
            info:{},
            id:this.$route.params.id
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods:{
        getGoodsDesc(){
            this.$http.get('getgoodsdesc/'+this.id).then(res=>{
                if(res.body.status===0){
                    this.info = res.body.list
            }})

        }
    }
}
</script>


<style lang="scss" scoped>
    .goodsdesc-container {
        padding:4px;
        h3 {
            font-size:16px;
            color:#226aff;
            text-align:center;
            margin:15px 0;

        }

    .content{
            img {
                width:100%
            }
        }
    }


</style>