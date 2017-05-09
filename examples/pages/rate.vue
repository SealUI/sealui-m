<template>
    <div class="page-rate">
        <div class="page-rate__group">
            <seal-group title="普通使用">
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate1"></seal-rate>
                    <span slot="value">值是: {{rate1}}</span>
                </seal-cell>
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate2"></seal-rate>
                    <span slot="value">设置默认值</span>
                </seal-cell>
                <seal-cell>
                    <seal-rate slot="after-title" count="7" v-model="rate3"></seal-rate>
                    <span slot="value">设置多个</span>
                </seal-cell>
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate4" color="#00FF16" activeColor="#0078D7"></seal-rate>
                    <span slot="value">自定义颜色</span>
                </seal-cell>
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate5" size="18px"></seal-rate>
                    <span slot="value">自定义大小</span>
                </seal-cell>
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate6" :readonly="true"></seal-rate>
                    <span slot="value">只读</span>
                </seal-cell>
            </seal-group>
            <seal-group title="带提示文字">
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate7" :showText="['很差','还行','一般','挺好','非常好']"></seal-rate>
                    <span slot="value">提示文字</span>
                </seal-cell>
                <seal-cell>
                    <seal-rate slot="after-title" v-model="rate8" :showText="tipText"></seal-rate>
                    <span slot="value">HTML提示模板</span>
                </seal-cell>
            </seal-group>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-rate',
    data () {
        return {
            rate1: 0,
            rate2: 3,
            rate3: 2,
            rate4: 1,
            rate5: 4,
            rate6: 3,
            rate7: 2,
            rate8: 1,
            tipText: [
                '<span style="color:red;">$ 分 - 很差</span>',
                '<span style="color:blue;">$ 分 - 勉强</span>',
                '<span style="color:green;">$ 分 - 一般</span>',
                '<span style="color:black;">$ 分 - 挺好</span>',
                '<span style="color:chartreuse;">$ 分 - 非常好</span>'
            ]
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-rate {
        padding: 0rem;
        & .page-rate__group {
            margin-bottom: .15rem;
        }
    }
</style>
