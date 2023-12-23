<template>
    <div class="notdetail">
        <!-- <h1>公告详情</h1>
        <h2>{{ noticeId }}</h2> -->
        <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="createTime"><i class="el-icon-time">&nbsp;&nbsp;</i>{{ item.createTime }}</div>
            <div class="createBy"><i class="el-icon-s-custom">&nbsp;&nbsp;</i>{{ item.createBy }}</div>
        </div>
        <div class="right">
            <img :src="item.img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'notdetail',
    data() {
        return {
            // noticeId为String类型
            noticeId: this.$route.query.noticeId,
            list: [],
            item: [],
            total: 0,
        }
    },
    created() {
        this.getslide()
    },
    methods: {
        async getslide() {
            // 获取所有公告信息
            const { data: res } = await this.$http.get('/system/notice/list')
            if (res.code !== 200) return this.$message.error('数据请求失败')
            this.list = res.rows;
            this.total = res.total;
            // console.log(this.total)
            console.log(this.list[0].img)
            // 根据id获取被点击的公告的信息
            for (let i of this.list) {
                console.log(i)
                if (i.noticeId === parseInt(this.noticeId)) {
                    this.item = i
                }
            }
            console.log(this.item)
            // console.log(typeof (this.noticeId))
        },
    }
}
</script>

<style scoped>
.notdetail {
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 18px;
}
div{
    margin:30px 0;
}
.left .title{
    font-size: 50px;
    font-weight: bold;
}
.left .createTime,.createBy{
    font-size: 20px;
}
</style>