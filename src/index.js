/**
 * Main entry point for the blog
 */

import { initVisualizations } from './diagrams/index';

// Initialize all the interactive visualizations when the page loads
document.addEventListener('DOMContentLoaded', () => {
  initVisualizations();
});