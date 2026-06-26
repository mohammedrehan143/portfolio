import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works/index.html'),
        info: resolve(__dirname, 'info/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  }
});