import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
			beforeEnter:(to, from, next) => {
			const loggedIn = localStorage.getItem('email');
				if(loggedIn){
					return next('/')
				}
				next()
			}
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    }
  ],

})

router.beforeEach((to, from, next) => {
		const publicPages = ['/login', '/register'];
		const authRequired = !publicPages.includes(to.path);
		const loggedIn = localStorage.getItem('email');
		if(authRequired && !loggedIn){
			return next('/login')
		}
		next();
})

export default router;
