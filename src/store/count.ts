import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

/* 组合式写法 */
export const useCountStore = defineStore('count', () => {
  const sum = ref(23)
  const msg = ref('total')

  function increament(val: number) {
    sum.value += val
  }

  const bigSum = computed(() => {
    return sum.value * 10
  })

  return { sum, msg, bigSum, increament }
})

/* 配置式写法 */
export const useCountStore2 = defineStore('count', {
  state: () => ({
    sum: 22,
    msg: 'total'
  }),
  actions: {
    increament(val: number) {
      // 这里得用this
      if (this.sum < 30) {
        this.sum += val
      }
    }
  },
  getters: {
    // 这里不用箭头函数也可用this
    bigSum: (state) => {
      return state.sum * 100
    }
  }
})
