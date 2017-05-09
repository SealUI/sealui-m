<template>
    <input type="checkbox" class="sealui-switch" v-model="checked"
     :class="[
      type ? 'is-' + type : '',
      {
            'is-disabled': disabled,
      }
     ]"/>
</template>

<script type="text/babel">
    /**
     * 不兼容鸟包火狐
     */
    export default {
        name: 'seal-switch',
        data() {
            return {
                checked: false
            }
        },
        props: {
            value: Boolean,
            type: {
                type: String,
                default: 'default'
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        watch: {
            checked(val) {
                this.$emit('input', val);
            }
        },
        mounted() {
            this.checked = this.value;
        }
    }
</script>
