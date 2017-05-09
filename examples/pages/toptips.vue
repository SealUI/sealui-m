<template>
    <div class="page-toptips">
        <div class="page-toptips__title">顶部提示信息</div>
        <div class="page-toptips__group">
            <seal-button :block="true" type="success" @click.native="showSuccessTip('top')">显示顶部成功提示</seal-button>
            <seal-button :block="true" type="danger" @click.native="showErrorTip('top')">显示顶部错误提示</seal-button>
            <seal-button :block="true" type="warning" @click.native="showWarnTip('top')">显示顶部警告提示</seal-button>
            <seal-button :block="true" type="info" @click.native="showInfoTip('top')">显示顶部一般提示</seal-button>
        </div>

        <div class="page-toptips__title">底部提示信息</div>
        <div class="page-toptips__group">
            <seal-button :block="true" type="success" @click.native="showSuccessTip('bottom')">显示底部成功提示</seal-button>
            <seal-button :block="true" type="danger" @click.native="showErrorTip('bottom')">显示底部错误提示</seal-button>
            <seal-button :block="true" type="warning" @click.native="showWarnTip('bottom')">显示底部警告提示</seal-button>
            <seal-button :block="true" type="info" @click.native="showInfoTip('bottom')">显示底部一般提示</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-toptips',
    data () {
        return {

        }
    },
    mounted (){
    },
    methods : {
        showSuccessTip (position) {
            this.$toptips({
                message:'成功信息',
                position:position,
                type:'success',
                duration:2000
            })
        },
        showErrorTip (position) {
            this.$toptips({
                message:'出错啦',
                position:position,
                type:'error',
                duration:2000
            })
        },
        showWarnTip (position) {
            this.$toptips({
                message:'警告信息',
                position:position,
                type:'warn',
                duration:2000
            })
        },
        showInfoTip (position) {
            this.$toptips({
                message:'一般信息',
                position:position,
                type:'info',
                duration:2000
            })
        }
    }
};
</script>

<style lang="less" scoped>
    .page-toptips {
        padding: 0rem;
        & .page-toptips__title{
            position: relative;
            padding:0.3rem 0 .1rem .3rem;
            font-size: .28rem;
            color:#999;
            &:before{
                content: " ";
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                height: 1px;
                border-top: 1px solid #D9D9D9;
                color: #D9D9D9;
                -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
            &:after{
                content: " ";
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 1px;
                border-bottom: 1px solid #D9D9D9;
                color: #D9D9D9;
                -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
            &:first-child{
                &:before{
                    display: none;
                }
            }
        }
        & .page-toptips__group {
            padding:.3rem;
            background-color: #fff;
        }
        & .sealui-button{
            margin-bottom:.3rem;
        }
    }
</style>
