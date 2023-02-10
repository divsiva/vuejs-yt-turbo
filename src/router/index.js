import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChannelList from '../components/ChannelList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/channel-list/:id',
      name: 'ChannelList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ChannelList,

      // component: () => import('../components/ChannelList.vue'),
      props:true
    },
    { path: '/', component: ChannelList },

  
  ]
})

export default router
