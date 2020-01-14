<template>
    <div class="goodsinfo">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" >
        <div class="ball" ref="ball" v-show="ballFlag"></div>
        </transition>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<rotationplot :swipe="imagelist" :isfull=false></rotationplot>
					</div>
				</div>
                </div>

                <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="nowprice">{{goodsinfo.sell_price}}</span>
                        </p>
                        
                        <p>购买数量：<goodsnumbox @getValue="getProps" :max="goodsinfo.stock_quantity"></goodsnumbox></p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="getgoods($event) ">加入购物车</mt-button>
					</div>
				</div>
				
			</div>

                <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号：{{goodsinfo.goods_no}}</p>
                        <p>库存情况：{{goodsinfo.stock_quantity}}</p>
                        <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
            
    </div>
</template>

<script>
import rotationplot from '../subcomponents/rotationplot.vue'
import goodsnumbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
       return {
           id:this.$route.params.id,
           imagelist:[],
           goodsinfo:[],
           ballFlag:false,
           buyGoodsNbm:1,
      } 
      },
      /* mounted() {
          this.mui(".mui-numbox").numbox()
      }, */

    created(){
        this.getGoodsRotaionPlot();
        this.getGoodsInfo()
    },
    methods:{
        getGoodsRotaionPlot(){
            this.$http.get("getgoodsrotationplot/" + this.id).then(res=>{
                if(res.body.status===0){
                    this.imagelist=res.body.list
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('getgoodsinfo/'+ this.id).then(res=>{
               if(res.body.status===0){
                    this.goodsinfo=res.body.list
                }
            })
        },
        goDesc(id){
            this.$router.push({name:"goodsdesc",params:{id}})
        },
        goComment(id){
            this.$router.push({name:"goodscomment",params:{id}})
        },
        getgoods($event){
            this.ballFlag=!this.ballFlag
            $event.target.disabled = 'disabled'
		    setTimeout(function() {
            $event.target.disabled = ''
        },500)
            
            var goodsinfo = {id:this.id,count:this.buyGoodsNbm,price:this.goodsinfo.sell_price,selected:true}
            this.$store.commit("addToCar",goodsinfo)
        },
        getProps(props){
            this.buyGoodsNbm = props
        },
        beforeEnter: function (e) {
                    e.style.transform = "translate(0,0)"
                },
        enter: function (e, done) {
                    e.offsetWidth
                    const ballPosition = this.$refs.ball.getBoundingClientRect()
                    const badgePositon = document.getElementById('badge').getBoundingClientRect()
                    /* 使用getBoundingClientRect()得到元素离页面距离的动态数值，它是一个数组，有.top等4个属性，这已经在操作DOM了 
                    这里的this.$refs.ball就是 e 元素  console.log(e===this.$refs.ball)的结果为true*/
                    const xDist = badgePositon.left - ballPosition.left
                    const yDist = badgePositon.top - ballPosition.top

                    e.style.transform = `translate(${xDist}px,${yDist}px)`
                    e.style.transition = "all 0.3s cubic-bezier(.61,-0.23,.82,.75)"
                    done()
                },
        afterEnter: function (e) {
                    this.ballFlag=!this.ballFlag
                },
    },
    components:{
        rotationplot,
        goodsnumbox,
    }
}
</script>

<style lang="scss" scoped>
    .goodsinfo{
        background-color: #eee;
        padding:5px;
        .nowprice{
            font-size:16px;
            color:red;
            font-weight: bold;
        }
    }
    .mui-card-footer{
        display:block;
        button{
            margin:10px;
        }
    }

    .ball{
        width:15px;
        height:15px;
        border-radius:50%;
        background-color:red;
        position:absolute;
        z-index:99;
        top:396px;
        left:153px;
    }
</style>