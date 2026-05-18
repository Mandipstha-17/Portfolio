import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Workaround for Windows Registry MIME type issue
const mimeTypePlugin = () => {
  return {
    name: 'mime-type-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = req.url?.split('?')[0];
        if (url && (url.endsWith('.js') || url.endsWith('.mjs') || url.endsWith('.ts') || url.endsWith('.tsx') || url.endsWith('.jsx'))) {
          res.setHeader('Content-Type', 'application/javascript');
        }
        next();
      });
    }
  };
};

export default defineConfig({
  base: '/',
  plugins: [react(), mimeTypePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
