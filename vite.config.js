import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin() // Automatically injects styles into your JS bundle!
  ],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/react-landing-bundle.js',
        assetFileNames: 'assets/[name]-[hash].[ext]', // Used only for fallback media assets
      },
    },
  },
});