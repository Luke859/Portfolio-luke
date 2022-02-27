import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experiences from '../views/Experiences.vue'
import Projets from '../views/Projets.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/About', name: 'About', component: About},
    {path: '/Projets', name: 'Projets', component: Projets},
    {path: '/Experiences', name: 'Experiences', component: Experiences}
]

const router = createRouter({
    history: createWebHistory(),

    routes
})

export default router