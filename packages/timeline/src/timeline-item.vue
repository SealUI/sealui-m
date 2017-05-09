<template>
    <li class="sealui-timeline-item">
        <div :class="['sealui-timeline-item__color', {'sealui-timeline-item__head': !isFirst,'sealui-timeline-item__head-first': isFirst }]">
            <icon v-show="isFirst && $parent.icon" :type="$parent.icon" class="sealui-timeline-item__checked"></icon>
        </div>
        <div class="sealui-timeline-item__tail" :style="tailStyle"></div>
        <div class="sealui-timeline-item__content">
            <slot></slot>
        </div>
    </li>
</template>

<script>
import Icon from 'packages/icon';
export default {
    name: 'timeline-item',
    data () {
        return {
          isLast: true,
          isFirst: true,
        }
    },
    mounted () {
        this.$parent.setChildProps()
    },
    beforeDestroy () {
        // this will be null
        const $parent = this.$parent
        this.$nextTick(() => {
          $parent.setChildProps()
        })
    },
    components: {
        Icon
    },
    computed: {
        tailStyle () {
          return this.isLast ? { display: 'none'} : { display: 'block'}
        },
        headStyle () {
            return { backgroundColor: this.$parent.color}
        }
    }
};
</script>
