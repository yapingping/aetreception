<template>
    <div class="science">
        <h2>科普活动</h2>
        <div v-for="(l, index) in list" class="main" @click="detail(index)">
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
    name: 'science',
    data() {
        return {
            list: [],
            kind: 2
        }
    },
    created() {
        this.getslide()
    },
    methods: {
        // 获取科普文章数据
        async getslide() {
            const { data: res } = await this.$http.get('/system/column/list')
            if (res.code !== 200) return this.$message.error('数据请求失败')
            const result = res.rows;
            // console.log(result)
            for (var i of result) {
                if (i.kind === 2) {
                    this.list.push(i);
                }
                // console.log(i)
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
                }
            })
        }
    }
}
</script>

<style scoped>
.science {
    width: 1000px;
    margin: 0 auto;
}

.science .main {
    width: 100%;
    height: 150px;
    margin: 10px;
    background-color: rgb(225, 222, 244);
}

.science .main .info {
    float: left;
    width: 400px;
    margin: auto;
    margin-left: 30px;
    margin-top: 30px;
    /* background-color: pink; */
}
.science .main .info .title{
    font-size: 18px;
    font-weight: bold;
}
.science .main .img {
    float: right;
}

.science .main img {
    display: inline;
    width: 150px;
    height: 150px;
}</style>