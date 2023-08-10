import { createRouter, createWebHistory } from "vue-router"
import inBuilding from './components/inBuilding.vue'



const routes: Array<any> = [

    {

        path: '/',
        component: inBuilding,
        name: 'inBuilding'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkExactActiveClass: 'active'
})

export default router