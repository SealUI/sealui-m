<template>
    <article class="sealui-list" :class="classes">
        <div v-if="title" class="sealui-list__title">{{ title }}</div>
        <slot></slot>
    </article>
</template>

<script type="text/babel">
    export default {
        name: 'seal-list',
        props: {
            type: {
                validator(value){
                    return ['1', '2', '3', '4', '5'].indexOf(value + '') > -1;
                },
                default: '1'
            },
            title:{
                type:String,
                default:''
            }
        },
        computed: {
            classes() {
                return 'sealui-list-theme-' + this.type;
            }
        }
    }
</script>
