<script setup lang="ts">
import { type PersonInter, type Persons } from '@/types'
import { reactive } from 'vue';

const person: PersonInter = { id: '001', name: 'Bob', age: 20 }

const personList: Persons = [
  { id: '002', name: 'Tom', age: 12 },
  { id: '003', name: 'Jerry', age: 22 }
]

// reactive上可以定义泛型
const personList2 = reactive<Persons>([])

/**
 * 父组件传的属性可以直接在模板中用
 * 但在JS中用必须从方法的返回值(props)中拿
 */
// 数组方式定义
// const props = defineProps(['a'])
// 对象方式定义
// const props = defineProps({
//   a: {
//     type: String,
//     default: 'hello',
//     required: true
//   }
// })
// TS使用泛型定义
// const props = withDefaults(defineProps<{ list?: Persons, a: String }>(), {
//   list: () => [{ id: '003', name: 'David', aged: 20 }],
//   a: () => 'default msg'
// })

const props = withDefaults(defineProps<{
  list?: Persons,
  a: String // 默认就是必传
}>(), {
  list: () => [{ id: '004', name: 'hello', age: 20 }],
  a: () => 'hello world'
})

console.log(props.a)

</script>

<template>
  <h2>{{ a }}</h2>
</template>

<style scoped></style>