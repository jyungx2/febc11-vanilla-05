import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"), // 기본 index.html
        login: resolve(__dirname, "src/pages/auth/login.html"), // 추가 HTML 파일
        list: resolve(__dirname, "src/pages/board/list.html"), // 추가 HTML 파일
      },
    },
  },
});
