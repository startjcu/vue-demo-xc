### shallow相关

限制第一层，用来提升性能

> shallowRef

只能通过通过 `xxx.value = `来改，不能`xxx.value.yyy = `

> shallowReactive

只能`xxx.yyy = `，不能`xxx.yyy.zzz = `

> readolny

设置深只读，参数为ref或reactive定义的数据，会保留关联关系，但不能修改数据

> shallowReadonly

只限制第一层的只读，后续层次的也可以修改，如reactive定义的 `xxx.yyy.zzz = `

### toRow

用于获取响应式对象的原始对象，使用场景用于临时读取赋值，不想引起视图更新

### markRow

定义的对象，不能做成响应式的，使用场景定义第三方库时防止错误将其变成响应式的了，如mockjs

### 自定义ref

```js
import { customRef } from "vue"

export default function (initValue = '', delay = 500) {
  let timer: number
  const msg = customRef((track, trigger) => ({
    get() {
      /**
       * 跟踪
       * 通知Vue要对改数据持续关注
       * 一旦msg变化就更新页面
       */
      track()
      return initValue
    },
    set(val) {
      clearTimeout(timer)
      setTimeout(() => {
        initValue = val
        /* 通知Vue数据msg变化了 */
        trigger()
      }, delay)
    }
  }))
  return { msg }
}
```

### Teleport

父组件

```vue
<script lang="ts" setup>
import Modal from './Modal.vue'
</script>

<template>
  <div class="con">
    <h2>父组件</h2>
    <Modal />
  </div>
</template>

<style scoped>
.con {
  margin: 12px;
  padding: 16px;
  color: orange;
  height: 400px;
  width: 400px;
  border: 1px solid #ccc;
  /* 该属性会让fixed定位相对于当前容器 */
  filter: saturate(0%);
}
</style>
```

弹出组件

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const isShow = ref(false)
</script>

<template>
  <button @click="isShow = true">展示弹框</button>
  <Teleport to="body">
    <div v-show="isShow" class="modal">
      <h2>Modal</h2>
      <p>content xxx</p>
      <button @click="isShow = false">关闭</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  text-align: center;
  height: 200px;
  width: 200px;
  background: skyblue;
  opacity: 0.7;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  /* 水平垂直居中 */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
```

### Suspense

```vue
<template>
  <div class="con">
    <h2>父组件</h2>
    <Suspense>
      <template #default>
        <AsyncChild />
      </template>
      <template #fallback> 加载中…… </template>
    </Suspense>
  </div>
</template>
```

异步组件

```vue
<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

const count = ref(9528)
const res = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(res.data.content)
</script>

<template>
  <h2>异步组件</h2>
  <p>{{ count }}</p>
</template>
```

### 全局API

```js
/* 全局组件 */
app.component('Hello', Hello)

/* 全局属性，不推荐 */
declare module 'vue' {
  interface ComponentCustomProperties {
    x: number
  }
}
app.config.globalProperties.x = 99

/* 自定义指令 */
app.directive('beauty', (el, { value }) => {
  el.innerText += value
  el.style.color = 'green'
})

/* 挂载、卸载应用 */
app.mount()
app.unmount()

/* 安装插件 */
app.use()
```

### 其他

官网 > 文档 > 从vue2迁移 > 非兼容性改变

1. 移除了过滤器filter
2. v-if和v-for可作用在同一元素上了，且v-if拥有更高优先级
3. 移除了$on、$off和$once实例方法
