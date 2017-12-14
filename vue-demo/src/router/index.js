import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Images from '@/components/images'
import LoginPage from '@/components/login'
import RegistrationPage from '@/components/registration'
import ServicesPage from '@/components/services'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/services',
            name: 'ServicesPage',
            component: ServicesPage
        },
        {
            path: '/images/:id',
            name: 'Images',
            component: Images
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/registration',
            name: 'RegistrationPage',
            component: RegistrationPage
        }

  ]
})
