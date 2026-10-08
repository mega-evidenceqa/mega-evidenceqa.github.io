# Asset sources

## Official institution and conference marks

- HKUST(GZ): `https://www.hkust-gz.edu.cn/wp-content/themes/hkust-gz-official-0827/images/logo-e-blue-2x.png`, linked by the university's English home page, `https://www.hkust-gz.edu.cn/en/`.
- HKUST (current blue/gold bilingual logo): `https://cas.ust.hk/idp/images/bannerlogo.png`, used by HKUST's official identity portal; included as `assets/hkust-logo-blue-gold.png` without recoloring.
- HKUST (previous monochrome version, retained as an unused asset): `https://hkust.edu.hk/sites/default/files/2024-03/HKUST_logo_1.svg`, linked by the university's home page.
- NeurIPS official logo: `https://neurips.cc/media/Press/NeurIPS_logo.svg`, from `https://neurips.cc/public/MediaKit`.
- NeurIPS website wordmark: `https://neurips.cc/static/core/img/NeurIPS-logo.svg`, used by the official NeurIPS website.

Marks are included to identify the authors' institutions and the paper's conference, not as a new endorsement of the demo. Their original proportions/colors are retained.

## Project assets

- `mega-logo.svg` and `favicon.svg`: independently designed, editable SVG marks. The M resembles a selected evidence page, with a gold corner and a faint background sheet.
- `mega-logo-v5.png`: original transparent evolution-stone / energy-helix wordmark generated with the built-in image-generation tool; 2172 × 724 pixels. The generation prompt is retained in `assets/MEGA-logo-prompt.md`. It is not an official Pokémon mark or an endorsement.
- `mega-icon-v6.png`: transparent 1254 × 1254 favicon/Apple touch icon extracted from the left emblem of `mega-logo-v5.png` with the built-in image-generation editor. No wordmark or underline is included. The exact extraction prompt is retained in `assets/MEGA-favicon-prompt.md`.
- Paper figures: rendered from the manuscript provided by the authors. External white PDF page margins were trimmed; scientific figure contents were not redrawn.
- `demo.mp4`: converted from the user-provided `demo.qt`. Full duration: approximately 57.08 seconds; web resolution: 1280 × 772. The original recording is preserved outside the website directory.
- `demo-poster.jpg`: an actual frame at 7 seconds from the provided recording.
- `social-preview.png`: rendered from this website's header.

Live demo: `https://mdi.hkust-gz.edu.cn/evidence_qa/` (supplied by the author).

## Typography

Noto Sans (normal style; weights 400, 500, 600, 700) is self-hosted in `assets/fonts/`. It was obtained from the official Google Fonts CSS API, `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap`:

- 400: `https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99d.ttf`
- 500: `https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyDPA99d.ttf`
- 600: `https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9d.ttf`
- 700: `https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAaBN9d.ttf`

License: SIL Open Font License 1.1, included as `assets/fonts/OFL.txt`, from `https://raw.githubusercontent.com/google/fonts/main/ofl/notosans/OFL.txt`. No Google Sans font files are redistributed. The browser loads these local fonts, not Google Fonts servers.
