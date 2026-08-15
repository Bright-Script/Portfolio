# Brighton Junior — Portfolio Site

A simple, static portfolio site built with plain HTML, CSS, and JavaScript — no build step required.

## Structure

```
├── assets/          Images, fonts, and videos (add your own files here)
├── favicon.ico
├── index.html        Home page
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── projects.html
│   ├── services.html
│   └── 404.html
├── script/
│   ├── main.js        Footer year, skill-bar animation, contact form validation
│   └── navigation.js   Mobile menu toggle, active nav-link highlighting
└── style/
    ├── style.css       Design tokens, reset, header/nav
    ├── layout.css      Page structure, hero, grids, footer
    ├── components.css  Buttons, cards, timeline, form, 404
    └── responsive.css  Breakpoints and mobile nav
```

## Running locally

Any static file server works. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly by double-clicking also works, since all paths are relative.

## Customizing

- **Colors, fonts, spacing** — all defined once as CSS custom properties at the top of `style/style.css`, under `:root`.
- **Content** — bio, projects, services, and skills are plain HTML in each page; edit the text directly.
- **Images** — drop files into `assets/images/` and reference them with an `<img>` tag (the project cards currently use gradient placeholders instead of photos).
- **Contact form** — `script/main.js` validates the form and shows a success message, but nothing is sent anywhere yet. Point the `<form>` at a real endpoint (e.g. Formspree, Netlify Forms, or your own backend) to receive submissions.

## Notes

- The `favicon.ico` file is a placeholder — replace it with a real icon.
- Social links in the footer (`GitHub`, `LinkedIn`) point to placeholder URLs — update them to your own profiles.
# Portfolio
