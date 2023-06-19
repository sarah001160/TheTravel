import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component:HomePage,
    },
    {
      path:'/cardsactivity',//預設出現所有活動，所以空字串
      name:'CardsActivity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:()=> import('../components/CardsActivity.vue'),
    },
    {
      path:'/cardsscene',//所有景點
      name:'CardsScene',
      component:()=> import('../components/CardsScene.vue'),
    },
    {
      path:'/cardshotel',//所有民宿
      name:'CardsHotel',
      component:()=> import('../components/CardsHotel.vue'),
    },
    {
      path:'/cardsfood',//所有餐廳
      name:'CardsFood',
      component:()=> import('../components/CardsFood.vue'),
    },
   


  ]
})

export default router

// router.beforeEach((to)=>{console.log(to)})
