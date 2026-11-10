/**
 * Mohammed Rehan - Portfolio Component Registry
 * Modular component definitions and Web Component custom element registrations.
 */

import preloaderHtml from './Preloader.html?raw';
import heroHtml from './Hero.html?raw';
import revealHtml from './Reveal.html?raw';
import aboutHtml from './About.html?raw';
import projectsHtml from './Projects.html?raw';
import circleGalleryHtml from './CircleGallery.html?raw';
import roadmapHtml from './Roadmap.html?raw';
import skillsHtml from './Skills.html?raw';
import awardsHtml from './Awards.html?raw';
import contactHtml from './Contact.html?raw';
import footerHtml from './Footer.html?raw';
import projectDetailHtml from './ProjectDetail.html?raw';
import scrollIndicatorHtml from './ScrollIndicator.html?raw';

export const components = {
  'portfolio-preloader': preloaderHtml,
  'portfolio-hero': heroHtml,
  'portfolio-reveal': revealHtml,
  'portfolio-about': aboutHtml,
  'portfolio-projects': projectsHtml,
  'portfolio-circle-gallery': circleGalleryHtml,
  'portfolio-roadmap': roadmapHtml,
  'portfolio-skills': skillsHtml,
  'portfolio-awards': awardsHtml,
  'portfolio-contact': contactHtml,
  'portfolio-footer': footerHtml,
  'portfolio-project-detail': projectDetailHtml,
  'portfolio-scroll-indicator': scrollIndicatorHtml,
};

/**
 * Registers custom elements for each component (light DOM to preserve global styling and GSAP animations)
 */
export function registerPortfolioComponents() {
  if (typeof window === 'undefined' || !window.customElements) return;

  Object.entries(components).forEach(([tagName, htmlContent]) => {
    if (!customElements.get(tagName)) {
      class PortfolioComponent extends HTMLElement {
        connectedCallback() {
          if (!this.hasChildNodes() || this.innerHTML.trim() === '') {
            this.innerHTML = htmlContent;
          }
        }
      }
      customElements.define(tagName, PortfolioComponent);
    }
  });
}

// Auto-register in browser environment
if (typeof window !== 'undefined') {
  registerPortfolioComponents();
}
