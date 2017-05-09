<template>
    <div class="page-checkbox">
        <div class="page-checkbox__group">
            <seal-checkbox title="基础用法" :options="commonList" v-model="checklist001" @on-change="change"></seal-checkbox>
            <seal-checkbox title="处理错误" required :options="commonList" show-error v-model="checklist0011" @on-change="change" @on-error="onError" @on-clear-error="onNoError" name="demo1" :max="2" :error="errorTip">
            </seal-checkbox>
            <seal-checkbox title="这是最大值" :options="commonList" v-model="checklist003" :max=2 @on-change="change"></seal-checkbox>

            <seal-checkbox title="设置选中值" :options="commonList" v-model="checklist006" @on-change="change"></seal-checkbox>

            <seal-checkbox title="使用Object类型的选项列表，key必须为字符串" :options="objectList" v-model="checklist005" @on-change="change"></seal-checkbox>

            <seal-checkbox title="颜色倾向" :options="commonList" v-model="checklist002" @on-change="change" type="success"></seal-checkbox>
            <seal-checkbox title="颜色倾向" :options="commonList" v-model="checklist001" @on-change="change" type="danger"></seal-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-checkbox',
    data () {
        return {
            commonList: [ 'Html5', 'Javascript', 'CSS3' ],
            objectList: [{key: '1', value: 'Html5'}, {key: '2', value: 'Javascript'}, {key: '3', value: 'CSS3'}, {key: '4', value: 'PHP'}],
            checklist001: [],
            checklist002 : [],
            checklist003 :[],
            checklist005 :[],
            checklist006 : ['Html5', 'Javascript'],
            checklist0011: [],
            errorTip : ''
        }
    },
    mounted (){

    },
    methods : {
        change (val) {
            console.log('change', val)
        },
        onError (errors) {
          console.log(errors)
          this.errorTip = errors
        },
        onNoError () {
          this.errorTip = null
        }
    }
};
</script>

<style lang="less" scoped>
    .page-checkbox {
        padding: 0rem;
        & .page-checkbox__group {
            margin-bottom: .3rem;
        }
        .error{
            color:#dc0000
        }
    }
</style>
