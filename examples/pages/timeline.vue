<template>
    <div class="page-timeline">
        <div class="page-group__title">type = dot (default)</div>
        <div class="page-timeline__group">
            <seal-timeline icon="social-apple" color="success" type="dot">
                <timeline-item>
                    <h4 class="process">发布里程碑版本</h4>
                    <p class="process">2017-02-26 12:00:00</p>
                </timeline-item>
                <timeline-item>
                    <h4>发布1.1版本</h4>
                </timeline-item>
                 <timeline-item>
                    <h4>发布1.0版本</h4>
                </timeline-item>
            </seal-timeline>
        </div>
        <div class="page-group__title">type = border</div>
        <div class="page-timeline__group">
            <seal-timeline icon="social-android" color="primary" type="border">
                <timeline-item>
                    <h4 class="process">发布里程碑版本</h4>
                    <p class="process">2017-02-26 12:00:00</p>
                </timeline-item>
                <timeline-item>
                    <h4>发布1.1版本</h4>
                </timeline-item>
                 <timeline-item>
                    <h4>发布1.0版本</h4>
                </timeline-item>
            </seal-timeline>
        </div>

        <div class="page-group__title">无Icon</div>
        <div class="page-timeline__group">
            <seal-timeline color="warning">
                <timeline-item>
                    <h4 class="process">发布里程碑版本</h4>
                    <p class="process">2017-02-26 12:00:00</p>
                </timeline-item>
                <timeline-item>
                    <h4>发布1.1版本</h4>
                </timeline-item>
                 <timeline-item>
                    <h4>发布1.0版本</h4>
                </timeline-item>
            </seal-timeline>
        </div>

        <div class="page-group__title">颜色倾向</div>
        <div class="page-timeline__group">
            <seal-timeline :color="item" icon="plane" v-for="item in colorList" :key="item.id">
                <timeline-item>
                    <h4 class="process">发布里程碑版本</h4>
                    <p class="process">2017-02-26 12:00:00</p>
                </timeline-item>
                <timeline-item>
                    <h4>发布1.1版本</h4>
                </timeline-item>
                 <timeline-item>
                    <h4>发布1.0版本</h4>
                </timeline-item>
            </seal-timeline>

        </div>

    </div>
</template>

<script>
export default {
    name: 'page-timeline',
    data () {
        return {
            colorList : ['primary','success','warning','danger','info','dark']
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-timeline {
        padding: 0rem;
        & .page-timeline__group {
            padding:.3rem;
            background-color: #fff
        }
        & .process{

        }
        & .sealui-timeline{
            padding:0.5rem 0 0 1rem
        }
    }
</style>
