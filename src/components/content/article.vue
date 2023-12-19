<template>
    <div>
        <div class="item">
            <div class="img">
                <a href="#">
                    <div class="hide">点击查看详情</div>
                </a>
            </div>
            <div class="info">
                <div class="title">主题：{}</div>
                <div class="college">发起学院：{}</div>
                <div class="time">举办时间：{}</div>
                <div class="place">举办地点：{}</div>
                <div class="max-number">活动最多人数{}</div>
                <div class="signup-number">报名人数：{}</div>
                <div class="status">举办状态：{}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'article'
}
</script>

<style scoped></style>