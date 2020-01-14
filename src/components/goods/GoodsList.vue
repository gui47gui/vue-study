<template>
    <div class="goods-list">
        <router-link :to="'/home/goodsInfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.id" tag="div"> 
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                    </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>
    <mt-button type="danger" size="large" @click="getGoodsList">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
       return {
           pageindex:1,
           goodslist:[],

       }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get("getgoods?pageindex=" + this.pageindex).then(res=>{
                if(res.body.status===0){
                    this.goodslist=this.goodslist.concat(res.body.list)
                    this.pageindex = this.pageindex + 1
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display:flex;
        flex-wrap:wrap;
        padding:7px;
        justify-content:space-between;
        .goods-item{
            width:49%;
            border: 1px solid #ccc;
            box-shadow:1px 2px 15px  #ccc;
            margin:4px 0;
            display: flex;
            flex-direction:column;
            justify-content:space-between;
            min-height:293px;
            img{
                width:100%;
            }
            .title{
                font-size:14px;
            }
            .info{
                background-color: #eee;
                padding: 2px;
                p{
                    margin:0;
                    padding:5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight:bold;
                        font-size:16px;
                    }
                    .old{
                        text-decoration:line-through;
                        font-size:12px;
                        margin-left:10px;
                    }
                }
                
            }
        }
    }
</style>