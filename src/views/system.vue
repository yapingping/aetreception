<template>
    <div id="main">
        <el-header>
            <main-header></main-header>
        </el-header>
        <el-header class="nav">
            <router-link to="/system/home" class="item">首页</router-link>
            <router-link to="/system/activity" class="item">所有活动</router-link>
            <router-link to="/system/column" class="item column">
                精彩专栏
                <div class="col">
                    <router-link class="item" to="/system/column/science">科普活动</router-link>
                    <router-link class="item" to="/system/column/splendidmonent">精彩瞬间</router-link>
                </div>
            </router-link>
            <router-link to="/system/user" class="item">个人中心</router-link>
        </el-header>

        <el-main class="detail">
            <router-view></router-view>
        </el-main>
    </div>
</template>

<script>
// import {getMainData} from 'network/home.js'
import mainHeader from 'components/common/mainHeader'
export default {
    name: 'system',
    path: '/system/home',
    components: {
        mainHeader
    },
    // 生命周期函数，组件被创建即发送网络请求
    // created(){
    //     // 请求数据
    //     getMainData().then(res=>{
    //         console.log(res);
    //     })
    // }
}
</script>
<style scoped>
.nav {
    width: 1200px;
    height: 60px;
    /* background-color: pink; */
    margin: 0 auto;
}

.nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.nav .item {
    padding: 15px 30px;
    font-size: 25px;
}

.detail {
    width: 100%;
    /* height: 500px; */
    background-color: pink;
    margin: 0 auto;
    /* 设置渐变 */
    background-image: linear-gradient(rgb(219, 229, 234), white);
}

/* 设置下拉条 */
.col{
    width: 250px;
    height: 40px;
    display: none;
    position:absolute;
    margin-left: -80px;
    margin-top:10px;
    padding-top:6px;
    padding-right:4px;
    line-height: 1;
    text-align: center;
    box-shadow: 0 0 10px rgb(0,0,3);
}
.nav .col .item{
    font-size: 15px;
}
.column:hover .col{
    display: block;
    background-color: white;
}
.column{
    position: relative;
}
.column:hover::after{
    width:0px;
    height: 0px;
    content: '';
    border:7px solid transparent;
    border-top:none;
    border-bottom-color: rgb(67, 62, 62);
    /* 设置绝对定位，变成了块元素 */
    position: absolute;
    bottom: 7px;
    left: 0;
    right: 0;
    margin:auto;
}
</style>