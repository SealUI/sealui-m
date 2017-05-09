<template>
    <div class="page-tabbar">
        <div class="page-tabbar__group">
            <div class="box-content">
                content
            </div>
            <seal-tabbar>
                <tabbar-item selected :showdot="showdot" @on-click="hideDot">
                    <i class="sealui-icon sealui-icon-social-apple-outline" slot="icon"></i>
                    <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    <span slot="label">首页</span>
                </tabbar-item>
                 <tabbar-item @on-click="clicked" badge="98">
                    <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    <span slot="label">分类</span>
                </tabbar-item>
                 <tabbar-item>
                    <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    <span slot="label">购物车</span>
                </tabbar-item>
                <tabbar-item>
                    <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    <span slot="label">我的</span>
                </tabbar-item>
            </seal-tabbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-tabbar',
    data () {
        return {
            showdot : true
        }
    },
    mounted (){

    },
    methods : {
        clicked () {
            console.log('clicked');
        },
        hideDot () {
            this.showdot = false
        }
    }
};
</script>

<style lang="less" scoped>
    .page-tabbar {
        padding: 0rem;
        & .page-tabbar__group {
            margin-bottom: .3rem;
        }
        & .box-content{
            position: absolute;
            top:0rem;
            bottom:.88rem;
            background: #fff;
            width: 100%;
        }
        & img{
            display: block;
        }
    }
</style>
