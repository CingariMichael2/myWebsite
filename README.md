# Instructional Design Portfolio — Michael Cingari

A clean, single-page portfolio site. No build tools required — just edit and open `index.html`.

## Structure

```
index.html              Main page (all sections)
css/style.css            All styling / colors / layout
js/main.js               Mobile nav toggle + project filter buttons
assets/resume/           Put your resume PDF here
assets/images/projects/  Put project thumbnail images here (optional, see below)
projects/                Put finished project files here (PDFs, exported PPTs, etc.)
```

## Adding a new project

1. Drop the finished file (PDF, exported course, PPTX, etc.) into `/projects`.
2. In `index.html`, find the `<div class="projects-grid">` section and duplicate one
   `<article class="project-card">...</article>` block.
3. Update:
   - `data-category` — one of `elearning`, `ilt`, `jobaid`, `video` (controls the filter buttons)
   - the title, tags, and description text
   - the `href` on "View Project" to point at your file in `/projects` (or an external link,
     e.g. an Articulate Review 360 link)
4. Optional: swap the placeholder colored thumbnail (`<div class="card-thumb thumb-a">`) for a
   real image by replacing it with `<img src="assets/images/projects/your-image.jpg" alt="...">`.

## Updating your resume

Add your resume PDF to `assets/resume/` and name it `Michael-Cingari-Resume.pdf` (or update the
`href` in the header and About section of `index.html` to match your filename).

## Updating contact info

The email button and footer link in `index.html` use `mailto:mjcingari0@gmail.com`. Update the
LinkedIn URL in the Contact section (`#contact`) — it currently points to a placeholder handle.

## Publishing

This is a static site — you can host it for free on GitHub Pages, Netlify, or Vercel by
uploading this folder as-is.
