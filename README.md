AI Engineering Blog Template
==============================

A template for creating interactive blog posts using the [Distill.pub](https://distill.pub) format. Includes support for mathematical notation, citations, and interactive visualizations.

## Quick Start

### 1. Use this template

Click "Use this template" on GitHub to create your own repository.

### 2. Clone and install

```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
```

### 3. Start development server

```bash
npm run dev
```

View at http://localhost:8080. Changes auto-reload.

## Customizing Your Post

### Edit content

All content is in `src/index.ejs`. Update:

**Front matter** (lines 24-46):
- `title`: Post title
- `description`: Post description
- `authors`: Author names, URLs, and affiliations

**Article content** (line 58 onwards):
- Write content using standard HTML tags (`<p>`, `<h2>`, `<h3>`, etc.)
- Use `$...$` for inline math and `$$...$$` for display math
- Reference citations with `<d-cite key="citation-key"></d-cite>`

**Table of contents** (lines 59-78):
- Update to match your section headings
- Link to section IDs using `href="#section-id"`

### Add references

Add BibTeX entries to `static/references.bib`. Reference them in your post using the citation key:

```html
<d-cite key="your-citation-key"></d-cite>
```

### Add interactive visualizations

Create JavaScript modules in `src/diagrams/`:

1. Create a new file (e.g., `src/diagrams/my-viz.js`)
2. Export an initialization function:
```javascript
export function initMyViz() {
  // Your visualization code
}
```
3. Import and call it in `src/index.js`:
```javascript
import { initMyViz } from './diagrams/my-viz.js';
initMyViz();
```

Examples are in `src/diagrams/carousel.js` and `src/diagrams/neural-network.js`.

### Full-width vs regular-width content

**Full-width**: Add `class="l-screen"` to `<figure>` elements
```html
<figure class="l-screen">
  <!-- Content spans full screen width -->
</figure>
```

**Regular-width**: Use standard `<figure>` without the class

## Building for Production

```bash
npm run build
```

Output is in `public/`.

## Publishing

Push to the `main` branch. GitHub Actions automatically builds and deploys to GitHub Pages.

**Enable GitHub Pages**:
1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Your site will be at `https://<username>.github.io/<repo-name>/`

## Resources

- [Distill guide](https://distill.pub/guide/)
- [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)
