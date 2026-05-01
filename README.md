# Mohammad Nouri Portfolio

A responsive single-page portfolio built with HTML, CSS, and vanilla JavaScript. It runs on GitHub Pages and does not need a build step or external libraries.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to GitHub Pages

1. Download and unzip the project.
2. Back up the existing `MNouriWork/CV` repository or create a branch.
3. Copy `index.html` and the `assets/` folder to the repository root.
4. Commit and push the changes to the publishing branch.
5. In **Settings → Pages**, confirm that GitHub Pages is still publishing from the intended branch and root folder.
6. Check the site on desktop and mobile, including the CV download and light/dark theme toggle.

The site uses relative asset paths, so it works at `https://mnouriwork.github.io/CV/` without assuming the domain root.

## Updating the site

- Replace `assets/profile-mohammad.webp` to change the profile photo. Keep the same filename.
- Replace `assets/mohammad-nouri-cv.pdf` to update the CV download.
- Edit the work history, expertise, certificates, and awards in `index.html`.
- Update contact details and profile links in the `#contact` section.
- Change colours, spacing, and responsive layouts in `assets/css/styles.css`.
- Update the theme toggle and mobile navigation in `assets/js/main.js`.

## Implementation notes

- Uses semantic HTML, keyboard focus styles, descriptive headings, and a skip link.
- Mobile navigation supports Escape-to-close and reports its expanded state to assistive technology.
- The theme follows the browser preference on first visit and remembers the user's selection when storage is available.
- Reduced-motion preferences are respected.
- The 2.5D game scene and icons are drawn with inline SVG and CSS.
- Responsive layouts cover desktop, tablet, and narrow mobile screens.
- No external runtime libraries or remote font dependencies are required.
