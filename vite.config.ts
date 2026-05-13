import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// GitHub Pages 项目站地址为 https://<用户>.github.io/<仓库名>/
// 构建时若存在 GITHUB_REPOSITORY（GitHub Actions 会自动注入），资源 base 需与仓库名一致，否则 JS/CSS 404 白屏。
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repo ? `/${repo}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
