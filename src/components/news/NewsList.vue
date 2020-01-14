<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-right" src="/src/images/head/狗狗1.jpg">
                <div class="mui-media-body">
                    <h1>狗狗</h1>
                    <p class='mui-ellipsis'>狗是人类的朋友，我们要善待他们！

                    </p>
                    <p class="time"> <span>发表时间:2012-12-12 12:12:12</span>
                        <span>点击:5次</span></p>
                        </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media" v-for="list in newlist" :key="list.id">
                        <router-link :to = "'/home/newsinfo/' + list.id">
                            <img class="mui-media-object mui-pull-right" :src=list.img_url>
                            <div class="mui-media-body">
                                <h1>{{ list.title }}</h1>
                                <p class='mui-ellipsis'>{{list.summary}}

                                </p>
                                <p class="time"> <span>发表时间:{{list.add_time | dateFormat}}</span>
                                    <span>点击:{{list.click}}</span></p>
                            </div>
                        </router-link>
                    </li>
        </ul>
    </div>
</template>


<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                newlist: [],
            }
        },
        created() {
            this.getNewList()
        },
        methods: {
            getNewList() {
                this.$http.get('newList').then(result => {
                    if (result.body.status === 0) {
                        this.newlist = result.body.newList
                    }
                    else {
                        Toast('获取新闻列表失败！')
                    }
                })
            }
        },

    }

</script>


<style lang="scss" scoped>
    .mui-table-view-cell span {
        font-size: 12px;
        color: blueviolet;
    }

    .time {
        display: flex;
        justify-content: space-between;
    }


    .mui-table-view-cell h1 {
        font-size: 16px;
    }

    .mui-table-view-cell img {
        height: 45px;
    }
</style>