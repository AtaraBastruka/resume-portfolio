// @ts-check
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';


import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [svgr({
      svgrOptions: {
        // This will remove all fill attributes from the SVG
        svgoConfig: {
          plugins: [
            {
              name: 'removeAttrs',
              params: { attrs: 'fill' }
            }
          ]
        }
      }
    })],
  },
});