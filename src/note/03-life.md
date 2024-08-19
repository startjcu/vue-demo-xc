### Vue2生命周期

| 前            | 阶段 | 完毕      |
| ------------- | ---- | --------- |
| beforeCreate  | 创建 | created   |
| beforeMount   | 挂载 | mounted   |
| beforeUpdate  | 更新 | updated   |
| beforeDestroy | 销毁 | destroyed |

_生命周期、生命周期函数、生命周期钩子都是同一概念_

### Vue3生命周期

| 前              | 阶段 | 完毕        |
| --------------- | ---- | ----------- |
| -               | 创建 | setup       |
| onBeforeMount   | 挂载 | onMounted   |
| onBeforeUpdate  | 更新 | onUpdated   |
| onBeforeUnmount | 卸载 | onUnmounted |

_卸载效果用v-if来测试_

### 自定义Hooks

定义：useDog.ts

```ts
import axios from 'axios'
import { onMounted, reactive } from 'vue'

export default function () {
  const dogList = reactive<Array<string>>([])

  async function getOneDog() {
    const url = 'https://dog.ceo/api/breed/pembroke/images/random'
    const result = await axios.get(url)
    dogList.push(result.data.message)
  }

  onMounted(() => {
    getOneDog()
  })

  return { dogList, getOneDog }
}
```

使用 HooksDome.vue

```js
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const { sum, sum10, add } = useSum()
const { dogList, getOneDog } = useDog()
```

_类似于vue2中的minxi，真正实现了组合的思想_
