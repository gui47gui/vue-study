<template>
    
        <mt-swipe :auto="5000" >
            <mt-swipe-item v-for="lists in swipe"  :key="lists.url||lists.src">
                <img :src='lists.url||lists.src' :class="{full:isfull}" alt="">
            </mt-swipe-item>
          </mt-swipe>
 
   
</template>


<script>
export default {
    props:["swipe","isfull"],


}
</script>


<style lang="scss" scoped>
    .mint-swipe{
    height:200px;
    text-align:center
}

img{
    height:100%;
}
.full{
    width:100%;
}
</style>