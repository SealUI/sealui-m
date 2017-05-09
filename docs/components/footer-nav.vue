<template>
  <div class="footer-nav">
    <span
      v-if="leftNav"
      class="footer-nav-link footer-nav-left"
      @click="handleNavClick('prev')">
      <i class="el-icon-arrow-left"></i>
      {{ leftNav.title || leftNav.name }}
    </span>
    <span
      v-if="rightNav"
      class="footer-nav-link footer-nav-right"
      @click="handleNavClick('next')">
      {{ rightNav.title || rightNav.name }}
      <i class="el-icon-arrow-right"></i>
    </span>
  </div>
</template>

<style>
  .footer-nav {
    color: #99a9bf;
    font-size: 14px;
    border-top: 1px solid rgb(233, 233, 233);
    overflow: hidden;
    &::after {
      content: '';
      display: block;
      clear: both;
    }

    & i {
      transition: .3s;
      color: #d9def1;
      vertical-align: baseline;
    }
  }

  .footer-nav-link {
    cursor: pointer;
    transition: .3s;
    padding: 0 24px;
    width: 40%;
    float: left;
    line-height: 72px;
    height: 72px;
    color: #108ee9;
    &:hover {
      color: #20a0ff;

      & i {
        color: #20a0ff;
      }
    }
  }

  .footer-nav-left {
    float: left;
    margin-left: -4px;
    text-align: left;
  }

  .footer-nav-right {
    float: right;
    margin-right: -4px;
    text-align: right;
  }
</style>

<script>
  import navConfig from '../nav.config.json';

  export default {
    data() {
      return {
        currentComponent: null,
        nav: [],
        currentIndex: -1,
        leftNav: null,
        rightNav: null
      };
    },

    watch: {
      '$route.path'() {
        this.setNav();
        this.updateNav();
      }
    },

    methods: {
      setNav() {
        let nav = navConfig;
        this.nav = nav[0].children.concat(nav[1]);
        nav[2].groups.map(group => group.list).forEach(list => {
          this.nav = this.nav.concat(list);
        });
      },

      updateNav() {
        this.currentComponent = '/' + this.$route.path.split('/')[2];
        for (let i = 0, len = this.nav.length; i < len; i++) {
          if (this.nav[i].path === this.currentComponent) {
            this.currentIndex = i;
            break;
          }
        }
        this.leftNav = this.nav[this.currentIndex - 1];
        this.rightNav = this.nav[this.currentIndex + 1];
      },

      handleNavClick(direction) {
        this.$router.push(`/component${ direction === 'prev' ? this.leftNav.path : this.rightNav.path }`);
      }
    },

    created() {
      this.setNav();
      this.updateNav();
    }
  };
</script>
