<template>
    <div class="page-msg">
        <div class="page-msg__group">
            <seal-button :block="true" :type="item" v-for="item in typeList" @click.native="openMsg(item)" :class="className"  :key="item.id">{{ item }} 提示页</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-msg',
    data () {
        return {
            typeList : ['success','warn','error','info','wait']
        }
    },
    mounted (){

    },
    methods : {
        openMsg (item) {
            this.$router.push(`/demos/msg/msg${item}`)
        }
    },
    computed: {
        className () {

        }
    }
};
</script>

<style lang="less" scoped>
    .page-msg {
        padding: 0.3rem;
        & .page-msg__group {
            margin-bottom: .3rem;
        }
        & .sealui-button{
            margin-bottom:.3rem
        }
    }
</style>
