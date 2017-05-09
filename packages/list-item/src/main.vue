<template>

    <router-link :to="href" class="sealui-list__item" v-if="isLink == 'link'">
        <div class="sealui-list__img">
            <slot name="img"></slot>
        </div>
        <div class="sealui-list__desc">
            <div class="sealui-list__desc-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </router-link>
    <a :href="href || 'javascript:;'" class="sealui-list__item" v-else>
        <div class="sealui-list__img">
            <slot name="img"></slot>
        </div>
        <div class="sealui-list__desc">
            <div class="sealui-list__desc--title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </a>

</template>

<script type="text/babel">
    export default {
        name: 'seal-list-item',
        props: {
            isLink: {
                type: String,
                validator (value) {
                    return ['link', 'a'].indexOf(value) > -1;
                },
                default: 'a'
            },
            href: [String, Object],
        }
    }
</script>
