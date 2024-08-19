<script setup lang="ts">

</script>

<template>
  <div>
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterLink to="/person" active-class="active">个人</RouterLink>
    <RouterLink to="/hooks" active-class="active">钩子</RouterLink>
    <RouterLink to="/news" active-class="active">新闻</RouterLink>
    <RouterLink to="/count" active-class="active">仓库</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
a {
  padding: 8px 16px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 16px;
}
</style>
