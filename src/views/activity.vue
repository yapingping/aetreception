<template>
    <div class="activity">
        <form action="" method="post">
            <td><label class="filt" for="#">筛选&nbsp;&nbsp;：</label></td>
            <td>
                <select v-model="selectOpt" @change="selectChange" class="mySelect" id="mySelect" name="choice">
                    <option value="all" selected="selected">全部活动</option>
                    <option value="ing">进行中</option>
                    <option value="ed">已结束</option>
                    <option value="selected">精选</option>
                </select>
            </td>
        </form>
        <div class="Activity">
            <div class="block" v-for="(item, index) in list" @click="detail(index)">
                <div class="left">
                    <div class="name">{{ item.userImg2 }}</div>
                    <div class="college"><i class="el-icon-office-building">&nbsp;&nbsp;</i>发起学院：{{ item.hbKeyword }}</div>
                </div>
                <div class="right">
                    <div class="status">

                        <el-button v-if="item.isEnd === 2" type="info">已结束</el-button>
                        <el-button v-else type="success">进行中</el-button>
                    </div>
                    <div class="time"><i class="el-icon-time">&nbsp;&nbsp;</i>{{ item.lat }}</div>
                    <div class="place"><i class="el-icon-location">&nbsp;&nbsp;</i>{{ item.address }}</div>
                    <div class="number"><i class="el-icon-s-custom">&nbsp;&nbsp;</i>{{ item.hbNum }}/{{ item.hot }}</div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            selectOpt: 'all',
            info1: {
                a: 1
            },
            info2: {
                type: 1,
                state: 2,
                isEnd: 1,
            },
        }
    },
    created() {
        this.getall()
    },
    methods: {
        // 获取所有活动信息
        async getslide() {
            if (this.selectOpt === "all") {
                const { data: res } = await this.$http.post('/system/activity/list', this.info1)
                console.log(res)
                if (res.code !== 200) return this.$message.error('数据请求失败')
                this.list = res.rows;
            }
            else {
                const { data: res } = await this.$http.post('/system/activity/list', this.info2)
                console.log(res)
                if (res.code !== 200) return this.$message.error('数据请求失败')
                this.list = res.rows;
            }
            console.log(this.list)
        },
        // 筛选
        selectChange() {
            console.log(this.selectOpt)
            if (this.selectOpt === "all") {
                this.info2.type = 1;
                this.info2.state = 2;
                this.info2.isEnd = 1;
                this.getslide()
            }
            if (this.selectOpt === "ing") {
                this.info2.type = 1;
                this.info2.state = 2;
                this.info2.isEnd = 1;
                this.getslide()
            }
            if (this.selectOpt === "ed") {
                this.info2.type = 1;
                this.info2.state = 2;
                this.info2.isEnd = 2;
                this.getslide()
            }
            if (this.selectOpt === "selected") {
                this.info2.type = 2;
                this.info2.state = 2;
                this.info2.isEnd = 2;
                this.getslide()
            }
        },
        async getall() {
            const { data: res } = await this.$http.post('/system/activity/list', this.info1)
            console.log(res)
            if (res.code !== 200) return this.$message.error('数据请求失败')
            this.list = res.rows;
            console.log(this.list)
        },
        // 筛选
        // selectChange() {
        //     this.getall()
        //     if(this.selectOpt==="all")return;
        //     if(this.selectOpt==="ing"){
        //         for(let i of this.list){
        //             if(i.isEnd!=1){
        //                 // let newArray = array.filter(item => item !== elementToRemove);
        //                 this.list = this.list.filter(item=>item!==i)
        //             }
        //         }
        //     }
        //     if(this.selectOpt==="ed"){
        //         for(let i of this.list){
        //             if(i.isEnd!=2){
        //                 this.list = this.list.filter(item=>item!==i)
        //             }
        //         }
        //     }
        //     if(this.selectOpt==="selected"){
        //         for(let i of this.list){
        //             if(i.type!=2){
        //                 this.list = this.list.filter(item=>item!==i)
        //             }
        //         }
        //     }
        // },
        // 点击查看详情
        detail(index) {
            console.log("查看活动详情")
            this.$router.push({
                path: '/system/actdetail',
                query: {
                    id: this.list[index].id
                }
            })
        }
    }
}
</script>

<style scoped>
/* 筛选 */
.activity .filt {
    font-size: 25px;
    font-weight: bold;
    margin: 0 40px
}

.activity .mySelect {
    padding: 5px;
    cursor: pointer;
}

/* 活动 */
.activity {
    width: 1300px;
    margin: 0 auto;
    margin-top: 20px;
}

.Activity {
    margin-top: 20px;
}

.Activity .block {
    width: 80%;
    height: 180px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: rgb(225, 222, 244);
    /* background-color: white; */
}

.Activity .block:hover {
    cursor: pointer;
}

.Activity .block .left {
    margin-left: 30px;
    width: 50%;
}

.Activity .block .left .name {
    font-size: 30px;
    font-weight: 550;
    margin-top: 30px;
}

.Activity .block .left .college {
    margin-top: 15px;
    font-size: 18px;
}

.Activity .block .right {
    margin-top: 20px;
    margin-right: 20px;
}

.Activity .block .right div {
    margin-bottom: 5px;
}
</style>