<template>
    <div class="page-button">
        <div class="page-button__title page-group__title">有颜色倾向</div>
        <div class="page-button__group">
            <seal-button :type="item" v-for="item in typeList" @click.native="click(item)"  :key="item.id">{{ item }}</seal-button>
        </div>
        <div class="page-button__title page-group__title">镂空按钮</div>
        <div class="page-button__group">
            <seal-button :type="item" v-for="item in typeList" :plain="true":key="item.id">{{ item }}</seal-button>
        </div>
        <div class="page-button__title page-group__title">禁用状态</div>
        <div class="page-button__group">
            <seal-button :type="item" v-for="item in typeList" disabled="disabled" :key="item.id">{{ item }}</seal-button>
        </div>
        <div class="page-button__title page-group__title">圆角按钮</div>
        <div class="page-button__group">
            <seal-button  v-for="item in typeList" :type="item" :circle="true" :key="item.id">{{ item }}</seal-button>
        </div>
        <div class="page-button__title page-group__title">图标按钮</div>
        <div class="page-button__group">
            <seal-button :icon="item.type" v-for="item in btnIconList" :key="item.id">{{ item.name }}</seal-button>
        </div>
        <div class="page-button__title page-group__title">按钮尺寸</div>
        <div class="page-button__group">
            <seal-button :size="item" v-for="item in sizeList" type="success" style="width:auto;" :key="item.id">{{ item }}</seal-button>
        </div>
        <div class="page-button__title page-group__title">块级按钮</div>
        <div class="page-button__group">
            <seal-button  v-for="item in typeList" :type="item" :block="true" :key="item.id">{{ item }}</seal-button>
        </div>

        <div class="page-button__title page-group__title">按钮组</div>
        <div class="page-button__group">
            <div class="sealui-button-group">
                <seal-button type="primary">primary</seal-button>
                <seal-button type="primary">primary</seal-button>
            </div>
            <div class="sealui-button-group">
                <seal-button type="success" size="small">success</seal-button>
                <seal-button type="success" size="small">success</seal-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-button',
    data () {
        return {
            typeList : ['default','primary','info','success','warning','danger','dark','ghost'],
            sizeList : ['mini','small','default','large'],
            btnIconList : [{
                type:'information',
                name : '信息',
            },{
                type:'chevron-left',
                name :'左箭头'
            },{
                type:'chevron-right',
                name : '右箭头'
            },{
                type:'chevron-down',
                name : '下箭头'
            },{
                type:'chevron-up',
                name : '上箭头'
            },{
                type:'close-round',
                name :'关闭'
            },{
                type:'more',
                name : '更多'
            },{
                type:'images',
                name : '图片'
            },{
                type:'gear-a',
                name : '设置'
            }]
        }
    },
    mounted () {

    },
    methods : {
        click (obj) {
            console.log(obj);
        }
    }
};
</script>

<style lang="less" scoped>
    .page-button {

        & .page-button__title{

        }
        & .page-button__group {
            padding: .3rem;
            background: #fff;
            justify-content: center;
            & .sealui-button{
                justify-content: center;
                width:  ~"calc(33.33% - 0.2rem)";
                margin:.1rem;
                &.is-block{
                    width: 100%;
                    margin-left:0
                }
            }
            & .sealui-button-group{
                width: 50%;
                margin-bottom: .3rem;
                & .sealui-button{
                    margin:0;
                    margin-right: -.02rem;
                    width: 50%
                }
            }
        }
    }
</style>
