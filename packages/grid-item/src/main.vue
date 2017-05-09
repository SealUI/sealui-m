<template>
    <a href="javascript:;" class="sealui-grid" @click="onClick" :style="headStyle">
        <div class="sealui-grid__icon">
            <slot name="icon"><img :src="icon" if="icon"></slot>
        </div>
        <p class="sealui-grid__label">
            <slot name="label"><span v-html="label"></span></slot>
        </p>
        <slot></slot>
    </a>
</template>

<script>
import { router } from 'sealui-m/src/router';
export default {
    name: 'grid-item',
    props: ['icon', 'label', 'link'],
    computed: {
        headStyle () {
            return `width:calc(100% / ${this.$parent.column})`
        }
    },
    methods: {
        onClick () {
            this.$emit('on-click')
            router(this.link, this.$router)
        }
    }
};
</script>
