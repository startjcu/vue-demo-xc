<script lang="ts" setup>
import { provide, reactive, ref } from 'vue';
import Child from './Child.vue';

const money = ref(100)
const car = reactive({ brand: '宝马', price: 30 })

function updateMoney(val: number) {
  money.value -= val
}

provide('moneyContext', { money, updateMoney })
provide('car', car)
</script>

<template>
  <div class="con">
    <h2>父组件</h2>
    <p>存款：{{ money }}</p>
    <p>汽车：一辆{{ car.brand }}，价值{{ car.price }} W</p>
    <Child />
  </div>
</template>

<style scoped>
.con {
  margin: 12px;
  padding: 12px;
  border: 1px solid #ddd;
}

button {
  margin-right: 8px;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>