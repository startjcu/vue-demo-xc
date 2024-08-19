### Vue路由使用流程

1、安装依赖

```bash
npm i vue-router
```

2、配置路由器 router/index.ts

```js
import HelloWorld from '@/components/HelloWorld.vue'
import HooksDome from '@/components/HooksDome.vue'
import Person from '@/components/Person.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: HelloWorld
  },
  // 命名路由
  {
    name: 'my',
    path: '/person',
    component: Person
  },
  {
    path: '/hooks',
    component: HooksDome
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]

export default createRouter({ history: createWebHistory(), routes })
```

3、在入口文件中引入 main.ts

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

4、在主页面中配置路由视图 App.vue

```vue
<template>
  <div>
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterLink :to="{ name: 'my' }" active-class="active">个人</RouterLink>
    <!-- 默认push，replace是替换，不能回到上一个 -->
    <RouterLink replace :to="{ path: '/hooks' }" active-class="active">Hook</RouterLink>
  </div>
  <RouterView />
</template>
```

_一般组件放在components中，路由组件放在pages/views文件中_

### 路由工作模式

| 模式    | 优点     | 缺点          | 应用场景             |
| ------- | -------- | ------------- | -------------------- |
| history | 美观     | 后端须配置    | 公开网站，如购物官网 |
| hash    | 兼容性好 | 不美观，SEO差 | 内部使用，如后台系统 |

### 嵌套路由

#### query传参

1、配置

```js
const routes = [
  {
    path: '/news',
    component: News,
    children: [
      {
        path: 'detail', // 子级前面别加 /
        component: Detail
      }
    ]
  }
]
```

2、传递参数

```vue
<RouterLink
  v-for="news in newsList"
  :key="news.id"
  :to="{
    path: '/news/detail',
    query: news
  }"
>{{ news.title }}</RouterLink>
```

3、接收参数

```js
import { useRoute } from 'vue-router'

const { query } = toRefs(useRoute()) // 响应式
```

#### params传参

1、配置

```js
const routes = [
  {
    path: '/news',
    component: News,
    children: [
      {
        name: 'detailPage', // 占位配置可选用 ?
        path: 'detail2/:id/:title/:author/:content?',
        component: Detail
      }
    ]
  }
]
```

2、传参

```vue
<!-- params传参必须用命名路由 -->
<RouterLink
  v-for="news in newsList"
  :key="news.id"
  :to="{
    name: 'detailPage',
    params: news
  }"
>{{ news.title }}</RouterLink>
```

3、接收参数

```js
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

const { params } = toRefs(useRoute())
```

#### 配置路由props

1.params传参配置

```js
const routes = [
  {
    path: '/news',
    component: News,
    children: [
      {
        name: 'detailPage', // 占位配置可选用 ?
        path: 'detail2/:id/:title/:author/:content?',
        component: Detail,
        props: true // 路由props，这种配置只适用params参数
      }
    ]
  }
]
```

2、query传参props配置

```js
const routes = [
  {
    path: '/news',
    component: News,
    children: [
      {
        path: 'detail',
        component: Detail,
        // props配置的函数用法
        props(route: any) {
          return route.query
        }
      }
    ]
  }
]
```

3、对象配置发，每次都是固定对象，使用场景较少

_接收超级简单，一行搞定_

```js
defineProps(['id', 'title', 'author', 'content'])
```

### 编程式路由导航

```js
const router = useRouter()

interface News {
  id: string,
  title: string,
  author: string,
  constent?: string
}

function skip(news: News) {
  router.push({
    path: '/news/detail',
    query: { ...news }
  })
}
```
