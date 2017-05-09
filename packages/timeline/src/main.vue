<template>
    <div class="sealui-timeline"
    :class="[
    color ? 'is-' + color : '',
    type ?　'is-' + type : '',
    ]">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'seal-timeline',
    props: {
        color: String,
        isShowIcon: {
          type: Boolean,
          default: true
        },
        icon : {
            type:String,
            default:''
        },
        type: {
            type:String,
            default:''
        }
    },
    methods: {
        setChildProps () {
          if (!this.$children) return
          const len = this.$children.length
          this.$children.forEach((child, index) => {
            child.isLast = index === len - 1
            child.isFirst = index === 0
          })
        }
    }
};
</script>
