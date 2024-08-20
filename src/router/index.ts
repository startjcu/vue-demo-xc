import Father from '@/components/communicate/Father.vue'
import Count from '@/components/Count.vue'
import CssDemo from '@/components/CssDemo.vue'
import Detail from '@/components/Detail.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import HooksDome from '@/components/HooksDome.vue'
import Person from '@/components/Person.vue'
import News from '@/pages/News.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: HelloWorld
  },
  {
    path: '/css',
    component: CssDemo
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/hooks',
    component: HooksDome
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        path: 'detail',
        component: Detail,
        props(route: any) {
          return route.query
        }
      },
      {
        name: 'detailPage', // 配置可选用 ?
        path: 'detail2/:id/:title/:author/:content?',
        component: Detail,
        props: true
      },
    ]
  },
  {
    path: '/count',
    component: Count
  },
  {
    path: '/communicate',
    component: Father
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default createRouter({ history: createWebHistory(), routes })