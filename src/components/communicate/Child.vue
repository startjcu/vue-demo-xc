<script lang="ts" setup>
import GrandChild from './GrandChild.vue';

</script>

<template>
  <div class="con">
    <h2>子组件</h2>
    <GrandChild />
  </div>
</template>

<style scoped>
.con {
  margin: 12px;
  padding: 12px;
  border: 1px solid #ddd;
}
</style>