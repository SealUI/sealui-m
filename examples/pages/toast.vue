<template>
    <div class="page-toast">
        <div class="page-toast__group">
            <seal-button @click.native="openSuccessToast" :block="true">打开 Success Toast</seal-button>
            <seal-button @click.native="openWarnToast" :block="true">打开 Warn Toast</seal-button>
            <seal-button @click.native="openErrorToast" :block="true">打开 Error Toast</seal-button>
            <seal-button @click.native="openLoadingToast" :block="true">打开 Loading Toast</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-toast',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        openSuccessToast () {
            this.$toast('操作成功',{
                duration : 3000,
                callback: function(){ console.log('close') }
            });
        },
        openWarnToast () {
            this.$toast('警告提示',{
                type:'warn',
                duration : 3000,
                callback: function(){ console.log('close') }
            });
        },
        openErrorToast () {
            this.$toast('错误提示',{
                type:'error',
                duration : 3000,
                callback: function(){ console.log('close') }
            });
        },
        openLoadingToast () {
            this.$toast('加载数据',{
                type:'loading',
                duration : 3000,
                callback: function(){ console.log('close') }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    .page-toast {
        padding: .3rem;
        & .page-toast__group {
            margin-bottom: .3rem;
        }
        & .sealui-button{
            margin-top:.4rem;
        }
    }
</style>
