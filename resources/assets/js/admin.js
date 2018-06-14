require('./bootstrap.js');

import VueRouter from 'vue-router';
import Util from './util.js';
import routes from './routes.js';

Vue.use(VueRouter);
Vue.mixin(Util);

const router = new VueRouter({
	linkActiveClass: 'active',
	routes
});

const app = new Vue({
	router
}).$mount('#app');
