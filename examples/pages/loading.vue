<template>
    <div class="page-loading">
        <div class="page-loading__group">
            <seal-button @click.native="openLoading" :block="true">打开 loading</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-loading',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        openLoading () {
            let loading = this.$loading('加载中...');
            setTimeout(function () {
                loading.hide();
            },3000)
        }
    }
};
</script>

<style lang="less" scoped>
    .page-loading {
        padding: .3rem;
        & .page-loading__group {
            margin-bottom: 3px;
        }
    }
</style>
