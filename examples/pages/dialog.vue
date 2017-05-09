<template>
    <div class="page-dialog">
        <div class="page-dialog__group">
            <seal-button :block="true" @click.native="openTitleDialog">一般样式</seal-button>
            <seal-button :block="true" @click.native="openDialog">不带title</seal-button>
            <seal-button :block="true" @click.native="openAlert">打开Alert</seal-button>

            <seal-button :block="true" @click.native="openConfirm">打开Confirm</seal-button>

            <seal-button :block="true" @click.native="openButtonColor">自定义按钮颜色</seal-button>
            <seal-button :block="true" @click.native="openWhitClose">带关闭图标</seal-button>
            <seal-button :block="true" @click.native="closeOnClickModal">遮罩可关闭</seal-button>
            <seal-button :block="true" @click.native="openAlertPlugin">Alert 插件</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-dialog',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        openAlertPlugin () {
            this.$alert('alert 插件');
            //this.$seal.toast();
        },
        closeOnClickModal () {
            this.$confirm('遮罩可关闭',{
                title:'标题',
                closeOnClickModal:true,
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            })
        },
        openConfirm () {
            this.$confirm('普通的confirm',{
                title:'标题',
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            })
        },
        openAlert() {
            this.$alert('自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert自定义标题的alert', {
                title: '自定义标题',
                buttons: [{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        },
        openTitleDialog () {
            this.$msgbox({
                title: 'dialog标题',
                content: 'dialog内容',
                className: 'custom-classname',
                opened:function(){
                    console.log('打开');
                },
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        },
        openDialog () {
            this.$msgbox({
                content: 'dialog内容',
                className: 'custom-classname',
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'primary',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            });
        },
        openButtonColor () {
            this.$confirm('自定义按钮的颜色',{
                title:'按钮颜色',
                buttons: [{
                    label: '取消',
                    type: 'danger',
                    onClick: function () {
                        console.log('取消');
                    }
                },{
                    label: '确定',
                    type: 'success',
                    onClick: function () {
                        console.log('确定');
                    }
                }]
            })
        },
        openWhitClose () {
            this.$confirm('带关闭图标的messagebox',{
                title:'带关闭图标',
                showCloseIcon:true,
            })
        }
    }
};
</script>

<style lang="less" scoped>
    .page-dialog {
        padding: 0.3rem;
        & .page-dialog__group {
            margin-bottom: .3rem;
        }
        & .sealui-button{
            margin-bottom:.3rem;
        }
    }
</style>
