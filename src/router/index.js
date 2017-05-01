import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/page/Index'
import Level1 from '@/page/level1/Index'
import Level2 from '@/page/level2/Index'
import Level3 from '@/page/level3/Index'
import Level4 from '@/page/level4/Index'
import Level5 from '@/page/level5/Index'
import Level6 from '@/page/level6/Index'
import Level7 from '@/page/level7/Index'
import Level8 from '@/page/level8/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      children: [
        {
          path: 'level1',
          component: Level1
        },
        {
          path: 'level2',
          component: Level2
        },
        {
          path: 'level3',
          component: Level3
        },
        {
          path: 'level4',
          component: Level4
        },
        {
          path: 'level5',
          component: Level5
        },
        {
          path: 'level6',
          component: Level6
        },
        {
          path: 'level7',
          component: Level7
        },
        {
          path: 'level8',
          component: Level8
        }
      ]
    }
  ]
})
