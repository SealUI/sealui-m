<template>
    <div class="sealui-msg">
        <div class="sealui-msg__icon-area">
            <seal-icon :type="icon"></seal-icon>
        </div>
        <div class="sealui-msg__text-area">
            <h2 class="sealui-msg__title" v-html="title"></h2>
            <p class="sealui-msg__desc" v-if="desc" v-html="desc"></p>
        </div>
        <div class="sealui-msg__opr-area" v-if="buttons">
            <p class="sealui-button-area">
                <slot name="buttons"></slot>
                <a v-for="button in buttons" href="javascript:;" class="sealui-button" :class="`is-${button.type}`" @click="onClick(button.onClick, button.link)">{{button.text}}</a>
            </p>
        </div>
    </div>
</template>

<script>
import { router } from 'sealui-m/src/router'
import SealIcon from "packages/icon"
export default {
    name: 'seal-msg',
    components :{
        SealIcon
    },
    props : {
        icon:{
            type:String,
            default:'success'
        },
        title: {
            type:String,
            default:''
        },
        desc:{
            type:String,
            default:''
        },
        buttons:Array
    },
    methods: {
        onClick (handler, link) {
            typeof handler === 'function' && handler()
            link && router(link, this.$router)
        }
    }
};
</script>
