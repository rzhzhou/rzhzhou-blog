export const posts = [
  {
    slug: 'hello-world',
    title: 'Hello World — 我的第一篇博客',
    date: '2026-06-24',
    excerpt: '这是我的第一篇博客文章，欢迎来到我的个人博客。在这里我会分享技术、思考和生活中的点滴。',
    content: `# Hello World

欢迎来到我的个人博客！

这是我的第一篇文章。这个博客使用 Vue 3 构建，支持 Markdown 渲染和代码高亮。

## 为什么写博客？

写博客是一个很好的学习和分享方式。通过写作，我们可以：

1. **梳理知识** — 把零散的知识点整理成体系
2. **记录成长** — 回头看自己写过的文章，能看到自己的进步
3. **分享交流** — 帮助他人，也从他人的反馈中学习

## 技术栈

这个博客使用的技术：

- Vue 3 (Composition API)
- Vue Router
- Vite
- Marked (Markdown 解析)
- Highlight.js (代码高亮)

## 代码示例

下面是一段 Vue 3 的 Composition API 示例代码：

\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">点击了 {{ count }} 次</button>
  <p>双倍计数: {{ double }}</p>
</template>
\`\`\`

## 后续计划

未来我会在这里分享更多关于前端开发、后端架构和开源项目的内容。敬请期待！
`
  },
  {
    slug: 'vue3-composition-api',
    title: 'Vue 3 Composition API 入门指南',
    date: '2026-06-23',
    excerpt: '深入浅出地介绍 Vue 3 的 Composition API，包括 ref、reactive、computed、watch 等核心 API 的用法和最佳实践。',
    content: `# Vue 3 Composition API 入门指南

Vue 3 引入了 Composition API，为组件逻辑的组织提供了更灵活的方式。

## 为什么需要 Composition API?

在 Vue 2 中，我们使用 Options API（\`data\`、\`methods\`、\`computed\` 等选项）来组织组件逻辑。当组件变得复杂时，相关的逻辑代码会被分割到不同的选项中，导致**代码分散**。

Composition API 允许我们按逻辑关注点组织代码：

\`\`\`javascript
import { ref, onMounted, onUnmounted } from 'vue'

// 鼠标追踪逻辑 — 全部在一起
export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
\`\`\`

## 核心 API

### ref

\`ref\` 用于创建响应式的**基本类型**值：

\`\`\`javascript
import { ref } from 'vue'

const count = ref(0)
count.value++ // 修改值
\`\`\`

## 总结

Composition API 让代码组织更加灵活和可复用，是 Vue 3 中值得掌握的核心特性。
`
  },
  {
    slug: 'css-grid-layout',
    title: 'CSS Grid 布局完全指南',
    date: '2026-06-20',
    excerpt: '从基础概念到高级技巧，全面掌握 CSS Grid 布局系统，包含大量实用示例和最佳实践。',
    content: `# CSS Grid 布局完全指南

CSS Grid 是一个强大的二维布局系统，能同时处理行和列。

## 基本概念

Grid 布局由**网格容器**和**网格项目**组成：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
}
\`\`\`

## 实际示例：博客卡片布局

\`\`\`css
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}

.blog-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
\`\`\`
`
  },
  {
    slug: 'git-workflow',
    title: '高效的 Git 工作流实践',
    date: '2026-06-18',
    excerpt: '分享日常开发中实用的 Git 工作流程和技巧，包括分支策略、提交规范和协作最佳实践。',
    content: `# 高效的 Git 工作流实践

Git 是现代软件开发不可或缺的版本控制工具，但高效地使用它需要一些技巧和规范。

## 分支策略

推荐使用 **Git Flow** 或 **GitHub Flow**：

### GitHub Flow (简化版)

\`\`\`
main —— 稳定的生产分支
  \\\\
   feature/xxx —— 功能开发分支
      \\\\
       fix/xxx —— 修复分支
\`\`\`

## 提交规范

使用 Conventional Commits：

\`\`\`
feat: 添加用户登录功能
fix: 修复首页加载白屏问题
docs: 更新 API 文档
refactor: 重构数据获取逻辑
test: 添加组件测试
chore: 更新依赖版本
\`\`\`

## 最佳实践

1. **频繁提交** — 每个提交只做一件事
2. **写好的提交信息** — 让别人（未来的自己）能理解
3. **不要提交到 main** — 永远使用分支
4. **审查后再合并** — 代码审查是质量保证的重要环节

掌握了这些技巧，团队协作会变得更加顺畅高效。
`
  }
]
