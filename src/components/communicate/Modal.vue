<script lang="ts" setup>
import { ref } from 'vue';
const isShow = ref(false)
</script>

<template>
  <button @click="isShow = true">展示弹框</button>
  <Teleport to="body">
    <div v-show="isShow" class="modal">
      <h2>Modal</h2>
      <p>content xxx</p>
      <button @click="isShow = false">关闭</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  text-align: center;
  height: 200px;
  width: 200px;
  background: skyblue;
  opacity: 0.7;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  /* 水平垂直居中 */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>