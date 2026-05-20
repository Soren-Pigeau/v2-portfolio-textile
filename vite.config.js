import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remplace 'v1-portfolio-textile' par le nom EXACT de ton repo GitHub
// (cf. README section "Déploiement GitHub Pages")
export default defineConfig({
  plugins: [react()],
  base: '/v2-portfolio-textile/',
});
