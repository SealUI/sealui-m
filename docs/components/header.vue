<style scoped>
  .headerWrapper {
    height: 80px;
  }
  .header {
    height: 80px;
    background-color:#fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: @height;
    z-index: 100;
    position: fixed;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    .container {
      height: 100%;
      box-sizing: border-box;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      a {
        color: rgba(0,0,0,.65);
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
    .nav {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
      @utils-clearfix;
      padding: 0;
      margin: 0;
    }
    .nav-logo,
    .nav-logo-small {
      vertical-align: sub;
    }
    .nav-logo{
        height:60px;
        margin-top: 10px;
    }
    .nav-logo-small {
      display: none;
    }
    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
      margin-left: 20px;
        font-size: 16px;
      &:last-child {
        cursor: default;
        margin-left: 34px;
        span {
          opacity: .8;
        }
      }

      a {
        text-decoration: none;
        color: rgba(0,0,0,.65);
        display: block;
        padding: 0 20px;
        &.active,
        &:hover {
           color: #108ee9;
          opacity: 1;
        }

        &.active {
          font-weight: 700;
          color: #108ee9;
        }

        &.active::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background:#108ee9;
        }
      }
    }
  }
  .header-home {
    position: fixed;
    top: 0;
    background-color: rgba(32, 160, 255, 0);
  }

  @media (max-width: 850px) {
    .header {
      .nav-logo {
        display: none;
      }
      .nav-logo-small {
        display: inline-block;
      }
      .nav-item {
        margin-left: 6px;

        &:last-child {
          margin-left: 10px;
        }

        a {
          padding: 0 5px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .header {
      .container {
        padding: 0 12px;
      }
      .nav-item a,
      .nav-lang {
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
</style>
<template>
  <div class="headerWrapper">
    <header class="header"
    ref="header"
    :style="headerStyle"
    :class="{
      'header-home': isHome
    }">
      <div class="container">
        <h1>
            <router-link :to="`/`">
            <img src="http://localhost:1024/assets/img/seal@2x.png" class="nav-logo">
            </router-link>
          <!-- <img
            src="../assets/images/element-logo.svg"
            alt="element-logo"
            class="nav-logo"> -->
        </h1>
        <ul class="nav">
            <li class="nav-item">
                <router-link
                  active-class="active"
                  :to="`/home`">首页
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                  active-class="active"
                  :to="`/component`">组件
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                  active-class="active"
                  :to="`/guide`">sss
                </router-link>
            </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        active: '',
        isHome: false,
        headerStyle: {}
      };
    },
    watch: {
      '$route.path': {
        immediate: true,
        handler() {
          this.isHome = /^home/.test(this.$route.name);
          this.headerStyle.backgroundColor = `rgba(255, 255, 255, ${ this.isHome ? '1' : '1' })`;
        }
      }
    },

    methods: {

    },
    mounted() {
      function scroll(fn) {
        window.addEventListener('scroll', () => {
          fn();
        }, false);
      }
      scroll(() => {
        if (this.isHome) {
          const threshold = 200;
          let alpha = Math.min((document.documentElement.scrollTop || document.body.scrollTop), threshold) / threshold;
          this.$refs.header.style.backgroundColor = `rgba(255, 255, 255, 1)`;
          //this.$refs.header.style.backgroundColor = `rgba(255, 255, 255, ${ alpha })`;
        }
      });
    }
  };
</script>
