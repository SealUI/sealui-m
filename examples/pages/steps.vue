<template>
    <div class="page-steps">
        <div class="page-steps__title page-group__title">水平方向</div>
        <div class="page-steps__group">
            <seal-steps :space="2.6" :active="1" finish-status="success" alignCenter process-status="process">
                <seal-step title="已完成"></seal-step>
                <seal-step title="进行中"></seal-step>
                <seal-step title="待进行"></seal-step>
            </seal-steps>
        </div>
        <div class="page-steps__title page-group__title">带描述文字</div>
        <div class="page-steps__group">
            <seal-steps :space="2.6" :active="1" finish-status="success" alignCenter process-status="process">
                <seal-step title="已完成" description="这是一段很长很长很长的描述性文字"></seal-step>
                <seal-step title="进行中" description="这是一段很长很长很长的描述性文字"></seal-step>
                <seal-step title="待进行" description="这是一段很长很长很长的描述性文字"></seal-step>
            </seal-steps>
        </div>
        <div class="page-steps__title page-group__title">垂直方向</div>
        <div class="page-steps__group">
            <seal-steps :space="2.6" :active="1" finish-status="success" alignCenter direction="vertical">
                <seal-step title="已完成" description="这是一段很长很长很长的描述性文字"></seal-step>
                <seal-step title="进行中" description="这是一段很长很长很长的描述性文字"></seal-step>
                <seal-step title="待进行" description="这是一段很长很长很长的描述性文字"></seal-step>
            </seal-steps>

        </div>
        <div class="page-steps__title page-group__title">状态</div>
        <div class="page-steps__group">
            <seal-steps :space="2.6" :active="2" alignCenter process-status="error">
                <seal-step title="已完成" description="这是一段很长很长很长的描述性文字"></seal-step>
                <seal-step title="进行中" description="这是一段很长很长很长的描述性文字"></seal-step>
                <seal-step title="待进行" description="这是一段很长很长很长的描述性文字"></seal-step>
            </seal-steps>

        </div>

    </div>
</template>

<script>
export default {
    name: 'page-steps',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-steps {
        padding: 0rem;
        & .page-steps__group {
            padding:.3rem;
            background-color: #fff;
        }
    }
</style>
