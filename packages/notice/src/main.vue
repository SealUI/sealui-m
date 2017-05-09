<template>
    <div class="sealui-notice" :class="customClass"  @click.prevent="noticeClick"  v-if="currentValue">
        <div class="sealui-notice__hd">
            <slot name="icon"></slot>
        </div>
        <div class="sealui-notice__bd" v-if="content" v-html="content"></div>
        <div class="sealui-notice__ft">
            <i class="sealui-icon sealui-notice__icon-arrow" v-if="icon && link"></i>
            <i class="sealui-icon sealui-notice__icon-close" v-if="icon && !link && icon ==='close' " @click.stop="currentValue = false"></i>
            <i :class="'sealui-icon-'+icon" v-if="icon && !link && icon !== 'close'"></i>
        </div>
    </div>
</template>

<script>
import { router, getUrl } from 'sealui-m/src/router/index'
export default {
    name: 'seal-notice',
    data () {
        return {
            currentValue: false
        }
    },
    props : {
        value: Boolean,
        className: {
            type: String,
            default: ''
        },
        content:{
            type:String,
            default:''
        },
        icon:String,
        type:{
            type:String,
            default:''
        },
        link:String
    },
    methods : {
        noticeClick () {
            this.$emit('on-click')
            router(this.link, this.$router)
        }
    },
    computed: {
        customClass() {
            var classes = [];
            classes.push(this.type ? 'is-' + this.type : '');
            classes.push(this.className ? this.className : '');
            return classes.join(' ');
        }
    },
    watch: {
        value (val) {
          this.currentValue = val
        },
        currentValue (val) {
          this.$emit('input', val)
        }
    }
};
</script>
