<template>
    <div class="page-switch">
        <seal-group title="默认">
            <seal-cell>
                <seal-switch v-model="switch0" slot="after-title"></seal-switch>
                <div slot="value"> {{switch0}}</div>
            </seal-cell>
        </seal-group>
        <seal-group title="禁用">
            <seal-cell>
                <span slot="after-title" style="display:flex"><seal-switch v-model="switch01" :disabled="true"></seal-switch><seal-switch v-model="switch01" :disabled="true"></seal-switch></span>
                <div slot="value"> {{switch0}}</div>
            </seal-cell>
        </seal-group>
        <seal-group title="有颜色倾向">
            <seal-cell>
                <seal-switch v-model="switch1" type="success" slot="after-title"></seal-switch>
                <div slot="value"> {{switch1}}</div>
            </seal-cell>
            <seal-cell>
                <seal-switch v-model="switch2" type="danger" slot="after-title"></seal-switch>
                <div slot="value"> {{switch2}}</div>
            </seal-cell>
            <seal-cell>
                <seal-switch v-model="switch3" type="warning" slot="after-title"></seal-switch>
                <div slot="value"> {{switch3}}</div>
            </seal-cell>
            <seal-cell>
                <seal-switch v-model="switch4" type="info" slot="after-title"></seal-switch>
                <div slot="value"> {{switch4}}</div>
            </seal-cell>
            <seal-cell>
                <seal-switch v-model="switch5" type="dark" slot="after-title"></seal-switch>
                <div slot="value"> {{switch5}}</div>
            </seal-cell>
        </seal-group>
    </div>
</template>

<script>
export default {
    name: 'page-switch',
    data () {
        return {
            switch0: false,
            switch01: true,
            switch1: false,
            switch2: false,
            switch3: false,
            switch4: false,
            switch5: true,
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-switch {
        padding: 0rem;
        & .page-switch__group {
            margin-bottom: .3rem;
        }
    }
</style>
