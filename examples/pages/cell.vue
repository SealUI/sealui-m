<template>
    <div class="page-cell">
        <div class="page-cell__group">

            <seal-group title="普通模式">
                <seal-cell title="我的账号" value="保护中" @click.native="onClick">
                    <span slot="after-title">asdasd</span>
                </seal-cell>
            </seal-group>

            <seal-group title="带跳转的列表项">
              <seal-cell title="接收通知" is-link></seal-cell>
              <seal-cell title="隐私" is-link></seal-cell>
            </seal-group>

            <seal-group title="带图标的列表项">
              <seal-cell title="通用" is-link>
                <img slot="icon" width="60" src="~examples/assets/img/seal@2x.png">
              </seal-cell>
            </seal-group>

            <seal-group title="带图标、说明、跳转的列表项">
              <seal-cell title="接收通知" is-link value="说明文字">
                  <img slot="icon" width="60" src="~examples/assets/img/seal@2x.png">
              </seal-cell>
            </seal-group>

            <seal-group title="使用slot显示复杂内容">
              <seal-cell title="slot 内容">
                <div slot="value">
                  <span style="color: green">hello,i'm sealui</span>
                </div>
              </seal-cell>
            </seal-group>

            <seal-group title="当有设置link属性时，isLink属性会设为true以显示箭头">
              <seal-cell title="前往Button页面" link="/demos/button"></seal-cell>
              <seal-cell title="前往Demo页面" :link="{path:'/demos'}"></seal-cell>
            </seal-group>

            <seal-group title="缩略图">
                <seal-cell title="缩略图" desc='说明文字说明文字说明文字说明文字说明文字说明文字'>
                  <img slot="icon" style="width:.65rem;margin-right:.1rem" src="~examples/assets/img/seal@2x.png">
              </seal-cell>
            </seal-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-cell',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        onClick () {
          console.log('on click')
        }
    }
};
</script>

<style lang="less" scoped>
    .page-cell {
        padding: 0;
        & .page-cell__group {
            margin-bottom: .3rem;
        }
    }
</style>
