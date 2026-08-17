import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // In development, forward twin chat API calls to the local FastAPI backend.
      '/api': 'http://localhost:8000',
    },
  },
});
