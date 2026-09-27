import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Căi relative, ca site-ul să meargă și pe GitHub Pages (https://<user>.github.io/<repo>/).
  base: './',
});
