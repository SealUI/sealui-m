<template>
    <div class="page-tag">

        <div class="page-tag__title">基本用法</div>
        <div class="page-tag__group">
            <seal-tag color="default">default</seal-tag>
            <seal-tag color="default" type="border" closable>default</seal-tag>
            <seal-tag color="default" type="dot">default</seal-tag>
            <seal-tag color="default" type="dot" closable>default</seal-tag>
        </div>

        <div class="page-tag__title">有颜色倾向</div>
        <div class="page-tag__group">
            <seal-tag :color="item" v-for="item in colorList" :key="item.id">{{ item }}</seal-tag>
        </div>

         <div class="page-tag__title">圆角</div>
        <div class="page-tag__group">
            <seal-tag :color="item" rounded v-for="item in colorList"  :key="item.id">{{ item }}</seal-tag>
        </div>

        <div class="page-tag__title">Type为dot</div>
        <div class="page-tag__group">
            <seal-tag :color="item" v-for="item in colorList" type="dot"  :key="item.id">{{ item }}</seal-tag>
        </div>

        <div class="page-tag__title">Type为border</div>
        <div class="page-tag__group">
            <seal-tag :color="item" v-for="item in colorList" type="border"  :key="item.id">{{ item }}</seal-tag>
        </div>

        <div class="page-tag__title">带关闭按钮</div>
        <div class="page-tag__group">
            <seal-tag :color="item" v-for="item in dynamicTags" type="border" closable @onClose="handleClose(item)"  :key="item.id">{{ item }}</seal-tag>
        </div>

        <div class="page-tag__title">不同色彩的带关闭按钮</div>
        <div class="page-tag__group">
            <seal-tag :color="item" v-for="item in dynamicTags" closable @onClose="handleClose(item)"  :key="item.id">{{ item }}</seal-tag>
        </div>

    </div>
</template>

<script>
export default {
    name: 'page-tag',
    data () {
        return {
            colorList : ['default','primary','success','info','warning','danger','dark'],
            dynamicTags : ['default','primary','success','info','warning','danger','dark']
        }
    },
    mounted (){

    },
    methods : {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
    }
};
</script>

<style lang="less" scoped>
    .page-tag {
        padding: 0rem;
        & .page-tag__title{
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
        & .sealui-tag{
            margin: .05rem;
            text-align: center
        }
        & .page-tag__group{
            background-color: #fff;
            padding:.15rem;
        }
    }
</style>
