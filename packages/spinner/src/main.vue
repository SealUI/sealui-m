<template>
    <span class="sealui-spinner" :class="className"></span>
</template>

<script>
import Spinner from './spinner'
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
export default {
    name : 'seal-spinner',
    mounted () {
        this.$nextTick(() => {
        Spinner(this.$el, this.type)
    })
    },
    props: {
        type: {
            type: String,
            default: 'ios'
        }
    },
    computed: {
        className () {
            let rs = {}
            for (let i = 0; i < types.length; i++) {
                rs[`sealui-spinner-${types[i]}`] = this.type === types[i]
            }
            return rs
        }
    }
}
</script>
