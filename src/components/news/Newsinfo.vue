<template>
    <div id = "info-container">
        <h3>{{newsinfo.title}}</h3>
        <div class="head"><span>时间：{{newsinfo.add_time | dateFormat}}</span>点击数:{{newsinfo.click}}</div>
        <hr>
        <div class="content" v-html="newsinfo.msg"></div>
        <comment :commentId="this.id"></comment>
    </div>
    
</template>


<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default{ 
    data(){
        return {
            newsinfo:{},
            id:this.$route.params.id
        }
    },
    created(){
        this.getMessage()
    },
       methods:{
        getMessage(){
            this.$http.get('newsinfo/'+ this.id).then(
                function(result){
                    if(result.body.status === 0){
                        this.newsinfo = result.body.list
                    }
                    else {return Toast('新闻内容获取失败！')}
            }
                )
        }
    },
    components:{
        "comment":comment
    }
   }

</script>


   
<style  lang = "scss" scoped>
#info-container{
    padding:0 8px
}

#info-container h3{
    color:rgb(226, 43, 113);
    text-align:center;
    margin:15px 0;
}
#info-container .head{
    font-size:14px;
    color:blue;
    display:flex;
    justify-content:space-between;
}

</style>