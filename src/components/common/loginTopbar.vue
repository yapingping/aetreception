<template>
        <div class="header">
            <div slot="title" class="title">学术晚茶</div>
            <div class="right">
                <div><a href="#">基本版</a></div>
                <div><span>|</span></div>
                <div><a href="#">English</a></div>
                <div><span>|</span></div>
                <div><a href="#">企业版</a></div>
                <div><span>|</span></div>
                <div><a href="#">手机版</a></div>
            </div>
        </div>
</template>

<script>
export default{
    name:'loginTopbar'
}
</script>

<style scoped>
.header{
    width:100%;
    height:80px;
    background-color: rgba(164, 185, 209, 0.6);
}
.title{
    margin-top:15px;
    float: left;
    font-size: 40px;
    font-weight: 600;
    margin-left: 50px;
}
.right{
    float: right;
    line-height: 60px;
    margin-right: 80px;
}
.right div{
    display: inline-block;
    margin:10px;
}
</style>