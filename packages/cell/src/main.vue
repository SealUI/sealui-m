<template>
    <div class="sealui-cell" :class="{'sealui-cell__access': isLink || !!link}" @click="onClick">
        <div class="sealui-cell__hd">
            <slot name="icon"></slot>
        </div>
        <div class="sealui-cell__bd">
            <p>
                {{title}}
                <slot name="after-title"></slot>
            </p>
            <div class="sealui-cell__desc" v-if="desc" v-html="desc"></div>
        </div>
        <div class="sealui-cell__ft" :class="{'sealui-cell-primary':primary==='content'}">
            {{value}}
            <slot name="value"></slot>
            <slot></slot>
        </div>
        <slot name="child"></slot>
    </div>
</template>

<script>
import { router } from 'sealui-m/src/router'
export default {
    name: 'seal-cell',
    props: {
        title: String,
        value: [String, Number, Array],
        isLink: Boolean,
        desc: [String, Number],
        primary: {
            type: String,
            default: 'title'
        },
        link: {
            type: [String, Object]
        }
    },
    methods: {
        onClick () {
            router(this.link, this.$router)
        }
    }
};
</script>
