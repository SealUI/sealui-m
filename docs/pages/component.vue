<style>
  .page-component {
    box-sizing: border-box;
    .content {
        margin-left: -1px;
        padding: 24px 20px 100px 20px;
        min-height: 600px;
        overflow: hidden;
        position: relative;
      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color:rgba(0,0,0,.65);
          font-size: 14px;
          margin-bottom: 45px;
          border: 1px solid #e9e9e9;
          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border: 1px solid #e9e9e9;
            background-color: #f7f7f7;
            white-space: nowrap;
          }
          td, th {
            border: 1px solid #e9e9e9;
            padding: 10px;
            max-width: 250px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
    .page-component-up {
      background-color: rgba(0,0,0,.6);
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        transition: all .2s ease-in-out;
      position: fixed;
      right: 50px;
      bottom: 100px;
      size: 50px;
      cursor: pointer;
      opacity: 0.6;
      i {
        color: #fff;
        display: block;
        line-height: 50px;
        text-align: center;
        font-size: 35px;
        transform:rotate(180deg);
      }
      &.hover {
        opacity: 1;
      }
    }
    .back-top-fade-enter,
    .back-top-fade-leave-active {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
<template>
  <div class="page-container page-component">
    <div class="sealui-row">
      <div class="sealui-col-span-4">
        <side-nav :data="navsData" :base="`/component`"></side-nav>
      </div>
      <div class="sealui-col-span-20">
        <router-view class="content"></router-view>
        <footer-nav></footer-nav>
      </div>
    </div>
    <transition name="back-top-fade">
      <div
        class="page-component-up"
        :class="{ 'hover': hover }"
        v-show="showBackToTop"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="toTop">
        <i class="sealui-icon-download"></i>
      </div>
    </transition>
  </div>
</template>
<script>
  import navsData from '../nav.config.json';
  import throttle from 'throttle-debounce/throttle';
  export default {
    data() {
      return {
        navsData,
        hover: false,
        showBackToTop: false
      };
    },
    methods: {
      toTop() {
        this.hover = false;
        this.showBackToTop = false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      handleScroll() {
        this.showBackToTop = (document.body.scrollTop || document.documentElement.scrollTop) >= 0.5 * document.body.clientHeight;
      }
    },
    mounted() {
      this.throttledScrollHandler = throttle(300, this.handleScroll);
      document.addEventListener('scroll', this.throttledScrollHandler);
    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.throttledScrollHandler);
    }
  };
</script>
