<script lang="ts" setup>
defineProps(['id', 'title', 'author', 'content'])
</script>

<template>
  <h2>{{ title }}</h2>
  <p>{{ author }}</p>
  <p>{{ content }}</p>
</template>

<style scoped></style>