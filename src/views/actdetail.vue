<template>
    <div class="actdetail">
        <!-- <h2>活动详情</h2>
        <h2>{{ $route.query.id }}</h2> -->
        <div class="left">

            <div style="font-size: 35px;font-weight: 600;" class="title">{{ list.userImg2 }}</div>
            <div class="info2">
                <el-button v-if="list.type === 1" type="info">未精选</el-button>
                <el-button v-else type="success">已精选</el-button>
                <el-button v-if="list.state === 1" type="info">审核中</el-button>
                <el-button v-else type="success">已审核</el-button>
            </div>
            <div class="location"><i class="el-icon-office-building">&nbsp;&nbsp;</i>{{ list.hbKeyword }}</div>
            <div class="info1">
                <div class="time"><i class="el-icon-time">&nbsp;&nbsp;</i>{{ list.lat }}</div>
                <div class="place"><i class="el-icon-location">&nbsp;&nbsp;</i>{{ list.address }}</div>
                <div class="number"><i class="el-icon-s-custom">&nbsp;&nbsp;</i>{{ list.hbNum }}/{{ list.hot }}</div>
                <div class="speaker">主讲人：{{ list.img }}</div>
            </div>
            <div class="isApplication">
                <span v-if="list.isApplication.length !== 0"> <el-button type="info">已报名</el-button></span>
                <span v-else>
                    <el-button type="success">未报名</el-button>
                    <el-button type="success" @click="signup">点击报名</el-button>
                </span>
            </div>
            <div class="introduce">
                <div class="jianjie">简介</div>
                <div class="intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ list.details }}</div>
            </div>
        </div>
        <div class="right">
            <img :src="list.signinFilePath" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'actdetail',
    data() {
        return {
            list: [],
        }
    },
    created() {
        // this.id=$router.query.id
        const id = this.$route.query.id;
        console.log(id);
        this.getdetail(id);
    },
    methods: {
        async getdetail(ID) {
            const { data: res } = await this.$http.get('/system/activity/' + ID)
            if (res.code !== 200) {
                return this.$message.error("活动详情信息请求失败")
            }
            this.list = res.data;
            console.log(this.list)
            console.log(this.list.isApplication.length)
        },

        async signup(){
            const { data: res } = await this.$http.post('/system/useractivity',{activityId:this.list.id})
            console.log(res)
            if (res.code !== 200) {
                return this.$message.error(res.msg)
            }
            location.reload();
        }
    }
}
</script>

<style scoped>
.actdetail {
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 18px;
}

.actdetail .left {
    width: 80%;
    float: left;
}

.actdetail .left .title {
    padding: 20px;
}

.actdetail .left div {
    padding: 8px 0;
}

.actdetail .left .introduce .jianjie {
    font-size: 25px;
}

.actdetail .left .introduce .intro {
    /* 设置行间距 */
    line-height: 150%;
}


.actdetail .right {
    float: right;
}

.actdetail .right img {
    width: 200px;
    height: 200px;
}
</style>