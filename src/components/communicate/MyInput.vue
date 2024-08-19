<script lang="ts" setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)" />
</template>

<style scoped>
input {
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 20px;
}
</style>