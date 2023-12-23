<!-- 轮播图 -->
<template>
    <div id="home">
        <h2>今日推荐</h2>
        <el-carousel type="card" class="slider" :interval="3000" height="400px">
            <el-carousel-item class="el_carousel_item" v-for="(notice,index) in list">
                <div class="block" @click="detail(index)">
                    <img class="img" :src="notice.img" alt="">
                    <div class="title"> {{ notice.title }}</div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            list: [],
            total: 0,
        }
    },
    created() {
        this.getslide()
    },
    methods: {
        // 获取轮播图数据
        async getslide() {
            const { data: res } = await this.$http.get('/system/notice/list')
            if (res.code !== 200) return this.$message.error('数据请求失败')
            this.list = res.rows;
            this.total = res.total;
            // console.log(this.total)
            console.log(this.list[0].img)
        },
        detail(index) {
            console.log("查看详情")
            console.log(index)
            this.$router.push({
                path:'/system/notdetail',
                query:{
                    noticeId:this.list[index].noticeId,
                }
            })
        }
    }
}
</script>

<style scoped>
h2{
    margin-left:10%;
}
.slider{
    margin-top:30px;
}
.slider .img {
    height: 500px;
    width: 100%;
}
.slider .el_carousel_item {
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    filter: blur(5px);
}
.slider .is-active{
    filter:none;
}
.slider .el_carousel_item .block{
    position: relative;
}
.slider .el_carousel_item .block .img{
    position: absolute;
    object-fit: cover;
    object-position: center center;
}
.slider .el_carousel_item .title{
    text-align: center;
    font-size: 40px;
    color: white;
    opacity: 0.6;
    letter-spacing: 3px;
}
</style>