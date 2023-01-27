import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "loginView" */ '../views/LoginView.vue')
  },
  {
    /* path: '/product-details/:id', */
    path: '/product-details',
    name: 'productDetailsView',
    component: () => import(/* webpackChunkName: "productDetailsView" */ '../views/ProductDetailsView.vue'),
    /* props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: null } : { id }
    } */
  },
  {
    path: '/products-list',
    name: 'productsListView',
    component: () => import(/* webpackChunkName: "productsListView" */ '../views/ProductsListView.vue')
  },
  {
    path: '/user-profile',
    /* path: '/user-profile/:id', */
    name: 'userProfileView',
    component: () => import(/* webpackChunkName: "userProfileView" */ '../views/UserProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
