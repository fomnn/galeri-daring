import HomeLayout from '@/layouts/HomeLayout.vue'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/',
		component: HomeLayout,
		children: [
			{
				path: '',
				redirect: '/home',
			},
			{
				path: 'home',
				component: () => import('@/views/HomePage.vue'),
			},
			{
				path: 'upload',
				component: () => import('@/views/upload/UploadPage.vue'),
			},
		],
	},
	{
		path: '/auth/login',
		name: 'Login',
		component: () => import('@/views/auth/LoginPage.vue'),
	},
	{
		path: '/auth/register',
		name: 'Register',
		component: () => import('@/views/auth/RegisterPage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
