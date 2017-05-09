<template>
  <section class="page-demo">
    <seal-group :title="group.groupName" v-for="group in navs" :key="group.id">
        <seal-cell :link="'/demos'+item.path" :title="item.name" :value="item.cnName" v-for="item in group.list" :key="item.id">
        </seal-cell>
    </seal-group>
  </section>
</template>

<style lang="less">
	.page-demo {
		top:0px;
		padding-bottom:1em;
		& i{
			color:#4a90e2
	    }
        & .sealui-cells__title{
            text-align: center;
            font-size: .17rem;
        }
	}

</style>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {

        this.navs = navs;
    }
  };
</script>
