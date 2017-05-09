<template>
    <div class="page-countup">
        <div class="page-countup__group">
            <seal-countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></seal-countup>
                <seal-countup :end-val="88.88" :duration="3" :decimals="2" class="demo1"></seal-countup>
    <br>
    <seal-countup :end-val="1024" :duration="4" :start="doStart" class="demo1"></seal-countup>
    <div style="padding:0">
      <seal-button @click.native="doStart=true" type="success" :block="true">开始</seal-button>
    </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-countup',
    data () {
        return {
            doStart:false
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-countup {
        padding: 0.3rem;
        & .page-countup__group {
            margin-bottom: .3rem;
        }
        & .demo1{
            font-size: 1.5rem;
            color:#2cbe4e;
            text-align: center;
            display: block;
        }
    }
</style>
