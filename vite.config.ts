import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { mdsvex } from 'mdsvex'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      // these are the defaults. If you want to add more extensions, see https://mdsvex.pngwn.io/docs#extensions
      extensions: ['.svelte', '.svx', '.md'],
      preprocess: mdsvex({
        extensions: ['.svx', '.md'],
      }),
    }),
    tsConfigPaths(),
    Icons({
      autoInstall: true,
      compiler: 'svelte',
    }),
  ],
})
