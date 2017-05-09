<template>
    <div class="sealui-video">
        <div class="zy_media">
            <video :poster="cover" :data-config='config' webkit-playsinline playsinline="inline" x-webkit-airplay="true"  style="object-fit: fill">
                <source :src="video" type="video/mp4">
                您的浏览器不支持HTML5视频
            </video>
          </div>
    </div>
</template>

<script>
import './zy.media.js'
export default {
    name: 'seal-video',
    props: {
        cover: String,
        video: String,
        config: String
    },
    mounted (){
        zymedia(this.$el.querySelector('video'))
    },
    beforeCreate () {
        //Media(document.querySelector('video'))
    }
};
</script>
