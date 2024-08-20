<script setup lang="ts">
const routes = [
  { to: '/home', text: '首页' },
  { to: '/css', text: 'CSS' },
  { to: '/person', text: '个人' },
  { to: '/hooks', text: '钩子' },
  { to: '/news', text: '新闻' },
  { to: '/count', text: '仓库' },
  { to: '/communicate', text: '通信' },
]
</script>
<template>
  <div>
    <RouterLink v-for="i in routes" :key="i.to" :to="i.to" active-class="bg-blue-100"
      class="inline-block px-3 py-1 m-2 border rounded hover:bg-blue-50">
      {{ i.text }}
    </RouterLink>
  </div>
  <RouterView />
</template>

<style scoped></style>
