import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'Login',
    component: ()=> import('../views/home/Login.vue')
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
