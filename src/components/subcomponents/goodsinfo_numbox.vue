<template>
	<div class="mui-numbox" data-numbox-min='1' >
		<button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
		<input id="test"  ref= "input" class="mui-input-numbox" type="number" value = "1"  @change="postProps"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
	</div>
</template>


<script>
export default {
	props:["max",],
	data(){
		return {
			
		}
	},
	mounted() {
          this.mui(".mui-numbox").numbox()
      },
	methods:{
		postProps(e){
			this.$emit('getValue',parseInt(e.target.value)||0)
		}
	},
	watch:{
		"max":function(newValue,oldValue){
			this.mui(".mui-numbox").numbox().setOption("max",newValue)
		}
	}
}
</script>