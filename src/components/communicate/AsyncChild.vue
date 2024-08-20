<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

const count = ref(0)
const res = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(res.data.content)
const msg = ref(res.data.content)
</script>

<template>
  <h3>异步组件</h3>
  <p>{{ count }}</p>
  <p>{{ msg }}</p>
</template>

<style scoped></style>