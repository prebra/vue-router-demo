<style>
    .send-parket{
        width: 80%;
        margin-left: 10%;
        margin-top: 2rem;
        font-size: 18px;
    }
    .parket-container{
        height: 4rem;
        margin-top: 2rem;
        line-height: 4rem;
        background: #fff;
        border-radius: 5px;
    }
    .parket-left-text{
        float: left;
        width: 8rem;
        text-indent: .5rem;
    }
    .parket-input{
        height: 4rem;
        margin-left: 8rem;
        margin-right: 3rem;
    }
    .parket-container input{
        width: 100%;
        height: 4rem;
        display: block;
        text-align: right;
        border: none;
        font-size: 18px;
    }
    .parket-right-text{
        float: right;
        width: 3rem;
        text-align: center;
    }
    .btn-send-parket{
        width: 100%;
        margin-left: 0;
        margin-top: 0;
        background: #fa6352;
        color: #fff;
    }
    .error-tips{
        height: 3rem;
        line-height: 3rem;
        font-size: 14px;
        color: #ffb22e;
    }
</style>

<template>
    <div class="send-parket">
        <div v-show="isShow" class="parket-container parket-num">
            <div class="parket-left-text">input1</div>
            <div class="parket-right-text">个</div>
            <div class="parket-input">
                <input v-model="num" type="number">
            </div>
        </div>
        <div class="parket-container parket-num">
            <div class="parket-left-text">input2</div>
            <div class="parket-right-text">元</div>
            <div class="parket-input">
                <input v-model="sum" type="number">
            </div>
        </div>
        <div class="error-tips">{{ errorTips }}</div>
        <div class="btn-parket btn-send-parket" v-on:click="sendPacket">提交</div>
    </div>  
</template>

<script>
   var strategies = {
        isNotEmpty: function(value, errorMsg) {
            if(value === '') {
                return errorMsg;
            }
        },
        isNumber: function(value, errorMsg) {
            if(!/^[1-9]\d*$/g.test(value)) {
                return errorMsg;
            }
        }
   }

    var obj = {
        data: function() {
            return {
                isShow: false,
                num: '',
                sum: '',
                errorTips: ''
            }
        },
        ready: function () {
            if( this.$route.params.username == 'group') {
                this.isShow = true;
            } else {
                this.num = 1;
            }
        },
        methods: {
            sendPacket: function() {
                var validator = [];
                validator.push({
                    value: this.num,
                    rules: ['isNotEmpty', 'isNumber'],
                    strategie: ['input1不能为空', '请输入正整数']
                });
                validator.push({
                    value: this.sum,
                    rules: ['isNotEmpty', 'isNumber'],
                    strategie: ['input2不能为空', '请输入正整数']
                });
                for(var i = 0, item; item = validator[i++];) {
                    var strategieArr = item.rules;
                    for(var j = 0; j < strategieArr.length; j++) {
                        var errorMsg = strategies[strategieArr[j]](item.value, item.strategie[j]);
                        if(errorMsg) {
                            this.errorTips = errorMsg;
                            return;
                        } else {
                            this.errorTips = '';
                        }
                    }
                }

                alert('success');
               
            }
        }
    };

    module.exports = obj;
</script>