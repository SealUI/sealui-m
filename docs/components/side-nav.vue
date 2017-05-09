<style>
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding-right: 0px;
    padding-top: 24px;
    li {
      list-style: none;
    }
    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }

    .nav-dropdown {
      margin-bottom: 6px;
      width: 100%;
      span {
        display: block;
        width: 100%;
        font-size: 16px;
        color: #5e6d82;
        line-height: 40px;
        transition: .2s;
        padding-bottom: 6px;
        border-bottom: 1px solid #eaeefb;
        &:hover {
          cursor: pointer;
        }
      }
      i {
        transition: .2s;
        font-size: 12px;
        color: #d3dce6;
      }
      @when active {
        span, i {
          color: #20a0ff;
        }
        i {
          transform: rotateZ(180deg) translateY(2px);
        }
      }
      &:hover {
        span, i {
          color: #20a0ff;
        }
      }
    }

    .nav-item {
      a {
        font-size: 14px;
        color: #657180;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: all .3s;
        border-right: 3px solid transparent;
        padding-left: 20px;
        &.active {
          color: #108ee9;
          background-color: #ecf6fd;
          border-right-color:#108ee9;
        }
      }
      .nav-item {
        a {
          display: block;
          height: 40px;
          line-height: 40px;
          font-size: 13px;
          padding-left: 34px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            color: #108ee9;
            background: #f3f3f3;
          }
        }
      }
    }
    .nav-group__title {
      font-size: 12px;
      color: #99a9bf;
      padding-left: 20px;
      line-height: 26px;
      margin-top: 0px;
    }
  }
  .nav-dropdown-list {
    width: 120px;
    margin-top: -8px;
    li {
      font-size: 14px;
    }
  }
</style>
<template>
  <div class="side-nav" :style="navStyle">
    <ul>
      <li class="nav-item" v-for="item in data" :key="item.id">
        <a v-if="!item.path" @click="expandMenu">{{item.name}}</a>
        <router-link
          v-else
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li class="nav-item" v-for="navItem in item.children" :key="navItem.id">
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups">
            <div class="nav-group__title" @click="expandMenu">{{group.groupName}}</div>
            <ul class="pure-menu-list">
              <li
                class="nav-item"
                v-for="navItem in group.list"
                v-if="!navItem.disabled" :key="navItem.id">
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
  import { version } from 'main/index.js';

  export default {
    props: {
      data: Array,
      base: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        highlights: [],
        navState: [],
        isSmallScreen: false,
        versions: [],
        version,
        dropdownVisible: false
      };
    },
    watch: {
      '$route.path'() {
        this.handlePathChange();
      }
    },
    computed: {
      navStyle() {
        return this.isSmallScreen ? { 'padding-bottom': '60px' } : {};
      },
      isComponentPage() {
        return /^component-/.test(this.$route.name);
      }
    },
    methods: {
      handleResize() {
        this.isSmallScreen = document.documentElement.clientWidth < 768;
        this.handlePathChange();
      },
      handlePathChange() {
        if (!this.isSmallScreen) {
          this.expandAllMenu();
          return;
        }
        this.$nextTick(() => {
          this.hideAllMenu();
          let activeAnchor = this.$el.querySelector('a.active');
          let ul = activeAnchor.parentNode;
          while (ul.tagName !== 'UL') {
            ul = ul.parentNode;
          }
          ul.style.height = 'auto';
        });
      },
      hideAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = '0';
        });
      },
      expandAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = 'auto';
        });
      },
      expandMenu(event) {
        if (!this.isSmallScreen) return;
        let target = event.currentTarget;
        if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return;
        this.hideAllMenu();
        event.currentTarget.nextElementSibling.style.height = 'auto';
      },
      handleDropdownToggle(visible) {
        this.dropdownVisible = visible;
      }
    },
    created() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = _ => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.versions = JSON.parse(xhr.responseText);
        }
      };
      xhr.open('GET', '/versions.json');
      xhr.send();
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  };
</script>
