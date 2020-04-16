import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const mode = 'history' // Removes # in URL: Configure history mode for production

const routes = [
	{
		path: '/',
		name: 'landing',
		component: Landing
	},
	{
		path: '/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/Login.vue')
	},
	{
		path: '*',
		component: () => import ('../views/NotFound.vue')
	}
]

const router = new VueRouter({
	mode,
	routes
})

export default router