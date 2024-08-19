<script lang="ts" setup>
import useSum from '@/hooks/useSum';
import useDog from '@/hooks/useDog';

const { sum, sum10, add } = useSum()
const { dogList, getOneDog } = useDog()
</script>

<template>
  <h3>原始值: {{ sum }}, 放大10倍: {{ sum10 }}</h3>
  <button @click="add">+1</button>
  <button @click="getOneDog">add one dog</button><br>
  <hr>
  <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
  <hr>
</template>

<style scoped>
img {
  height: 100px;
  margin-right: 8px;
}

button {
  margin-right: 8px;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>