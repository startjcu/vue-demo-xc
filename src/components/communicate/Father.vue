<script lang="ts" setup>
import Category from './Category.vue';
</script>

<template>
  <div class="con">
    <Category v-slot="params">
      <ul>
        <li v-for="item in params.list" :key="item.id">{{ item.text }}</li>
      </ul>
    </Category>
    <Category #default="{ list }">
      <ol>
        <li v-for="item in list" :key="item.id">{{ item.text }}</li>
      </ol>
    </Category>
  </div>
</template>

<style scoped>
.con {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}

button {
  margin-right: 8px;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>