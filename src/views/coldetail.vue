<template>
    <div class="coldetail">
        <!-- <h2>文章详情</h2> -->
        <!-- <h2>{{ id }}</h2> -->
        <!-- <h2>{{ item }}</h2> -->
        <div class="info">
            <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="kind">
                    <el-button v-if="item.kind === 1" type="success">精彩瞬间</el-button>
                    <el-button v-else type="success">科普活动</el-button>
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
            list: [],
            item: [],
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
                if (i.id === parseInt(this.id)) {
                    this.item = i
                }
                // console.log(i)
            }
            console.log(this.item)
        },
    }
}
</script>

<style scoped>
.coldetail {
    width: 70%;
    margin: 0 auto;
}

.info {
    height: 250px;
    overflow: hidden;
}
.info div{
    margin:15px 0;
}
.info .title {
    font-size: 50px;
    font-weight: bold;
    margin-left: 20px;
}
.content{
    line-height: 200%;
}
.content .name{
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
}
</style>