<template>
    <div class="page-video">
        <div class="page-video__group">
            <seal-video video="http://wqs.jd.com/promote/superfestival/superfestival.mp4" config='{"mediaTitle": "第二届世界互联网大会主题宣传片"}' cover="http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/f/fd7wc830c0q11qb_big.jpg"></seal-video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-video',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-video {
        padding: .5rem 0 0 0;
        & .page-video__group {
            margin-bottom: .3rem;
        }
    }
</style>
