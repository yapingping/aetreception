<!-- 轮播图 -->
<template>
    <div id="home">
        <div class="outer">
            <div class="imglist">
                <ul>
                    <li><img src="#" alt="">活动1</li>
                    <li><img src="#" alt="">活动2</li>
                    <li><img src="#" alt="">活动3</li>
                    <li><img src="#" alt="">活动4</li>
                </ul>
            </div>
            <div class="info">
                <ul>
                    <li>信息1</li>
                    <li>信息2</li>
                    <li>信息3</li>
                    <li>信息4</li>
                </ul>
            </div>
            <div class="circles">
                <a href="#" class="nav2"></a>
                <a href="#" class="nav2"></a>
                <a href="#" class="nav2"></a>
                <a href="#" class="nav2"></a>
                <a href="#" class="nav2"></a>
                <a href="#" class="nav2"></a>
            </div>
            <div class="carrousel">
                <a href="#" class="leftBtn">&lt</a>
                <a href="#" class="rightBtn">&gt</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style scoped>
.outer {
    margin: 0 auto;
}
/* 设置小圆点 */
.circles .nav2{
    width:5px;
    height:5px;
    border-radius: 50%;
    background-color: rgb(103, 101, 101);
}
</style>