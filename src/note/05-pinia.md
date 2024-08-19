### 下载配置Pinia

1、安装依赖

```bash
npm i pinia
```

2、配置，main.ts

```js
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
```

### 使用pinia

1、定义store：store/count.ts 配置式写法

```js
export const useCountStore = defineStore('count', {
  state: () => ({
    sum: 22,
    msg: 'total'
  }),
  actions: {
    increament(val: number) {
      // 这里得用this
      if (this.sum < 30) {
        this.sum += val
      }
    }
  },
  getters: {
    // 这里不用箭头函数也可用this
    bigSum: (state) => {
      return state.sum * 100
    }
  }
})
```

2、使用和修改store

```js
const num = ref(0)
const countStore = useCountStore()
/* 直接解构出sum会丢掉响应式 */
console.log(countStore.sum)
/* 只会将store中的数据转成响应式 */
const { sum, bigSum, msg } = storeToRefs(countStore)
console.log(sum.value)

/* 直接修改 */
function add1() {
  countStore.sum += num.value
}

/* 通过actions修改，适用于有共有逻辑的情况 */
function add2() {
  countStore.increament(num.value)
}

/* 使用$patch修改，适用于同时修改多个的情况 */
function add3() {
  countStore.$patch({ sum: 999, msg: 'Hello' })
}

/* 订阅 */
countStore.$subscribe((mutate, state) => {
  console.log(mutate)
  console.log(state)
})
```

3、组合式写法，必须使用return

```js
export const useCountStore = defineStore('count', () => {
  const sum = ref(23)
  const msg = ref('total')

  function increament(val: number) {
    sum.value += val
  }

  const bigSum = computed(() => {
    return sum.value * 10
  })

  return { sum, msg, bigSum, increament }
})
```
