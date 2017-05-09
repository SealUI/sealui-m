<template>
  <section class="page-home">
      <div class="page__hd">
            <div style="height:1.52rem">
          		<div class="logo">
          			<img :src="logo">
          		</div>
                <h1 class="page__title">{{ title }} <span>version: {{version}}</span></h1>
            </div>
            <p class="page__desc" v-html="desc"></p>
      </div>
      <seal-group>
          <seal-cell title="Demo" link="/demos">
              <seal-icon type="grid" slot="icon"></seal-icon>
          </seal-cell>
          <seal-cell title="Doc" link="/" @click.native="showTip">
              <seal-icon type="ios-paper" slot="icon"></seal-icon>
          </seal-cell>
      </seal-group>

      <div class="pager-footer__desc sealui-footer sealui-footer_fixed-bottom">
        <img :src="logo">
        {{ title }}<br>
        <span>强力驱动</span>
      </div>

  </section>
</template>

<style lang="less" scoped>
  .page-home{
  	top:0;
    & i{
        color:#666;
      }
  }
  .page__hd{
      padding:.4rem .2rem;
      & .page__title{
          font-size: .2rem;
          text-align: center;
          & span{
            font-size: .14rem;
            font-weight: 400;
            display: block;
          }
      }
      & .page__desc {
        margin-top: .2rem;
        color: #888;
        text-align: left;
        font-size: .14rem;
      }
      & .logo{
      	width: 100%;
        height:1rem;
    	text-align: center;
    	& img{
    		width: 1rem;
            border-radius: .05rem;
            display: block;
            margin:0 auto .05rem auto;
    	}
      }

  }
  .pager-footer__desc{

    bottom:.15rem;
    color:#ccc;
    text-align: center;
    left:0;
    right:0;
    margin-top:.15rem;
    & img{
        display: block;
        width: .3rem;
        height:.3rem;
        margin:0 auto .15rem auto;
        filter: grayscale(100%);
        filter: gray;
        opacity: .5;
        border-radius: .03rem;
    }
    & span{
        font-size: .12rem;
    }
    .green{
        color:#6cc644
    }
  }
</style>
<script>
    let _version = require('../package.json').version;
    export default {
        data () {
            return {
                logo : 'https://ui.nmtree.com/20392063.jpeg',
                title : '海豹前端UI框架',
                desc : 'SealUI-M 是一套移动端的基础组件库，由SealUI Team团队维护。<br>目的是为了帮助业务线上的快速开发提供基础支持！',
                version : _version
            }
        },
        mounted () {
            // this.$alert('海豹前端框架',{
            //  closable:true
            // })
            //
            // this.$confirm('海豹前端框架',{
            //     closable:true,
            //     buttons:[{
            //         label: '确定'
            //     },
            //     {
            //         label: '确定',
            //         disabled:true,
            //         type: 'success'
            //     }]
            // });
            //
            // this.$dialog.toast('海豹前端框架',{
            //     duration:3000000
            // })
            //
            // this.$http.get('https://api.github.com/users/sealui').then(res => {
            //  console.log(res.data);
            //  this.logo = res.data.avatar_url;
            //  this.title = res.data.bio
            // })
        },
        methods: {
          showTip () {
            this.$alert('文档正在整理中<br>你可以先看看Demo例子',{
                buttons:[
                {
                    label: '我再等等',
                    type: 'success'
                }]
            })
          }
        }
    }
</script>

