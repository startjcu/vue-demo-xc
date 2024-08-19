<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const newsList = ref([
  { id: '001', title: 'new 11', content: '第一篇报道', author: 'one' },
  { id: '002', title: 'new 222', content: 'second news', author: 'two' },
  { id: '003', title: 'new 33333', author: 'three' },
])

const router = useRouter()

interface News {
  id: string,
  title: string,
  author: string,
  constent?: string
}

function skip(news: News) {
  router.push({
    path: '/news/detail',
    query: { ...news }
  })
}

</script>

<template>
  <div class="con">
    <div class="left">
      <RouterLink v-for="news in newsList" :key="news.id" :to="{
        path: '/news/detail',
        query: news
      }">{{ news.title }}</RouterLink>
      <hr>
      <!-- params传参必须用命名路由 -->
      <RouterLink v-for="news in newsList" :key="news.id" :to="{
        name: 'detailPage',
        params: news
      }">{{ news.title }}</RouterLink>
      <button v-for="news in newsList" :key="news.id" @click="skip(news)">{{ news.title }}</button>
    </div>
    <div class="right">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.con {
  display: flex;
  padding: 8px;
}

.left {
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 8px;
}

.right {
  flex: 1;
  height: 400px;
  border: 1px solid #ddd;
  padding: 8px;
}

li {
  list-style-type: none;
  padding: 8px;
  cursor: pointer;
}

a {
  display: block;
}
</style>