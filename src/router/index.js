import { createRouter, createWebHistory } from 'vue-router'

import RmCharacters from '../views/RmCharacters.vue'
import RmEpisodies from '../views/RmEpisodies.vue'
import RmLocations from '../views/RmLocations.vue'
import RmPrincipal from '../views/RmPrincipal.vue'
// import RmError from '../views/RmError.vue'
// import RmHeader from '../components/RmHeader.vue'

const routes = [
  {
    path: '/',
    name: 'RmPrincipal',
    component: RmPrincipal
  },
  {
    path: '/characters',
    name: 'RmCharacters',
    component: RmCharacters
  },
  {
    path: '/locations',
    name: 'RmLocations',
    component: RmLocations
  },
  {
    path: '/episodies',
    name: 'RmEpisodies',
    component: RmEpisodies
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '*',
  //   name: 'RmError',
  //   component: RmError
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
