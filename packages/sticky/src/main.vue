<template>
    <div class="sealui-sticky__box">
        <slot></slot>
    </div>
</template>

<script>
import sticky from './sticky.js'
export default {
    name: 'seal-sticky',
  mounted () {
    this.$nextTick(() => {
      sticky(this.$el, {
        scrollBox: this.scrollBox,
        offset: this.offset,
        checkStickySupport: typeof this.checkStickySupport === 'undefined' ? true : this.checkStickySupport
      })
    })
  },
  props: ['scrollBox', 'offset', 'checkStickySupport']
}
</script>
