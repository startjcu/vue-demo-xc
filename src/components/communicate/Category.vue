<script lang="ts" setup>
import { reactive } from 'vue';

const list = reactive([
  { id: 1, text: 'news1' },
  { id: 2, text: 'news222' },
])
</script>

<template>
  <div class="con1">
    <h2>我的新闻</h2>
    <slot :list="list"></slot>
  </div>
</template>

<style scoped>
.con1 {
  width: 200px;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h2 {
  background: orange;
  color: #fff;
  height: 32px;
  line-height: 32px;
  width: 100%;
  margin-top: 8px;
  text-align: center;
}
</style>