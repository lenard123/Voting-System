require('./bootstrap.js');
//window.VueRouter = require('vue-router').default;
//import VueRouter from 'vue-router';
import Util from './util.js';
import routes from './routesIndex.js';


Vue.use(VueRouter);
Vue.mixin(Util);

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes
});

const app = new Vue({
	router
}).$mount('#app');
