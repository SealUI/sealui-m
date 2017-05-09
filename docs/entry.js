// import 'babel-polyfill'
import Vue from 'vue';
import App from './app';
import routes from './route';
import SealUI from 'sealui-m/src/index';
import 'packages/theme-default/src/index.css';

import VueRouter from 'vue-router';

import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

//import 'docs/assets/style/example.less'
Vue.config.productionTip = false

import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';

Vue.use(SealUI)
Vue.use(VueRouter);

Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);

const router = new VueRouter({
    //mode : hash,
	mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
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
    document.title = page_title +' -- SealUI-M';
	if (route.path !== '/') {
		document.body.scrollTop = 0;
	} else {
		Vue.nextTick(() => {
			document.body.scrollTop = indexScrollTop;
		});
	}

});

