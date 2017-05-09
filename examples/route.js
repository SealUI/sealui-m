import NavConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        path: '/demos'+page.path,
        component: resolve => require([`./pages${page.path}`], resolve),
        meta: {
          title: page.title || page.name,
          cnName: page.cnName,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

// route.route.push({
//   path: '/',
//   component: require('./home.vue')
// });

let indexRoute = {
  path: '/',
  name: 'home',
  component: resolve => require(['./home.vue'], resolve),
  meta: {
  	title: 'SealUI-M',
    cnName : '首页'
  }
};

let demoRoute = {
  path: '/demos',
  name: 'demos',
  component: resolve => require(['./demos.vue'], resolve),
  meta: {
  	title: 'Demo',
    cnName : '组件列表'
  }
};

let msgSuccessRoute = {
  path: '/demos/msg/msgsuccess',
  name: 'msgsuccess',
  component: resolve => require(['./pages/msgsuccess.vue'], resolve),
  meta: {
    title: 'Msg',
    cnName : '成功提示页'
  }
};
let msgWarnRoute = {
  path: '/demos/msg/msgwarn',
  name: 'msgwarn',
  component: resolve => require(['./pages/msgwarn.vue'], resolve),
  meta: {
    title: 'Msg',
    cnName : '警告提示页'
  }
};

let msgErrorRoute = {
  path: '/demos/msg/msgerror',
  name: 'msgerror',
  component: resolve => require(['./pages/msgerror.vue'], resolve),
  meta: {
    title: 'Msg',
    cnName : '错误提示页'
  }
};
let msgInfoRoute = {
  path: '/demos/msg/msginfo',
  name: 'msginfo',
  component: resolve => require(['./pages/msginfo.vue'], resolve),
  meta: {
    title: 'Msg',
    cnName : '提示页'
  }
};

let msgWaitRoute = {
  path: '/demos/msg/msgwait',
  name: 'msgwait',
  component: resolve => require(['./pages/msgwait.vue'], resolve),
  meta: {
    title: 'Msg',
    cnName : '等待提示页'
  }
};
let listRoute = {
  path: '/list/:id',
  name: 'list/:id',
  component: resolve => require(['./pages/list.type.vue'], resolve),
  meta: {
    title: 'List',
    cnName : '列表'
  }
};

// let page404Route = {
// 	path:'*',
// 	//redirect:errorPage,
// 	name : 'error',
// 	component: require('./404.vue'),
// 	meta :{
// 		title : 'Error',
// 		cnName : '出错啦'
// 	}
// }


route.route = route.route.concat([indexRoute,demoRoute,msgSuccessRoute,msgWarnRoute,msgErrorRoute,msgInfoRoute,msgWaitRoute,listRoute]);


export const navs = route.navs;
export default route.route;
