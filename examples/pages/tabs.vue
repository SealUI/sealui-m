<template>
    <div class="page-tabs">
        <div class="page-group__title">默认</div>
        <div class="page-tabs__group">
            <seal-tabs>
                <tab-item selected @on-click="tip">标签一</tab-item>
                <tab-item>标签二</tab-item>
                <tab-item>标签三</tab-item>
            </seal-tabs>
        </div>

         <div class="page-group__title">颜色倾向</div>
        <div class="page-tabs__group">
            <seal-tabs v-for="item in typeList" :type="item"  :key="item.id">
                <tab-item selected @on-click="tip">标签一</tab-item>
                <tab-item>标签二</tab-item>
                <tab-item>标签三</tab-item>
            </seal-tabs>
        </div>

        <div class="page-group__title">不带动画</div>
        <div class="page-tabs__group">
            <seal-tabs :animate="false">
                <tab-item selected>标签一</tab-item>
                <tab-item>标签二</tab-item>
                <tab-item>标签三</tab-item>
            </seal-tabs>

        </div>

        <div class="page-group__title">设置bar颜色</div>
        <div class="page-tabs__group">
            <seal-tabs :line-width='.01' active-color='#e2413d' >
                <tab-item selected>标签一</tab-item>
                <tab-item>标签二</tab-item>
                <tab-item>标签三</tab-item>
            </seal-tabs>
        </div>

        <div class="page-group__title">禁用状态</div>
        <div class="page-tabs__group">
            <seal-tabs :line-width='.02' active-color='#fc378c' >
                <tab-item disabled>标签一</tab-item>
                <tab-item selected>标签二</tab-item>
                <tab-item>标签三</tab-item>
            </seal-tabs>
        </div>

    </div>
</template>

<script>
export default {
    name: 'page-tabs',
    data () {
        return {
            index : 0,
            typeList : ['primary','success','warning','danger','info','dark']
        }
    },
    mounted (){

    },
    methods : {
        tip () {
            console.log('tip');
        }
    }
};
</script>

<style lang="less" scoped>
    .page-tabs {
        padding: 0rem;
        & .page-tabs__group {
            margin-bottom: .3rem;
            background-color: #fff;
        }
    }
</style>
