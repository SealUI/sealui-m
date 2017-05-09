// import 'babel-polyfill'
import Vue from 'vue';
import App from './app';
import routes from './route';
import SealUI from 'sealui-m/src/index';
import 'packages/theme-default/src/index.css';

import VueRouter from 'vue-router';

import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

import 'examples/assets/style/example.less'
Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(SealUI)

Vue.use(VueRouter);
const router = new VueRouter({
    //mode : hash,
	mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
	base: '/',
	routes
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});


let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
	NProgress.start();
	next();
});

router.afterEach(route => {
	NProgress.done();
	let page_title = route.meta.title || document.title;
    let page_cnName = route.meta.cnName || '';
    //Vue.$title(page_title +' - '+ page_cnName)
	if (route.path !== '/') {
		document.body.scrollTop = 0;
	} else {
		Vue.nextTick(() => {
			document.body.scrollTop = indexScrollTop;
		});
	}

});

