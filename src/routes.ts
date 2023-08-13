import { createRouter, createWebHistory } from "vue-router"
import inBuilding from './components/inBuilding.vue'
import HomeView from './view/HomeView.vue'
import AboutMe from './components/AboutMe.vue'
import test from './components/test.vue'


const routes: Array<any> = [

    {

        path: '/',
        component: inBuilding,
        name: 'inBuilding'
    },
    {

        path: '/home',
        component: HomeView,
        name: 'Home'
    },

    {

        path: '/aboutme',
        component: AboutMe,
        name: 'AboutMe'


    },
    {

        path: '/test',
        component: test,
        name: 'test'


    }

]

const router = createRouter({
   
    history: createWebHistory(),
    linkExactActiveClass: 'active',
     routes,
})

export default router