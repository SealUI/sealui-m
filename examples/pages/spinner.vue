<template>
    <div class="page-spinner">
        <div class="page-spinner__group">
            <seal-group>
                <seal-cell :title="type" v-for="type in types"  :key="type.id">
                    <seal-spinner :type="type" slot="value"></seal-spinner>
                </seal-cell>
            </seal-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-spinner',
    data () {
        return {
            types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-spinner {
        padding: 0rem;
        & .page-spinner__group {
            margin-bottom: .3rem;
        }
    }
</style>
