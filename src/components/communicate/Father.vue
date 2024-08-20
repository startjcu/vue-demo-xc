<script lang="ts" setup>
import AsyncChild from './AsyncChild.vue';
</script>

<template>
  <div class="con">
    <h2>父组件</h2>
    <Suspense>
      <template #default>
        <AsyncChild />
      </template>
      <template #fallback>
        加载中……
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.con {
  margin: 12px;
  padding: 16px;
  /* color: orange; */
  height: 400px;
  width: 400px;
  border: 1px solid #ccc;
  /* 该属性会让fixed定位相对于当前容器 */
  /* filter: saturate(0%); */
}

button {
  margin-right: 8px;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>