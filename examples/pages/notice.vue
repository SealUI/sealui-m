<template>
    <div class="page-notice">
        <div class="page-notice__group">

            <seal-notice content="好未来(学而思)旗下在线教育高端品牌" icon="close" :type="type" v-model="value" className="asdasd" @on-click="noticeClick">
                <i :class="'sealui-icon sealui-notice__'+icon" slot="icon" v-if="icon"></i>
            </seal-notice>

            <seal-button :block="true" @click.native="open('','')">Open Default Notice</seal-button>
            <seal-button :block="true" type="primary" @click.native="open('primary','icon-wait')">Open Primary Notice</seal-button>
            <seal-button :block="true" type="success" @click.native="open('success','icon-email')">Open Success Notice</seal-button>
            <seal-button :block="true" type="warning" @click.native="open('warning','icon-edit')">Open Warning Notice</seal-button>
            <seal-button :block="true" type="danger" @click.native="open('danger','icon-notice')">Open Danger Notice</seal-button>
            <seal-button :block="true" type="info" @click.native="open('info','icon-info')">Open Info Notice</seal-button>
            <seal-button :block="true" type="dark" @click.native="open('dark','icon-location')">Open Dark Notice</seal-button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-notice',
    data () {
        return {
            value:false,
            type:'',
            icon:'',
            conf : [{
                'content':'因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银',
                icon:'notice',
                type:'primary',
                link:'ddddd'
            },{
                'content':'因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银',
                icon:'info',
                type:'success'
            },{
                'content':'因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银',
                icon:'location',
                type:'warning'
            },{
                'content':'因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银',
                icon:'edit',
                type:'danger'
            },{
                'content':'因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银',
                icon:'email',
                type:'info'
            },{
                'content':'因全国公民身份系统升级，添加银行卡银行卡银行卡银行卡银',
                icon:'wait',
                type:'dark'
            }]
        }
    },
    mounted (){

    },
    methods : {
        noticeClick () {
            console.log('noticeClick');
        },
        open (type,icon) {
            this.type=type;
            this.icon = icon;
            this.value = true
        },
    }
};
</script>

<style lang="less" scoped>
    .page-notice {
        padding: 0rem;
        & .page-notice__group {
            margin-bottom: .3rem;
        }

        & .sealui-notice{
            margin:0rem 0;
        }
        & .sealui-button{
            display: block;
            margin:.2rem;
            width: 95%;
        }
    }
</style>
