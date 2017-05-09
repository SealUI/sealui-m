<template>
    <div class="page-popup">
        <div class="page-group__title">动态创建模式</div>
        <div class="page-popup__group">
            <seal-button :block="true" type="success" @click.native="showPopUP('center')">中间弹出</seal-button>
            <seal-button :block="true" type="danger" @click.native="showPopUP('left')">左侧弹出</seal-button>
            <seal-button :block="true" type="info" @click.native="showPopUP('right')">右侧弹出</seal-button>
            <seal-button :block="true" type="dark" @click.native="showPopUP('bottom')">底部弹出</seal-button>
        </div>
        <div class="page-group__title">vue模式</div>
        <div class="page-popup__group">
            <seal-button :block="true" type="success" @click.native="show1 = true;position = 'center'">中间弹出</seal-button>
            <seal-button :block="true" type="danger" @click.native="position = 'left';show1 = true">左侧弹出</seal-button>
            <seal-button :block="true" type="info" @click.native="position = 'right';show1 = true">右侧弹出</seal-button>
            <seal-button :block="true" type="dark" @click.native="position = 'bottom';show1 = true">底部弹出</seal-button>
        </div>
        <seal-popup :position="position"  v-model="show1" width="60%">
            <div style="padding:.3rem;">
            SealUI-M 是一套移动端的基础组件库，由SealUI Team团队维护。<br>目的是为了帮助业务线上的快速开发提供基础支持！
             <seal-button :block="true" type="success"  @click.native="show1 = false">中间弹出</seal-button>
             </div>
        </seal-popup>
    </div>
</template>

<script>
import Vue from 'vue';
import $ from 'sealui-m/src/utils/util';
export default {
    name: 'page-popup',
    data () {
        return {
            show1:false,
            position:'center',
            btns : [{
                label: '取消',
                type: 'danger',
                disabled:false,
                onClick: function(){

                }
            },{
                label: '确定',
                type: 'success',
                disabled:false,
                onClick: function(){

                }
            }],

        }
    },
    mounted (){

    },
    methods : {
        showPopUP (position) {
            this.$popup({
                title:'标题',
                content:'SealUI-M 是一套移动端的基础组件库，由SealUI Team团队维护。<br>目的是为了帮助业务线上的快速开发提供基础支持！<buttontype="button" class="sealui-button is-danger is-block" id="closePopup"><span>关闭</span></button>',
                position:position,
                closeOnClickModal:true,
                opened:function(){
                    $('#closePopup').on('click',function(){
                        Vue.$popup().hide();
                    })
                },
                buttons: position == 'center'  ? this.btns : ''
            });
        }
    }
};
</script>

<style lang="less" scoped>
    .page-popup {
        padding: 0rem;
        & .page-popup__group {
            margin-bottom: .15rem;
            padding: 0 0.15rem;
        }
        & .sealui-button{
            margin:.15rem 0;
        }
    }
</style>
