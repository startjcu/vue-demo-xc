<script setup lang="ts">
import { computed, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';

/* 基本数据只能用ref */
const count = ref(0)

const addFn = () => {
  count.value++
}

/* ref各种类型的都可定义 */
const cars = ref([
  { brand: '宝马', price: 30 },
  { brand: '奔驰', price: 50 },

])

/**
 * reactive只能定义引用类型的
 * 局限：直接赋值为对象后会失去响应式
 * 遭遇方案：Object.assign(user, obj)
 */
const user = reactive({
  name: 'Bob',
  age: 18
})

const changeName = () => {
  user.name = 'Tom'
}

const changeAge = () => {
  user.age *= 2
}

/* toRef & toRefs */
const { name, age } = toRefs(user)

const changeName2 = () => {
  name.value += '~'
}

const changeAge2 = () => {
  age.value += 3
}

const nl = toRef(user, 'age')

const changeAge3 = () => {
  nl.value += 4
}

/**
 * computed 有缓存
 * 多次使用只调用一次
 * 依赖不变页面重新渲染也不会执行
 * 计算属性并非完全只读，可以间接改依赖
 */
const firstName = ref('zhang')
const lastName = ref('san')

const capitalUpper = (str: string) => {
  return str.replace(/^(\w)/, (n: string) => n.toUpperCase())
}

// 计算属性和方法的对比
const fullName = computed(() => {
  console.log('computed exec ==>')
  return capitalUpper(firstName.value) + '~' + lastName.value
})

const fullNameFn = () => {
  console.log('fn exec ==>')
  return capitalUpper(firstName.value) + '~' + lastName.value
}

// 计算属性的修改
const fullName2 = computed({
  get() {
    console.log('computed obj')
    return firstName.value + '~' + lastName.value
  },
  set(val) {
    [firstName.value, lastName.value] = val.split('-')
  }
})

const setComputedFn = () => {
  fullName2.value = 'huang-ling'
}

/**
 * 监视，可停止
 * 1.ref，定义的对象监听和该对象属性的监听不同
 * 2.reactive，默认开启深度监听，没法关闭
 * 3.监视对象的某个属性
 * 3.1 若该属性是基本类型必须要用函数返回值
 * 3.2 若该属性是引用类型
 *  -直接用该属性，只监听到细枝末节
 *  -用函数返回值，只能监听整体
 *  *最佳实践，用返回值+深度监听
 * 4.监视多个，用数组
 */
const stopWatchCount = watch(count, (newValue, oldValue) => {
  console.log('newValue ==>', newValue)
  console.log('oldValue ==>', oldValue)
  if (newValue > 5) {
    stopWatchCount()
    console.log('stop watch count')
  }
})

// 监听ref定义的对象，新旧值是否不同和场景有关
const addCar = () => {
  cars.value.push({ brand: '保时捷', price: 200 })
}
const addCar2 = () => {
  cars.value = [{ brand: '保时捷', price: 200 }]
}
watch(cars, (newValue, oldValue) => {
  console.log('ref 定义的cars ==>', { newValue, oldValue })
})
// }, { deep: true, immediate: true })

watch(user, (newValue, oldValue) => {
  console.log('watch user ==>', newValue)
  console.log('watch user ==>', oldValue)
})
// 不能直接监听对象的属性，要用函数返回
watch(() => user.age, (val) => {
  console.log('watch user.age ==>', val)
})

watch([count, user], (val) => {
  console.log('多个监视 ==>', val)
})

// 立即执行，不需要指定具体监视谁
watchEffect((value) => {
  console.log('自动监视 ==>', value)
})

/**
 * 用在标签上的ref
 * 普通标签上获取的是DOM
 * 组件标签上获取的是组件实例
 * 用ref调用组件实例中的数据或方法，须提前在该组件中指定
 */
// 获取DOM 局部样式scoped的实现：给DOM + data-v-xxx属性
const title = ref()

const getDom = () => {
  console.log(title.value)
}
// 指定向外暴露的数据和方法，没有指定的调用者无法通过ref拿到
defineExpose({ getDom, count })
</script>

<template>
  <!-- 基本类型 -->
  <p class="text">{{ count }}</p>
  <button @click="addFn">add</button>
  <!-- 引用类型 -->
  <p>{{ user.name }}: {{ user.age }}</p>
  <button @click="changeName">name</button>
  <button @click="changeAge">age</button>
  <!-- toRefs -->
  <p>{{ name }}: {{ age }}</p>
  <button @click="changeName2">name</button>
  <button @click="changeAge2">age</button>
  <p>{{ nl }}</p>
  <button @click="changeAge3">age</button>
  <!-- 遍历 -->
  <ul>
    <li v-for="(item, index) in cars" :key="index">
      <span>{{ item.brand }}</span>
      <strong>{{ item.price }}</strong>
    </li>
  </ul>
  <button @click="addCar">addCar</button>
  <button @click="addCar2">addCar2</button>
  <!-- computed -->
  <p class="comp">
    <span>{{ fullName }}</span>
    <span>{{ fullName }}</span>
    <span>{{ fullNameFn() }}</span>
    <span>{{ fullNameFn() }}</span>
    <span>{{ fullName2 }}</span>
  </p>
  <button @click="setComputedFn">setComputed</button>
  <h3 ref="title">标题DOM</h3>
  <button @click="getDom">DOM</button>
</template>

<style scoped>
.text {
  color: orange;
}

p {
  padding-top: 8px;
  border-top: 1px solid #ddd;
}

button {
  margin-right: 8px;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.comp span {
  margin-right: 20px;
}
</style>