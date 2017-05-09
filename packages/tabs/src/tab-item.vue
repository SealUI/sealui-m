<template>
    <div class="sealui-tab-item" :class="[currentSelected ? activeClass : '', {'sealui-tab-item__selected': currentSelected, 'sealui-tab-item__disabled': disabled}]" :style="style" @click="onItemClick"><slot></slot></div>
</template>

<script>
import { childMixin } from 'sealui-m/src/mixins/multi-items'
export default {
    name: 'tab-item',
    mixins: [childMixin],
    props: {
        activeClass: String,
        disabled: Boolean
    },
    computed: {
        style () {
          return {
            borderWidth: this.$parent.lineWidth + 'rem',
            borderColor: this.$parent.activeColor,
            color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
            border: this.$parent.animate ? 'none' : 'auto'
          }
        }
    }
};
</script>
