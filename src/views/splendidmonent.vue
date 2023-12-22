<template>
    <div class="splendidmonent">
        <h2>精彩瞬间</h2>
        <div v-for="(l,index) in list" class="main" @click="detail(index)">
            <div class="info">
                <div class="title">{{ l.title }}</div>
                <div class="intro">简介：{{ l.summary }}</div>
                <div class="time">发布时间：{{ l.createTime }}</div>
                <div class="like"><i class="el-icon-star-on"></i>&nbsp;&nbsp;{{ l.likeCount }}</div>
                <div class="view"><i class="el-icon-view"></i>&nbsp;&nbsp;{{ l.viewsNums }}</div>
            </div>
            <div>
                <img class="img" :src="l.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'splendidmonent',
    data() {
        return {
            list: [],
            kind:1,
        }
    },
    props: {
    },
    created() {
        this.getslide()
    },
    methods: {
        // 获取精彩瞬间数据
        async getslide() {
            const { data: res } = await this.$http.get('/system/column/list')
            if (res.code !== 200) return this.$message.error('数据请求失败')
            const result = res.rows;
            // console.log(result)
            for (var i of result) {
                if (i.kind === 1) {
                    this.list.push(i);
                }
            }
            console.log(this.list)
        },
        detail(index) {
            console.log("查看详情")
            console.log(index)
            this.$router.push({
                path:'/system/column/coldetail',
                query:{
                    id:this.list[index].id,
                    list:this.list[index],
                }
            })
        }
    }
}
</script>

<style scoped>
.splendidmonent{
    width:1000px;
    margin:0 auto;
}
.splendidmonent .main {
    width: 100%;
    height: 150px;
    margin: 10px;
    background-color: rgb(237, 236, 245);
}
.splendidmonent .main .info{
    float: left;
    width:400px;
    margin: auto;
    margin-left: 30px;
    margin-top:30px;
    /* background-color: pink; */
}
.splendidmonent .main .info .title{
    font-size: 18px;
    font-weight: bold;
}
.splendidmonent .main .img{
    float: right;
}
.splendidmonent .main img {
    display: inline;
    width:150px;
    height:150px;
}
</style>