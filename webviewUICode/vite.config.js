import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path'; 
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: path.resolve(__dirname, '../webviewCode'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.js')
      },
      output: {
        //minifyInternalExports:true,
        entryFileNames: 'webview.js',
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name].js', 
        format: 'es'
      }
    }
  }
});
