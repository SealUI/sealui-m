<template>
    <div class="sealui-rollnotice__item"><slot></slot></div>
</template>

<script type="text/babel">
    export default {
        name: 'seal-rollnotice-item',
        mounted() {
            this.$parent.init();
        }
    }
</script>
