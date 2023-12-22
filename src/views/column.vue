<template>
    <div>
        <!-- <div class="nav">
            <router-link class="item" to="/science">科普活动</router-link>
            <router-link class="item" to="/splendidmonent">精彩瞬间</router-link>
        </div> -->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         total: 0,
    //         list: []
    //     }
    // },
    // props: {
    // },
    // created() {
    //     this.getslide()
    // },
    // methods: {
    //     // 获取精彩专栏数据
    //     async getslide() {
    //         const { data: res } = await this.$http.get('/system/column/list')
    //         if (res.code !== 200) return this.$message.error('数据请求失败')
    //         this.list = res.rows;
    //         this.total = res.total;
    //         // console.log(this.total)
    //         console.log(this.list)
    //     }
    // }
}
</script>

<style scoped>
.nav {
    width: 230px;
    height: 50px;
    margin-left: 680px;
    border: 1px solid rgb(121, 121, 162);
    border-radius: 10px;
    /* text-align: center; */
    padding: 15px;
    display: inline-block;
}

.nav .item {
    padding: 16px;
}

.router-link-active {
    background-color: aquamarine;
}
</style>