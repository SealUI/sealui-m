<template>
    <div class="page-countdown">
        <div class="page-countdown__group">
            <seal-group title="自动倒计时">
                <seal-cell title="15s" v-model="value">
                    <seal-countdown slot="value" v-model="time1" @on-finish="finish" v-show="show"></seal-countdown>
                </seal-cell>
            </seal-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-countdown',
    data () {
        return {
            time1: 5,
            show: true,
            value: ''
        }
    },
    mounted (){

    },
    methods : {
        finish (index) {
          this.show = false
          this.value = '时间到'
          console.log('current index', index)
        },
    }
};
</script>

<style lang="less" scoped>
    .page-countdown {
        padding: 0rem;
        & .page-countdown__group {
            margin-bottom: .15rem;
        }
    }
</style>
