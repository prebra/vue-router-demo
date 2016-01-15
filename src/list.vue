<style>
   html{
        /*background: #fff;*/
   }
   .tab{
        height: 3rem;
        border-bottom: 2px solid #ffb22e;
        line-height: 3rem;
        word-spacing: -9px;
        font-size: 18px;
   }
   .tab-link{
        display: inline-block;
        width: 50%;
        text-align: center;
        background: #fff;
        color: #ffb22e;
   }
   .tab .active{
        color: #fff;
        background: #ffb22e;
   }
   .list-wrapper .list{
        display: none;
        font-size: 16px;
        color: #3f3f3f;
   }
   .item{
        height: 4rem;
        padding: 0 1rem;
        line-height: 4rem;
        border-bottom: 1px solid #F5F0F0;
        color: #fff;
   }
   .item span:nth-child(2){
        float: right;
   }
   .list-wrapper .active{
        display: block;
   }
</style>

<template>
    <div class="tab">
        <a class="tab-link active">C状态</a>
        <a class="tab-link">D状态</a>
    </div>
    <div class="list-wrapper">
        <ul id="receive-packet" class="list active">
            <li v-for="receive in receives" class="item">
                <span>{{ receive.name }}</span>
                <span>{{ receive.sum }}元</span>
            </li>
        </ul>
        <ul id="send-packet" class="list">
            <li v-for="send in sends" class="item">
                <span>{{ send.name }}</span>
                <span>{{ send.sum }}元</span>
            </li>
        </ul>
    </div>
</template>

<script>
    var data = {
        receives: [
            {name: "Daivi", sum: 0.01},
            {name: "大蜂蜜", sum: 188},
            {name: "乐乐", sum: 1},
            {name: "哈哈", sum: 100},
            {name: "猴赛雷", sum: 1.5},
            {name: "一库", sum: 0.09}
        ],
        sends: [
            {name: "斯国一", sum: 0.01},
            {name: "永屌", sum: 1.5},
            {name: "掏粪boy", sum: 0.09}
        ]
    };

    var obj = {
            data: function() {
                return data
            },
            ready: function () {
                $('.tab').on('click', '.tab-link', function() {
                    var index = $(this).index();
                    if($(this).hasClass('active')) return;
                    $('.active').removeClass('active');
                    $('.tab .tab-link').eq(index).addClass('active');
                    $('.list-wrapper .list').eq(index).addClass('active');
                })
            },
            methods: {
                switchTab: function(index) {
                    console.log(index);
                }
            }
    };

    module.exports = obj;
</script>