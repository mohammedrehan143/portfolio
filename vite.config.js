import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function portfolioComponentsPlugin() {
  const componentMap = {
    'portfolio-preloader': 'Preloader.html',
    'portfolio-hero': 'Hero.html',
    'portfolio-reveal': 'Reveal.html',
    'portfolio-about': 'About.html',
    'portfolio-projects': 'Projects.html',
    'portfolio-circle-gallery': 'CircleGallery.html',
    'portfolio-roadmap': 'Roadmap.html',
    'portfolio-skills': 'Skills.html',
    'portfolio-awards': 'Awards.html',
    'portfolio-contact': 'Contact.html',
    'portfolio-footer': 'Footer.html',
    'portfolio-project-detail': 'ProjectDetail.html',
    'portfolio-scroll-indicator': 'ScrollIndicator.html',
  };

  return {
    name: 'vite-plugin-portfolio-components',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        let transformed = html;
        for (const [tag, file] of Object.entries(componentMap)) {
          const filePath = resolve(__dirname, 'src/components', file);
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            // Matches <portfolio-tag></portfolio-tag> or <portfolio-tag />
            const regex = new RegExp(`<${tag}\\s*(?:>\\s*<\\/${tag}>|\\/?>)`, 'gi');
            transformed = transformed.replace(regex, content);
          }
        }
        return transformed;
      }
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('src/components')) {
        server.ws.send({ type: 'full-reload' });
      }
    }
  };
}

export default defineConfig({
  plugins: [portfolioComponentsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works/index.html'),
        info: resolve(__dirname, 'info/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  }
});
