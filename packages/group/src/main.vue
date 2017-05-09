<template>
    <div class="sealui-group">
        <div class="sealui-cells__title" v-if="title" :style="{color:titleColor}" v-html="title"></div>
            <div class="sealui-cells" :class="{'sealui-no-group-title':!title}" :style="{marginTop: gutter}">
            <slot name="after-title"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'seal-group',
    props: {
        title: String,
        titleColor: String,
        labelWidth: String,
        labelAlign: String,
        labelMarginRight: String,
        gutter: String
    }
};
</script>
