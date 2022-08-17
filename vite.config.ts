import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      autoInstall: true,
      compiler: 'svelte',
    }),
  ],
})
