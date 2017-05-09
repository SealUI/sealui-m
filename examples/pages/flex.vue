<template>
    <div class="page-flex">
        <div class="page-flex__group">

            <seal-flex>
                <flex-item><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item v-for="i in 2"  :key="i"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item  v-for="i in 3"  :key="i"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item  v-for="i in 4"  :key="i"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

            <seal-flex>
                <flex-item  v-for="i in 5"  :key="i"><div class="placeholder">sealui</div></flex-item>
            </seal-flex>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-flex',
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
    .page-flex {
        padding: 0.3rem;
        & .page-flex__group {
            margin-bottom: .3rem;
        }
        .placeholder {
            margin: 5px;
            padding: 0 .1rem;
            background-color: #ebebeb;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            color: #cfcfcf;
            font-size: .3rem
        }
    }
</style>
