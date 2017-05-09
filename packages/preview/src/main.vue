<template>
    <div class="sealui-preview">
        <div class="sealui-preview__hd">
            <div class="sealui-preview__item">
                <label class="sealui-preview__label"  v-html="headerLabel"></label>
                <em class="sealui-preview__value"  v-html="headerValue"></em>
            </div>
        </div>
        <div class="sealui-preview__bd">
            <div class="sealui-preview__item" v-for="item in bodyItems">
                <label class="sealui-preview__label" v-html="item.label"></label>
                <span class="sealui-preview__value" v-html="item.value"></span>
            </div>

        </div>
        <div class="sealui-preview__ft" v-if="footerButtons">
            <a class="sealui-preview__btn"
            :class="{
                'sealui-preview__btn_default': button.style==='default',
                'sealui-preview__btn_primary': button.style === 'primary',
                'sealui-preview__btn_danger': button.style === 'danger',
                'sealui-preview__btn_success': button.style === 'success'
            }" href="javascript:" v-for="button in footerButtons" @click="onButtonClick(button.onButtonClick, button.link)" v-html="button.text"></a>
        </div>
    </div>
</template>

<script>
import { router } from 'sealui-m/src/router'
export default {
    name: 'seal-preview',
    props: ['headerLabel', 'headerValue', 'bodyItems', 'footerButtons'],
    methods: {
        onButtonClick (cb, link) {
            cb && cb()
            if (link) {
                router(link, this.$router)
            }
        }
    }
};
</script>
