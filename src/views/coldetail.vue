<template>
    <div class="coldetail">
        <!-- <h2>文章详情</h2> -->
        <!-- <h2>{{ id }}</h2> -->
        <!-- <h2>{{ item }}</h2> -->
        <!-- <i class="fab fa-accessible-icon" style="font-size:50px;"></i> -->
        <div class="info">
            <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="kind">
                    <span>
                        <el-button v-if="item.kind === 1" type="success">精彩瞬间</el-button>
                        <el-button v-else type="success">科普活动</el-button>
                    </span>
                    <span>
                        <button v-if="item.tblLike === null" class="unlike" @click="like"><i
                                class="iconfont">&#xe6a3;</i></button>
                        <button v-else class="like" @click="unlike"><i class="iconfont">&#xe6a3;</i></button>
                        &nbsp;{{ item.likeCount }}
                    </span>
                </div>
                <div class="summary">{{ item.summary }}</div>
                <div class="createBy"><i class="el-icon-s-custom">&nbsp;&nbsp;</i>{{ item.createBy }}</div>
                <div class="createTime"><i class="el-icon-time">&nbsp;&nbsp;</i>{{ item.createTime }}</div>
            </div>
            <div class="right">
                <img style="height: 250px;" :src="item.img" alt="">
            </div>
        </div>
        <div class="content">
            <div class="name">详细内容</div>
            <div v-html="item.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            id: this.$route.query.id,
            type: 2,
            item: [],
            dianzan: true
        }
    },
    created() {
        this.getslide()
    },
    methods: {
        async getslide() {
            const { data: res } = await this.$http.get('/system/column/' + this.id + '/' + this.type)
            console.log(res.code)
            if (res.code !== 200) return this.$message.error('数据请求失败')
            this.item = res.data;
            this.dianzan = this.item.tblLike === null
            console.log(this.dianzan)
            // console.log(this.item.tblLike)
        },
        // 点赞
        async like() {
            this.item.tblLike = { a: 1 }
            this.dianzan = false
            this.item.likeCount++
            const { data: res } = await this.$http.get('/system/column/like/' + this.id)
            console.log(res.code)
            if (res.code !== 200) return this.$message.error('数据请求失败')
            // location.reload();
        },
        // 取消点赞
        async unlike() {
            this.item.tblLike = null
            this.dianzan = true
            this.item.likeCount--
            const { data: res } = await this.$http.delete('/system/column/like/' + this.id)
            console.log(res.code)
            if (res.code !== 200) return this.$message.error('数据请求失败')
            // location.reload();
        },
        // async Dianzan() {
        //     console.log(this.dianzan)
        //     if (this.dianzan === false) {
        //         const { data: res } = await this.$http.get('/system/column/like/' + this.id)
        //         console.log(res.code)
        //         if (res.code !== 200) return this.$message.error('数据请求失败')
        //     }
        //     else {
        //         const { data: res } = await this.$http.delete('/system/column/like/' + this.id)
        //         console.log(res.code)
        //         if (res.code !== 200) return this.$message.error('数据请求失败')
        //     }
        // }
    },
    // beforeDestroy() {
    //     console.log("退出详情")
    //     this.Dianzan()
    // }
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

.coldetail {
    width: 70%;
    margin: 0 auto;
}

.info {
    height: 250px;
    overflow: hidden;
}

.info .kind span {
    display: inline-block;
    width: 150px;
}

.info div {
    margin: 15px 0;
}

.info .title {
    font-size: 50px;
    font-weight: bold;
    margin-left: 20px;
}

.content {
    line-height: 200%;
    background-color: rgb(247, 250, 250);
}

.content .name {
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
}
</style>