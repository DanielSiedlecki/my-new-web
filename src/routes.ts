import { createRouter, createWebHistory } from "vue-router"
import inBuilding from './components/inBuilding.vue'
import HomeView from './view/HomeView.vue'




const routes: Array<any> = [

    {

        path: '/',
        component: inBuilding,
        name: 'inBuilding',
        meta: { title: 'inBuilding' as string }

    },
    {

        path: '/home',
        component: HomeView,
        name: 'Home',
        meta: { title: 'Home' as string }
    },




]

const router = createRouter({

    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
})


router.beforeEach((to) => {


    document.title = (to.meta?.title as string) ?? 'Default Title'
})

export default router