<template>
    <div class="page-sendcode">
        <div class="page-sendcode__group">
            <seal-group title="默认用法">
                <seal-cell>
                    <i slot="icon" class="demo-icons-phone"></i>
                    <input class="sealui-input" placeholder="请输入手机号码" type="text" slot="after-title"></input>
                    <!-- ↓↓关键代码是这里↓↓ -->
                    <seal-sendcode slot="value" v-model="start1" @click.native="sendCode" type="warning" size="small" second="5"></seal-sendcode>
                    <!-- ↑↑关键代码是这里↑↑ -->
                </seal-cell>
            </seal-group>
            <div class="demo-small-pitch">
                <seal-sendcode
                    v-model="start2"
                    @click.native="sendCode2"
                    second="5"
                    initStr="点我啊，你点我啊"
                    runStr="在 {%s} 秒后你就可以重新获取啦"
                    resetStr="你可以重新获取验证码啦"
                    size="large"
                    :block="true"
                    type="success"
                ></seal-sendcode>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-sendcode',
    data () {
        return {
            start1: false,
            start2:false
        }
    },
    mounted (){

    },
    methods : {
        sendCode() {
            //this.$dialog.loading.open('发送中...');
            setTimeout(() => {

                this.start1 = true;
                //this.$dialog.loading.close();

                // this.$dialog.toast({
                //     mes: '已发送',
                //     icon: 'success',
                //     timeout: 1500
                // });

            }, 1000);
        },
        sendCode2() {
            this.start2 = true;
        }
    }
};
</script>

<style lang="less" scoped>
    .page-sendcode {
        padding:0;
        & .page-sendcode__group {
            margin-bottom: .15rem;
        }
        .demo-small-pitch{
            padding:.3rem;
        }
    }
</style>
