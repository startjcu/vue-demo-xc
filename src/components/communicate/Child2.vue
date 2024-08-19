<script lang="ts" setup>
import { ref } from 'vue';

const computer = ref('联想')
const book = ref(6)

defineExpose({ computer, book })
</script>

<template>
  <div class="con">
    <h2>兄弟组件</h2>
    <p>电脑：{{ computer }}</p>
    <p>书籍：{{ book }} 本</p>
  </div>
</template>

<style scoped>
.con {
  margin: 12px;
  padding: 12px;
  border: 1px solid #ddd;
}
</style>