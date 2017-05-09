<template>
    <div class="page-actionsheet">
        <div class="page-actionsheet__group">
            <seal-button :block="true" @click.native="openIOSActionsheet">IOS Actionsheet</seal-button>
            <seal-button :block="true" @click.native="openAndroidActionsheet">Android Actionsheet</seal-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-actionsheet',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        openIOSActionsheet () {
            this.$actionsheet([
                {
                    label: '拍照',
                    onClick: function () {
                        console.log('拍照');
                    }
                },
                {
                    label: '从相册选取',
                    onClick: function () {
                        console.log('拍照');
                    }
                },
                {
                    label: '菜单一',
                    onClick: function () {
                        console.log('菜单一');
                    }
                },
                {
                    label: '菜单二',
                    onClick: function () {
                        console.log('菜单二');
                    }
                }
            ],[
                {
                    label: '取消',
                    onClick: function () {
                        console.log('拍照');
                    }
                }
            ],{
                title : '标题或描述',
                className: 'custom-classname'
            })
        },
        openAndroidActionsheet () {
            this.$actionsheet([
                {
                    label: '拍照',
                    onClick: function () {
                        console.log('拍照');
                    }
                },
                {
                    label: '从相册选取',
                    onClick: function () {
                        console.log('拍照');
                    }
                }
            ],[
                {
                    label: '取消',
                    onClick: function () {
                        console.log('拍照');
                    }
                }
            ],{
                className: 'custom-classname',
                isAndroid:true
            })
        }
    }
};
</script>

<style lang="less" scoped>
    .page-actionsheet {
        padding: 0.15rem;
        & .page-actionsheet__group {
            margin-bottom: .15rem;
        }
        .sealui-button{
            margin:.15rem 0;
        }
    }
</style>
