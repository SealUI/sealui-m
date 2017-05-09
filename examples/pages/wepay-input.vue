<template>
    <div class="page-wepay-input">
        <div class="page-wepay-input__group">
            <wepay-input title="支付金额" description="最多可输入金额500元" info="支付金额给商户" v-model="money" name="paynumber">
                <seal-button type="success" slot="button" :block="true">立即支付 {{money}}</seal-button>
            </wepay-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-wepay-input',
    data () {
        return {
             money: ''
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-wepay-input {
        padding: 0rem;
        & .page-wepay-input__group {
            margin-bottom: .3rem;
        }
    }
</style>
