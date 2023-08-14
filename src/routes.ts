import { createRouter, createWebHistory } from "vue-router"
import inBuilding from './components/inBuilding.vue'
import HomeView from './view/HomeView.vue'




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

   
    

]

const router = createRouter({
   
    history: createWebHistory(),
    linkExactActiveClass: 'active',
     routes,
})

export default router