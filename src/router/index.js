import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const aside = r => require.ensure([], () => r(require('@/components/aside')), 'aside');
const collegePage = r => require.ensure([], () => r(require('@/page/collegePage')), 'collegePage');

const routes = [
  {
    path: '/',
    component:aside,
    children:[
      {
        path: '/:id',
        name:'page',
        component: collegePage
      }
    ]
  }
]
export default new Router({
  mode:'history',
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
