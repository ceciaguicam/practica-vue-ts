import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import haveRoleGuard from './role-guards';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'productsListView',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "productsListView" */ '../views/ProductsListView.vue')
  },
  {
    path: "/product-details/:id",
    name: "productDetailsView",
    beforeEnter: [haveRoleGuard],
    component: () =>
      import(/*webpackChunkName: productDetailsView*/ "../views/ProductDetailsView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const productRole = localStorage.getItem("productRole");
      return isNaN(id) ? { id: null, productRole } : { id, productRole };
    },
  },
  {
    path: '/user-profile',
    /* path: '/user-profile/:id', */
    name: 'userProfileView',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "userProfileView" */ '../views/UserProfileView.vue')
  }
  ,
  {
    path: '/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "loginView" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
