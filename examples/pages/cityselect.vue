<template>
    <div class="page-cityselect">
        <div class="page-cityselect__group">
            <seal-group title="默认调用" class="demo-small-pitch">
                <seal-cell isLink>
                    <input slot="after-title" type="text" @click.stop="show1 = true" v-model="model1" readonly class="sealui-input" placeholder="所在地区">
                </seal-cell>
            </seal-group>
            <seal-group title="设置默认值" class="demo-small-pitch">
                <seal-cell isLink>
                    <input slot="after-title" type="text" @click.stop="show2 = true" v-model="model2" readonly class="sealui-input" placeholder="所在地区">
                </seal-cell>
            </seal-group>
        </div>
        <seal-cityselect v-model="show1" :finish="result1"></seal-cityselect>
         <seal-cityselect v-model="show2" :finish="result2" provance="四川" city="成都市" area="武侯区"></seal-cityselect>

    </div>
</template>

<script>
export default {
    name: 'page-cityselect',
    data () {
        return {
            show1: false,
            show2: false,
            model1: '',
            model2: '四川 成都市 武侯区'
        }
    },
    mounted (){

    },
    methods : {
        result1(ret) {
            console.log(ret);
            this.model1 = ret.provance + ' ' + ret.city + ' ' + ret.area;
        },
        result2(ret) {
            console.log(ret);
            this.model2 = ret.provance + ' ' + ret.city + ' ' + ret.area;
        }
    }
};
</script>

<style lang="less" scoped>
    .page-cityselect {
        padding: 0rem;
        & .page-cityselect__group {
            margin-bottom: .15rem;
        }
    }
</style>
