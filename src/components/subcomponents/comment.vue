<template>
    <div class="cmt-container">
        <h3>评论</h3>
        <hr>
        <textarea name=""  maxlength="120" placeholder="请输入要BB的内容（最多吐槽120字）" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined'?'此用户未评论':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" plain size="large" @click="getComments">加载更多</mt-button>
    </div>
</template>


<script>
    import {Toast} from 'mint-ui'
export default {
    props:['commentId',],
    data(){
        return {
            pageIndex:1,
            comments:[],
            msg:"",
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            
            this.$http.get("comments/" + this.commentId + "?pageindex=" + this.pageIndex + "&commentsNub=" + this.comments.length).then(
                result=>{
                    if(result.body.status === 0){
                        this.comments = this.comments.concat(result.body.content)
                        this.pageIndex = this.pageIndex +1
                    }
                    else{
                        Toast("获取评论失败")
                    }
                }
            )
        },
          postComment(){
              if(this.msg.trim().length === 0){
                  return Toast('评论不能为空！')
              }
        this.$http.post('post/comments/'+ this.commentId,{content:this.msg.trim()}).then(result=>{
            if(result.body.status === 0)
           var cmt = {
               user:'匿名用户',
               time:Date.now(),
               content:this.msg.trim()
           }
           this.comments.unshift(cmt)
           this.msg=''
        })
    }
    }
    
}


</script>

<style lang="scss" scoped>
.cmt-container h3{
    font-size:18px;
}
.cmt-container textarea{
    font-size:14px;
    height:85px;
    margin:0;
}
.cmt-list{
    margin:5px 0;
}
.cmt-item{
    font-size:13px;
}
.cmt-title{
    line-height:30px;
    background-color: #ccc;
}
.cmt-body{
    line-height:35px;
    text-indent:2em
}

</style>


