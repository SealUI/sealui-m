<template>
    <div class="sealui-flex" :style="headStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'seal-flex',
    props:{
        justify : String,
        align: String,
        wrap:String,
        direction:String
    },
    computed: {
        headStyle () {
            const styles = {
            'justify-content': this.justify,
            '-webkit-justify-content': this.justify,
            'align-items': this.align,
            '-webkit-align-items': this.align,
            'flex-wrap': this.wrap,
            '-webkit-flex-wrap': this.wrap,
            'flex-direction': this.direction,
            '-webkit-flex-direction': this.direction
          }
          return styles
        }
    },
};
</script>
