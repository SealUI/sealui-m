<template>
    <div class="page-divider">
        <div class="page-divider__group">
            <seal-divider>华丽的分割线</seal-divider>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-divider',
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
    .page-divider {
        padding: 0.3rem;
        & .page-divider__group {
            margin-bottom: .3rem;
        }
    }
</style>
