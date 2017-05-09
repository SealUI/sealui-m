<template>
    <div class="page-preview">
        <div class="page-preview__group">
            <seal-preview header-label="付款金额" header-value="¥2160.00" :body-items="list" :footer-buttons="buttons"></seal-preview>

            <seal-preview header-label="付款金额" header-value="¥3120.00" :body-items="list" :footer-buttons="buttons1"></seal-preview>

            <seal-preview header-label="付款金额" header-value="¥2160.00" :body-items="list" :footer-buttons="buttons2"></seal-preview>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-preview',
    data () {
        return {
            list: [{
                label: '商品名称',
                value: '初一语文春暑尖子班[全国通用版]'
              }, {
                label: '课前服务',
                value: '短信提醒、未出勤提醒、讲义下载、预习任务'
              }, {
                label: '课堂服务',
                value: '课堂测验、学习报告、板书下载'
            }],
            buttons: [{
                style: 'default',
                text: '辅助操作'
              }, {
                style: 'primary',
                text: '跳转到首页',
                link: '/'
            }],
            buttons1: [{
                style: 'default',
                text: '辅助操作'
            }],
            buttons2: [{
                style: 'danger',
                text: '辅助操作'
            },{
                style: 'success',
                text: '辅助操作'
            },{
                style: 'default',
                text: '辅助操作'
            }],
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-preview {
        padding: 0rem;
        & .page-preview__group {
            margin-bottom: .3rem;
        }
        & .sealui-preview{
            margin:.3rem 0;
        }
    }
</style>
