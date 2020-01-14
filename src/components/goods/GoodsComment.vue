<template>
    <div>
        <h3>请发表你大胆的想法</h3>
        <div>
            <cmtbox :commentId='$route.params.id'></cmtbox>
        </div>
    </div>
</template>

<script>
import cmtbox from '../subcomponents/comment.vue'
export default {
    data(){
        return {

        }
    },
    components:{
        cmtbox
    }
}
</script>


<style lang="scss" scoped>
    
h3{
    color:rgb(129, 17, 120);
    text-align:center;
}

</style>