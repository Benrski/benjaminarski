import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import windiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), windiCSS()],
});
