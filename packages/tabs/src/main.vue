<template>
    <div class="sealui-tabs"
    :class="[
        type ? 'is-' + type : '',
    ]">
        <slot></slot>
        <div v-if="animate" class="sealui-tabs__ink-bar" :class="barClass" :style="barStyle"></div>
    </div>
</template>

<script>
import { parentMixin } from 'sealui-m/src/mixins/multi-items'
export default {
    name: 'seal-tabs',
    mixins: [parentMixin],
    mounted () {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true
      }, 0)
    })
  },
  props: {
    lineWidth: {
      type: Number,
      default: .02
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    type:{
        type:String,
        default:''
    }
  },
  computed: {
    barLeft () {
      return `${this.currentIndex * (100 / this.number)}%`
    },
    barRight () {
      return `${(this.number - this.currentIndex - 1) * (100 / this.number)}%`
    },
    barStyle () {
      return {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        backgroundColor: this.barActiveColor || this.activeColor,
        height: this.lineWidth + 'rem',
        transition: !this.hasReady ? 'none' : null
      }
    },
    barClass () {
      return {
        'sealui-tabs__ink-bar-transition-forward': this.direction === 'forward',
        'sealui-tabs__ink-bar-transition-backward': this.direction === 'backward'
      }
    }
  },
  watch: {
    currentIndex (newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward'
      this.$emit('on-index-change', newIndex, oldIndex)
    }
  },
  data () {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    }
  }
};
</script>
