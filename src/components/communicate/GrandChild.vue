<script lang="ts" setup>
import { inject } from 'vue';

const { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (n: number) => { } })
const car = inject('car', { brand: '默认品牌', price: 0 })
</script>

<template>
  <div class="con">
    <h2>孙组件</h2>
    <p>收到来自祖组件的存款：{{ money }}</p>
    <p>汽车：一辆{{ car.brand }}，价值{{ car.price }} W</p>
    <button @click="updateMoney(6)">孙组件修改祖组件</button>
  </div>
</template>

<style scoped>
.con {
  margin: 12px;
  padding: 12px;
  border: 1px solid #ddd;
}
</style>