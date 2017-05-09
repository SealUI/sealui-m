<template>
    <transition :name="closeTransition ? '' : 'sealui-zoom-in-center'">
    <div class="sealui-tag"
    :class="[
        color ? 'is-' + color : '',
        size ? 'is-' + size : '',
        type ? 'is-' + type : '',
        {
            'is-rounded': rounded,
        }
    ]">
        <span class="sealui-tag__dot" v-if="type === 'dot'" ></span>
        <span :class="[closable ? 'sealui-tag__text' : '']"><slot></slot></span>
        <Icon v-if="closable" type="cancel" @click.native="handleClose"></Icon>
    </div>
    </transition>
</template>

<script>
import Icon from 'packages/icon';
export default {
    name: 'seal-tag',
    components: { Icon },
    props : {
        color:{
            type:String,
            default:'default'
        },
        closeTransition: Boolean,
        size: String,
        type: String,
        closable:Boolean,
        rounded:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        handleClose (event) {
            this.$emit('onClose', event);
        }
    }
};
</script>
