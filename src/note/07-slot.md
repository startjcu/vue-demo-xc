### 默认插槽

在子组件中留出一块区域，该区域的内容由组件定义

```vue
<template>
  <div class="con">
    <Category title="今日新闻">
      <ul>
        <li v-for="item in arr" :key="item.id">{{ item.text }}</li>
      </ul>
    </Category>
    <Category title="今日图片">
      <img src="../../assets/logo.svg" />
    </Category>
  </div>
</template>
```

```vue
<script lang="ts" setup>
defineProps(['title'])
</script>

<template>
  <div class="con1">
    <h2>{{ title }}</h2>
    <slot>默认内容</slot>
  </div>
</template>
```

### 具名插槽

默认插槽的名字是`default`，指定插槽名规范写法是`v-slot:xxx`或简写为`#xxx`

`v-slot:xxx=""`或`#xxx=""`用来获取作用域插槽传递的值

```vue
<template>
  <div class="con">
    <Category>
      <template v-slot:s2>
        <ul>
          <li v-for="item in arr" :key="item.id">{{ item.text }}</li>
        </ul>
      </template>
      <!-- 具名插槽最终排版会按子组件的定义顺序排 -->
      <template v-slot:s1>
        <h2>今日News</h2>
      </template>
    </Category>
    <Category>
      <!-- 插槽语法糖 -->
      <template #s1>
        <p>今日美食</p>
      </template>
      <template #s2>
        <img src="../../assets/logo.svg" />
      </template>
    </Category>
  </div>
</template>
```

```vue
<template>
  <div class="con1">
    <slot name="s1"></slot>
    <slot name="s2">具名插槽s2默认内容</slot>
  </div>
</template>
```

### 作用域插槽

插槽的数据由定义插槽的子组件提供，父组件定义结构

```vue
<template>
  <div class="con">
    <Category v-slot="params">
      <ul>
        <li v-for="item in params.list" :key="item.id">{{ item.text }}</li>
      </ul>
    </Category>
    <Category #default="{ list }">
      <ol>
        <li v-for="item in list" :key="item.id">{{ item.text }}</li>
      </ol>
    </Category>
  </div>
</template>
```

```vue
<script lang="ts" setup>
import { reactive } from 'vue'

const list = reactive([
  { id: 1, text: 'news1' },
  { id: 2, text: 'news222' }
])
</script>

<template>
  <div class="con1">
    <h2>我的新闻</h2>
    <slot :list="list"></slot>
  </div>
</template>
```
