<template>
    <div class="page-list">
        <div class="page-list__group">
            <seal-group title="列表样式">
                <seal-cell link="/list/1" title="列表样式一">列表样式一</seal-cell>
                <seal-cell link="/list/2" title="列表样式二" is-link>列表样式二</seal-cell>
                <seal-cell link="/list/3" title="列表样式三" is-link>列表样式三</seal-cell>
                <seal-cell link="/list/4" title="列表样式四" is-link>列表样式四</seal-cell>
                <seal-cell link="/list/5" title="列表样式五" is-link>列表样式五</seal-cell>
            </seal-group>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    .page-list {
        padding: 0.3;
        & .page-list__group {
            margin-bottom: .15rem;
        }
    }
</style>
