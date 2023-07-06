import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/public/HomePage'
import SplashScreenPage from '../pages/public/SplashScreenPage'
import SignUpPage from '../pages/public/SignUpPage'
import SignInPage from '../pages/public/SignInPage'
import ForgotPassword from '../pages/public/ForgotPasswordPage'
import Recovery from '../pages/public/RecoveryPage'
import NewPassword from '../pages/public/NewPasswordPage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'splashscreen',
            component: SplashScreenPage
        },

        {
            path: '/signup',
            name: 'signup',
            component: SignUpPage
        },

        {
            path: '/signin',
            name: 'signin',
            component: SignInPage
        },

        {
            path: '/forgotpassword',
            name: 'forgotpassword',
            component: ForgotPassword
        },

        {
            path: '/recovery',
            name: 'recovery',
            component: Recovery
        },

        {
            path: '/newpassword',
            name: 'newpassword',
            component: NewPassword
        },

        {
            path: '/home',
            name: 'Home',
            component: HomePage
        },



        // {
        //     path: '/:catchAll(.*)',
        //     name: '404 Name',
        //     component: 404 - Page
        // }
    ]

})

export default router