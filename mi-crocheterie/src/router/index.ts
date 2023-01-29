import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/* webpackChunkName: "productsListView" */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'productsListView',
    component: () => import('../views/ProductsListView.vue')
  },
  {
    path: "/product-details/:id",
    name: "productDetailsView",
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
