# himal37.github.io

Personal academic website of **Md Rakibul Hasan Himal**, urban planner and GIS/remote sensing specialist, Dhaka.

Live site: https://himal37.github.io

## Structure

```
index.html                  Main page (research, projects, publications, experience, photos, maps, skills, education, honours, contact)
404.html                    Page-not-found page
experience.html, education.html, publications.html, skills.html
                            Old page addresses; they forward to the matching section of index.html
assets/css/style.css        Styles
assets/js/main.js           Navigation highlight and PDF link check
assets/img/                 Main photo, link-preview image, favicon
assets/img/photos/          Work photos (large version and a smaller "-sm" version of each)
assets/img/maps/            Preview images of the maps
maps/                       Full-resolution map PDFs (A0)
assets/img/docs/            Gazette notification and Gap Fund feature images
cv/Md_Rakibul_Hasan_Himal_CV.pdf
papers/                     Full-text PDFs of papers and theses
```

## Adding the paper and thesis PDFs

Put the PDFs in the `papers/` folder using exactly these file names:

| Document | File name |
|---|---|
| Journal of Safety Research (2022) | `papers/2022-JSR-driver-yielding.pdf` |
| Accident Analysis & Prevention (2020) | `papers/2020-AAP-rolling-gap-crossing.pdf` |
| Undergraduate thesis, BUET (2019) | `papers/2019-BURP-thesis-bus-terminals.pdf` |
| M.Sc. capstone project, EWU (2025) | `papers/2025-MSc-capstone-fatal-crashes.pdf` |

Until a file is uploaded, its button shows "PDF available on request" instead of a broken link.

## Updating the CV

Replace `cv/Md_Rakibul_Hasan_Himal_CV.pdf` with the new version, keeping the same file name.

## Adding or changing a photo

1. Save two copies of the photo in `assets/img/photos/`: a large one (about 1600 px wide), for example `site-visit.jpg`, and a small one (about 800 px wide) named `site-visit-sm.jpg`.
2. In `index.html`, find the section that starts with `<!-- PHOTOS -->`, copy one `<figure class="shot">` block, and change the file names, the description in `alt`, and the caption in `<figcaption>`.
3. Add `wide` or `tall` next to `shot` in the class to make the photo take up two columns or two rows.
