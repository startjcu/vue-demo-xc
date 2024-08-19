import axios from "axios";
import { onMounted, reactive } from "vue";

export default function () {

  const dogList = reactive<Array<string>>([])

  async function getOneDog() {
    const result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    dogList.push(result.data.message)
  }

  onMounted(() => {
    getOneDog()
  })

  return { dogList, getOneDog }
}