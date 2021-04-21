import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Shouye from './views/Shouye.vue'
import Bclass from './views/Bclass.vue'
import Bdormitory from './views/Bdormitory.vue'
import Bstudent from './views/Bstudent.vue'
import Sdhygiene from './views/Sdhygiene.vue'
import Sddevice from './views/Sddevice.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      redirect: "/shouye",
      component:About,
      children:[
        {
          path:'/shouye',
          component:Shouye
        },
        {
          path:'/bclass',
          component:Bclass
        },
        {
          path:'/bdormitory',
          component:Bdormitory
        },
        
        {
          path:'/bstudent',
          component:Bstudent
        },
        {
          path:'/Sdhygiene',
          component:Sdhygiene
        },
        {
          path:'/Sddevice',
          component:Sddevice
        }
      ]
    }
  ]
})
