<template>
    <a href="javascript:;" class="sealui-tabbar__item" :class="{'sealui-tabbar__item_on': $parent.index === currentIndex, 'sealui-tabbar-simple': simple}" @click="onItemClick(true)">
        <div class="sealui-tabbar__icon" :class="[iconClass || $parent.iconClass]" v-if="!simple">
            <span style="display: inline-block;position: relative;">
            <slot name="icon"></slot>
            <span class="sealui-badge sealui-badge_dot" style="position: absolute;top:-.02rem;right:-.02rem;" v-if="showdot"></span>
            <span class="sealui-badge" v-if="badge" v-text="badge" style="position: absolute;top: -.02rem;right: -.13rem;"></span>
            </span>
        </div>
        <p class="sealui-tabbar__label">
            <slot name="label"></slot>
        </p>
    </a>
</template>

<script>
import { childMixin } from 'sealui-m/src/mixins/multi-items'
export default {
    name: 'tabbar-item',
    mixins: [childMixin],
    props: {
        showdot: {
            type: Boolean,
            default: false
        },
        badge: String,
        link: [String, Object],
        iconClass: String
    },
    beforeMount () {
        if (!this.$slots.icon) {
          this.simple = true
        }
    },
    data () {
        return {
          simple: false
        }
    }
};
</script>
