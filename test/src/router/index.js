import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/public/HomePage'
import SplashScreenPage from '../pages/public/SplashScreenPage'
import SignUpPage from '../pages/public/SignUpPage'
import SignInPage from '../pages/public/SignInPage'
import ForgotPassword from '../pages/public/ForgotPasswordPage'
import Recovery from '../pages/public/RecoveryPage'
import NewPassword from '../pages/public/NewPasswordPage'
import PwResetSuccess from '../pages/public/PwResetSuccessPage'
import WelcomeBack from '../pages/public/WelcomeBackPage'

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
            path: '/pwresetsuccess',
            name: 'pwresetsuccess',
            component: PwResetSuccess
        },

        {
            path: '/welcomeback',
            name: 'welcomeback',
            component: WelcomeBack
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