<template>
    <div class="sealui-tabbar">
        <slot></slot>
    </div>
</template>

<script>
import { parentMixin } from 'sealui-m/src/mixins/multi-items'
export default {
    name: 'seal-tabbar',
    mixins: [parentMixin],
    props: {
        iconClass: String
    }
};
</script>
