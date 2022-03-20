import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import windiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), windiCSS()],
});
