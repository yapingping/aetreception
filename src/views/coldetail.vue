<template>
    <div>
        <h2>文章详情</h2>
        <h2>{{ $route.query.list.id }}</h2>
        <h2>{{ $route.query.id }}</h2>
        <h2>{{ $route.query.list }}</h2>
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            // id: ''
            list:this.$route.query.list
        }
    },
    created() {
        // this.id=$router.query.id
        const id = this.$route.query.id;
        console.log(id);
    },
    methods:{
    }
}
</script>

<style scoped></style>