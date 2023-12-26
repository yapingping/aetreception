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
    name:'column',
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