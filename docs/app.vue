<style lang="css">
  @import 'highlight.js/styles/github-gist.css';
  @import 'assets/style/common.css';
  @import 'assets/style/fonts/style.css';

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    color: rgba(0,0,0,.65);
  }

  #app {
    height: 100%;
  }

  a {
    color:#108ee9;
    text-decoration: none;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  .hljs {
    line-height: 1.8;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color:#f7f7f7;
    border: solid 1px var(--boder-color);
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }

  .main-cnt {
    margin-top: -80px;
    padding: 80px 0 100px;
    box-sizing: border-box;
    min-height: 100%;
    background: #eee;
  }

  .container,
  .page-container {
    width: 95%;
    padding: 0 0px;
    margin: 0 auto;

  }

  .page-container {
    margin: 30px auto 20px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    padding:0px 0 0 0;
    h2 {
      font-size: 28px;
      color: #1f2d3d;
      margin: 0;
    }
    h3 {
      font-size: 22px;
    }
    h4{
        font-size: 18px;
    }
    & p{
        padding: 10px 0;
    }
    h2, h3, h4, h5 {
      font-weight: normal;
      color: #1f2f3d;

      &:hover a {
        opacity: .4;
      }

      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;

        &:hover {
          opacity: .4;
        }
      }
    }
    p {
      font-size: 14px;
      color:rgba(0,0,0,.65)
    }
  }
  .demo {
    margin: 20px 0;
  }
  @media all and (min-width: 1300px) {
    .container,
    .page-container {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    .container,
    .page-container {
      padding: 0 20px;
    }
  }
</style>

<template>
  <div id="app">
    <main-header ></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <!-- <main-footer></main-footer> -->
  </div>
</template>

<script>

  export default {
    name: 'app',

    computed: {

    },

    watch: {

    },

    methods: {


      renderAnchorHref() {
        if (/changelog/g.test(location.href)) return;
        const anchors = document.querySelectorAll('h2 a,h3 a');
        const basePath = location.href.split('#').splice(0, 2).join('#');

        [].slice.call(anchors).forEach(a => {
          const href = a.getAttribute('href');
          a.href = basePath + href;
        });
      },

      goAnchor() {
        if (location.href.match(/#/g).length > 1) {
          const anchor = location.href.match(/#[^#]+$/g);
          if (!anchor) return;
          const elm = document.querySelector(anchor[0]);
          if (!elm) return;

          setTimeout(_ => {
            document.documentElement.scrollTop = document.body.scrollTop = elm.offsetTop + 120;
          }, 50);
        }
      }
    },

    mounted() {

      this.renderAnchorHref();
      this.goAnchor();
    },

    created() {
      window.addEventListener('hashchange', () => {
        if (location.href.match(/#/g).length < 2) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          this.renderAnchorHref();
        } else {
          this.goAnchor();
        }
      });
    }
  };
</script>
