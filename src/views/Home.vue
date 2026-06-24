<script setup>
import { posts } from '../posts/data.js'
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">Codex 博客</h1>
      <p class="hero-desc">记录技术思考，分享编程实践</p>
    </div>
    <div class="posts">
      <article v-for="post in posts" :key="post.slug" class="post-card">
        <RouterLink :to="'/posts/' + post.slug" class="post-card-link">
          <time class="post-date">{{ post.date }}</time>
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <span class="read-more">阅读更多 →</span>
        </RouterLink>
      </article>
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 0 2.5rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.hero-desc {
  color: var(--muted);
  font-size: 1.05rem;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  border-color: var(--accent);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.post-card-link {
  display: block;
  padding: 1.5rem;
  color: var(--text);
  text-decoration: none;
}

.post-date {
  font-size: 0.8rem;
  color: var(--muted);
  display: block;
  margin-bottom: 0.35rem;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.4;
}

.post-excerpt {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 0.75rem;
}

.read-more {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent);
}
</style>
