<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header-inner">
        <RouterLink to="/" class="logo">Codex 博客</RouterLink>
        <nav class="nav">
          <RouterLink to="/" class="nav-link" active-class="active">首页</RouterLink>
          <RouterLink to="/about" class="nav-link" active-class="active">关于</RouterLink>
        </nav>
      </div>
    </header>
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer">
      <p>&copy; 2026 Codex 博客. 由 Vue 3 驱动.</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  border-bottom: 1px solid var(--border);
  background: var(--surface);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.header-inner {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text);
}

.main {
  flex: 1;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

.footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--muted);
}
</style>
