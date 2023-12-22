<template>
    <div>
        <div class="mainheader">
            <div class="title">学术晚茶</div>
            <div class="right">
                <div>欢&nbsp;&nbsp;迎&nbsp;&nbsp;!</div>
                <div><span>|</span></div>
                <div><el-button @click="loginout">退出登录</el-button></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainHeader',
    methods:{
        // 退出功能实现原理：销毁本地的token，重定向到'/login'
        loginout(){
            window.sessionStorage.clear();
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.mainheader {
    width: 1200px;
    height: 80px;
    background-color:rgb(207, 221, 227);
    margin: 0 auto;
    border-bottom: 1px black solid;
}
.title{
    float: left;
    margin-top:20px;
    font-size: 40px;
    font-weight: 600;
    color:black;
    margin-left: 30px;
}
.right{
    float: right;
    margin-right: 70px;
    /* 垂直居中 */
    line-height: 80px;
}
.right div{
    float: left;
    /* margin-right:10px; */
    margin-left:30px;
}
</style>