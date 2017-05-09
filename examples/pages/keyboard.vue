<template>
    <div class="page-keyboard">
        <div class="page-keyboard__group">
            <seal-button :block="true" type="success" @click.native="show1 = true">打开</seal-button>
            <seal-button :block="true" type="success" @click.native="show2 = true">打开 - 打乱键盘顺序</seal-button>
        </div>

        <seal-keyboard v-model="show1" :input-done="done1" ref="kbdemo1"></seal-keyboard>
        <seal-keyboard v-model="show2" :input-done="done2" disorder ref="kbdemo2"></seal-keyboard>
    </div>
</template>

<script>
export default {
    name: 'page-keyboard',
    data() {
            return {
                show1: false,
                show2: false
            }
        },
        methods: {
            done1(val) {
                console.log('输入的密码是：' + val);
                this.$toptips({
                    message : '验证支付密码',
                    duration : 3000
                })
                setTimeout(() => {
                    this.$refs.kbdemo1.$emit('keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
                }, 3000);
            },
            done2(val) {
                console.log('输入的密码是：' + val + ' - 无序');
                this.$toptips({
                    message : '验证支付密码',
                    duration : 3000
                })
                setTimeout(() => {
                    this.$refs.kbdemo2.$emit('keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
                }, 3000);
            }
        }
};
</script>

<style lang="less" scoped>
    .page-keyboard {
        padding: 0.3rem;
        & .page-keyboard__group {
            margin-bottom: .3rem;

            & .sealui-button{
                margin:.2rem 0;
            }
        }
    }
</style>
