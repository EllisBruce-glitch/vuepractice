import { createRouter, createWebHistory } from "vue-router";
import { store } from '@/store'

import AuthLayout from "@/layout/Auth";
import Login from "@/views/Login";
import Logout from "@/views/Logout";

const routes = [
  {
    path: "/",
    redirect: "/login", //default to dashboard
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        meta : { auth : false },
        components: { default: Login },
      },
      {
        path: "/logout",
        name: "logout",
        meta : { auth : false },
        components: { default: Logout },
      }
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes
})

router.beforeEach((to, from, next) => {
  const userToken = store.getters['user/getToken'];

  let { auth } = to.meta;

  if (auth && !userToken){
    next('/login')
  } 
  else {
    next()
  }
})

export default router;
