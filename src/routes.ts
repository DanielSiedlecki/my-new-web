import { createRouter, createWebHistory } from "vue-router"
import inBuilding from './components/inBuilding.vue'
import Home from './components/Home.vue'



const routes: Array<any> = [

    {

        path: '/',
        component: inBuilding,
        name: 'inBuilding'
    },
    {

        path: '/home',
        component: Home,
        name: 'Home'
    }
]

const router = createRouter({
   
    history: createWebHistory(),
    linkExactActiveClass: 'active',
     routes,
})

export default router