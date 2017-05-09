<template>
  <div class="page-sticky">
    <div class="page-sticky__group">
        <p v-for="i in 5">{{i}}<br></p>
        <seal-sticky scroll-box="sealui_view_box_body_demo" :offset="50">
            这是吸顶的
        </seal-sticky>
        <p v-for="i in 100">{{i}}<br></p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'page-sticky',
    data () {
      return {

      }
    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
  .page-sticky {
      padding: 0 0 0px 0;
      & .page-sticky__group {
        margin-bottom: .3rem;
        background: #fff;
        & .sealui-sticky{
            height:.88rem;
            background: #dc0000;
            text-align: center;
            line-height: .88rem;
            color:#fff
          }
      }

    }

</style>
