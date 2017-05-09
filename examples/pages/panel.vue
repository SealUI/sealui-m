<template>
    <div class="page-panel">
        <div class="page-panel__group">

            <seal-panel :list="list" :header="headerType1" :footer="footerType1" type="1"></seal-panel>

            <seal-panel :list="list" :header="headerType2" type="2"></seal-panel>

            <seal-panel :list="list" :header="headerType3" type="3"></seal-panel>

            <seal-panel :list="list" :header="headerType4" type="4"></seal-panel>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-panel',
    data () {
        return {
            headerType1:'图文组合列表',
            headerType2:'文字组合列表',
            headerType3:'小图文组合列表',
            headerType4:'文字列表附来源',
            footerType1:{
                url:'http://sealui-m.sealui.com'
            },
            list : [{
                img: 'https://avatars0.githubusercontent.com/u/20392063?v=3&s=100',
                title: '标题一',
                desc: '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。',
                url: '/',
                info:['来源：海边直播','发布时间：2017-02-23']
            },
            {
                img: 'https://avatars0.githubusercontent.com/u/20392063?v=3&s=100',
                title: '标题二',
                desc: '界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。',
                url: {
                  path: '/demos',
                  replace: false
                }
            }]
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-panel {
        padding: 0rem;
        & .page-panel__group {
            margin-bottom: .3rem;
        }
        & .sealui-panel:first-child{
            margin-top:-1px
        }
    }
</style>
