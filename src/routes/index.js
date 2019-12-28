import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/', name: 'Home', component: Home
        },
        {
            path:'/image/:id' , component: Detail
        }
    ]
})

export default router