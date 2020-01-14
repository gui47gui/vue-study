<template>
	<div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
		<input id="test" ref="nub" class="mui-input-numbox" type="number" :value = "getCount" @change="countChange" readonly/>
		<button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
	</div>
</template>


<script>
export default {
	props:["getCount","goodsId"],
	data(){
		return {
			
		}
	},
	mounted() {
          this.mui(".mui-numbox").numbox()
      },

	methods:{
	 countChange(){
		this.$store.commit('update',{id:this.goodsId,count:this.$refs.nub.value})
	}
	},
	
}
</script>