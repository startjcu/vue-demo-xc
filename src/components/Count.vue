<script lang="ts" setup>
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

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
</script>

<template>
  <h2>Store</h2>
  <p>{{ countStore.sum }}</p>
  <p>放大100倍: {{ bigSum }}</p>
  <h4>{{ msg }}</h4>
  <select v-model.number="num">
    <option value="1">1</option>
    <option value="3">3</option>
    <option value="5">5</option>
  </select>
  <button @click="add1">add1</button>
  <button @click="add2">add2</button>
  <button @click="add3">add3</button>
</template>

<style scoped></style>