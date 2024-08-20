import { customRef } from "vue"

export default function (initValue = '', delay = 500) {
  let timer: number
  const msg = customRef((track, trigger) => ({
    get() {
      /**
       * 跟踪
       * 通知Vue要对改数据持续关注
       * 一旦msg变化就更新页面
       */
      track()
      return initValue
    },
    set(val) {
      clearTimeout(timer)
      setTimeout(() => {
        initValue = val
        /* 通知Vue数据msg变化了 */
        trigger()
      }, delay)
    }
  }))
  return { msg }
}