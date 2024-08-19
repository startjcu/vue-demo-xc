import { computed, ref } from "vue";

export default function () {
  const sum = ref(0)

  function add() {
    sum.value++
  }

  const sum10 = computed(() => {
    return sum.value * 10
  })

  return { sum, add, sum10 }
}