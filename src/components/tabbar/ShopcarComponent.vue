<template>
    <div class="shop-car">
        <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSlected[item.id]" @change="selected(item.id,$store.getters.getGoodsSlected[item.id])"></mt-switch>
                        <img :src="item.img_url">
                        <div calss="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.market_price}}</span>
                                <numbox :getCount="$store.getters.getGoodId[item.id]" :goodsId="item.id" ></numbox>
                                <a href="" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
                </div>

 <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner summary">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品&nbsp;<span class="number">{{$store.getters.getGoodsCountAndAmount.count}}</span>&nbsp;件，总价&nbsp;<span class="number">{{$store.getters.getGoodsCountAndAmount.amount}}</span>&nbsp;元。</p>
                             
                        </div>
                       <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
                </div>
    </div>
</template>


<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return {
            goodslist:[],
            
        }
    },
    created(){
        this.getGoodsList()
        
    },
    methods:{
        getGoodsList(){
            var idArr=[]
            this.$store.state.car.forEach(item=>idArr.push(item.id))
            if(idArr.length<=0){
                return;
            }
            this.$http.get("getgoodslist/"+idArr.join(',')).then(res=>{
                
                if(res.body.status === 0){
                        this.goodslist = res.body.list
                }
            })
            
        },
        remove(id,i){
            this.goodslist.splice(i,1)
            this.$store.commit('delete',{id:id})
        },
        selected(id,mtswitch){
            this.$store.commit('selectedUpdate',{id:id,switch:mtswitch})
        }
    },
    components:{
        numbox,
    }

}
</script>


<style lang="scss"  scoped>
.shop-car{
    background-color: #eee;
    padding: 1px;
    
    .mui-card-content-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    p{
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price{
            color:red;
            font-weight:bold;
            margin-right:3px;
            font-size:18px;
        }
        a{
            margin: 3px;
        }
        .nub{
            height:30px;
            width:100px;
        }
        
    }
    img{
        width:40px;
        height:50px;
        
    }
    
    h1,.mui-h1{
        font-size:16px;
        color:blue;
    }
    .summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .number{
            color:red;
            font-weight: bold;
        }
}

}



</style>

