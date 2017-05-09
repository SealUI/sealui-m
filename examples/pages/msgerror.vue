<template>
    <div class="page-msg">
        <div class="page-msg__group">
            <seal-msg :title="title" :desc="desc" :icon="icon" :buttons="buttons"></seal-msg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-msg',
    data () {
        return {
            title:"失败",
            desc:"内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href='javascript:void(0);'>文字链接</a>",
            icon:'error',
            buttons: [{
                type: 'primary',
                text: '确 定',
                onClick:this.clickTip
            }, {
                type: 'default',
                text: '取 消',
                link: '/demos/msg'
            }]
        }
    },
    mounted (){

    },
    methods : {
        clickTip () {
            this.$seal.alert('点击了确定')
        }
    }
};
</script>

<style lang="less" scoped>
    .page-msg {
        padding: 0rem;
        & .page-msg__group {
            margin-bottom: .3rem;
        }
    }
</style>
