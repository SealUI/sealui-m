<template>
<div>
    <div class="navbar"  v-if="visible">
        <router-link class="page-back" :to="demoListPath">
            <i class="sealui-icon-chevron-left"></i>
        </router-link>
        <h1 class="page-title">{{title}}<span>{{cnName}}</span></h1>
    </div>
    <div class="container">
        <transition :name="transitionName">
            <router-view class="page child-view"></router-view>
        </transition>

    </div>
</div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                transitionName: 'slide-left',
                title:'',
                cnName:'',
                demoListPath : '/demos'
            }
        },
        mounted () {
            this.title = this.$route.meta.title;
            this.cnName = this.$route.meta.cnName;
        },
        watch: {
            '$route' (to, from) {
                this.title = this.$route.meta.title;
                this.cnName = this.$route.meta.cnName;
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed: {
            visible() {
                let _path = ['/','/demos','/error'].indexOf(this.$route.path) < 0,
                _name = ['error'].indexOf(this.$route.name) < 0;
                if(_path && _name){
                    return true;
                }else{
                    return false;
                }
            }
        }
    };
</script>
<style lang="less">
    .page-back{
        position: absolute;
        top:.08rem;
        left:.05rem;
        z-index: 1000;
        width:.5rem;
        height:.5rem;
        line-height: .5rem;
        text-align: left;
        text-indent: .08rem;
        & .sealui-icon-chevron-left{
            font-size: .2rem
        }
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    width: 100%;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0);
  }
</style>
