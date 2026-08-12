import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: https://happy-bugg.github.io/wedding/
  // 커스텀 도메인을 연결하면 '/' 로 변경
  base: '/wedding/',
  plugins: [react(), tailwindcss()],
})
