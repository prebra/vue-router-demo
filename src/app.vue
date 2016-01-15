<style>
    .wrapper{
        text-align: center;
        font-size: 18px;
        color: #3f3f3f;
    }
    .parket-group{
        margin-top: 10rem;
    }
    .btn-parket{
        display: block;
        width: 70%;
        height: 4rem;
        margin: 2rem 15% 0;
        line-height: 4rem;
        text-align: center;
        border-radius: 5px;
        font-size: 18px;
    }
    .group-parket{
        background: #ffb22e;
        color: #fff;
    }
    .group-parket a{

    }
    .person-parket{
        background: #f9f7de;
        color: #f05948;
    }
    .my-parket{
        background: #a6473a;
        color: #ddb364;
    }
    .group-parket:active, .person-parket:active, .my-parket:active{
        opacity: .7;
    }
</style>

<template>
    <div class="parket-group" v-if="isIndex">
        <a class="btn-parket group-parket" v-link="{ path: '/send/group'}">A页</a>
        <a class="btn-parket person-parket" v-link="{ path: '/send/person' }">B页</a>
        <a class="btn-parket my-parket" v-link="{ path: '/list' }">列表</a>
    </div>  
    <router-view></router-view>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                isIndex: true
            }
        }
    }
</script>