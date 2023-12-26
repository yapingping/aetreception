<template>
    <div class="science">
        <h2>科普活动</h2>
        <div v-for="(l, index) in list" class="main">
            <div class="info">
                <div class="title" @click="detail(index)">{{ l.title }}</div>
                <div class="intro">简介：{{ l.summary }}</div>
                <div class="time">发布时间：{{ l.createTime }}</div>
                <div>
                    <span class="Like">
                        <span>
                            <button v-if="l.tblLike === null" class="unlike" @click="like(l.id,index)"><i
                                    class="iconfont">&#xe6a3;</i></button>
                            <button v-else class="like" @click="unlike(l.id,index)"><i class="iconfont">&#xe6a3;</i></button>
                        </span>
                        &nbsp;{{ l.likeCount }}
                    </span>
                    <span class="view">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                            class="el-icon-view"></i>&nbsp;&nbsp;{{ l.viewsNums }}</span>
                </div>
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
                path: '/system/column/coldetail',
                query: {
                    id: this.list[index].id,
                }
            })
        },
        async like(ID,index) {
            console.log("like")
            const { data: res } = await this.$http.get('/system/column/like/' + ID)
            console.log(res.code)
            if (res.code !== 200) return this.$message.error('数据请求失败')
            this.list[index].tblLike = { a: 1 }
            this.list[index].likeCount++
            // location.reload();
        },
        async unlike(ID,index) {
            // console.log("unlike")
            const { data: res } = await this.$http.delete('/system/column/like/' + ID)
            console.log(res.code)
            if (res.code !== 200) return this.$message.error('数据请求失败')
            this.list[index].tblLike = null
            this.list[index].likeCount--
            // location.reload();
        }
    }
}
</script>

<style scoped>
.unlike {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.like {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: red;
}

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

.science .main .info .title {
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
}
</style>