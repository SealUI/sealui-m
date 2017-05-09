<template>
    <div class="sealui-grids">
        <slot></slot>
    </div>
</template>

<script>
import GridItem from 'packages/grid-item'
export default {
    name: 'seal-grid',
    components : {GridItem},
    props : {
        column : {
            type:Number,
            default:3
        }
    },

};
</script>
