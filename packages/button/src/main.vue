<template>
    <button :disabled="disabled" class="sealui-button"
        @click="handleClick"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
          type ? 'is-' + type : '',
          size ? 'is-' + size : '',
          {
            'is-disabled': disabled,
            'is-loading': loading,
            'is-plain': plain,
            'is-block': block,
            'is-circle' : circle
          }
        ]"
        >
        <i class="sealui-icon-loading" v-if="loading"></i>
        <i :class="'sealui-icon-' + icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'seal-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      block:Boolean,
      circle:{
        type : Boolean,
        default:false
      },
      autofocus: Boolean
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
};
</script>
