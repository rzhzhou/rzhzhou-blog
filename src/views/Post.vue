<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '../posts/data.js'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('bash', bash)

import 'highlight.js/styles/github-dark.css'

const route = useRoute()
const router = useRouter()

const post = computed(() => {
  return posts.find(p => p.slug === route.params.slug)
})

const rendered = computed(() => {
  if (!post.value) return ''
  return marked(post.value.content, {
    breaks: true,
    gfm: true
  })
})

onMounted(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
})

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="post-view">
    <button class="back-btn" @click="goBack">← 返回首页</button>
    <template v-if="post">
      <article class="post-article">
        <header class="post-header">
          <time class="post-date">{{ post.date }}</time>
          <h1 class="post-title">{{ post.title }}</h1>
        </header>
        <div class="post-content" v-html="rendered"></div>
      </article>
    </template>
    <div v-else class="not-found">
      <h2>文章未找到</h2>
      <p>抱歉，找不到这篇文章。</p>
      <RouterLink to="/">回到首页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.4rem 0.75rem;
  font-size: 0.85rem;
  color: var(--muted);
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.2s, border-color 0.2s;
}

.back-btn:hover {
  color: var(--text);
  border-color: var(--text);
}

.post-header {
  margin-bottom: 2rem;
}

.post-date {
  font-size: 0.85rem;
  color: var(--muted);
  display: block;
  margin-bottom: 0.5rem;
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

.post-content {
  line-height: 1.8;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h2 {
  margin-bottom: 0.5rem;
}
</style>
