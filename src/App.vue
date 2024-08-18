<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const hao = ref()

function showLog() {
  console.log(hao.value)
  console.log(hao.value.count)
  console.log(hao.value.user)
  hao.value.getDom()
  hao.value.addFn()
}
</script>

<template>
  <HelloWorld ref="hao" />
  <button @click="showLog">Parent</button>
</template>

<style scoped></style>
