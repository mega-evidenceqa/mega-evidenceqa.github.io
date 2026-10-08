# MEGA · NeurIPS 2026

Project website for **Less Evidence, Better Answering: Gain-Aware Minimal Evidence Subset Selection for Medical QA**.

**Songyue Guo¹ · Zhao Chen¹ · Caleb Chen Cao² · Lei Chen¹²**

¹ HKUST(GZ) · ² HKUST

[Project website](https://mega-evidenceqa.github.io/) · [Paper](https://openreview.net/pdf?id=PsPjtMRFBs) · [Live demo](https://mdi.hkust-gz.edu.cn/evidence_qa/) · [OpenReview](https://openreview.net/forum?id=PsPjtMRFBs) · [NeurIPS](https://neurips.cc/virtual/2026/poster/152857)

MEGA retrieves a broad candidate pool, estimates evidence utility using hidden-state Information Gain Scoring, and selects a compact subset under a hard token budget with an FPTAS knapsack selector.

## Website

Buildless HTML, CSS, and JavaScript. No npm install, API keys, analytics, or external UI dependencies.

- Responsive desktop/mobile layout.
- Traditional publication-first typography using locally hosted Noto Sans, explicit author affiliations, and university/conference logos.
- NeurIPS and MEGA marks above the title, without an "Accepted Paper" label; both university marks use their original blue/gold color versions.
- Prominent rounded Paper / Live Demo / Video / OpenReview / BibTeX buttons with matching icons and keyboard focus states.
- Selective emphasis for MEGA, the core selection steps, and the paper-reported relative gains.
- A redesigned editable SVG MEGA logo and favicon.
- Embedded 57-second video, click-to-load MP4 playback, and a live-system link.
- Original paper figures, with full-resolution enlargement.
- Main results across three LLM backbones, with standard deviations.
- Keyboard-accessible model tabs, downloadable results, and copyable BibTeX.

Preview locally:

```sh
python3 -m http.server 8765
```

Then open `http://localhost:8765/`.

## Publishing

The site is published at **https://mega-evidenceqa.github.io/** from the project organization repository [mega-evidenceqa/mega-evidenceqa.github.io](https://github.com/mega-evidenceqa/mega-evidenceqa.github.io). In **Settings → Pages**, the source is **Deploy from a branch → main / (root)**. No custom workflow is required for these static files. Push changes to `main` to trigger the next deployment.

The existing personal website repository is not modified.

If a different URL is used, update `og:url`, `og:image`, and the canonical link in `index.html`. Do not copy this project's `.nojekyll` into the root of an existing Jekyll personal website.

## Update content

| File | What to update |
| --- | --- |
| `index.html` | Authors, paper links, venue, narrative, resource availability |
| `site.js` | Main-table values and model tabs |
| `results.csv` | Downloadable version of the same results |
| `citation.bib` | Paper citation |
| `styles.css` | Colors, spacing, mobile layout |
| `assets/` | Paper figures and social preview |

Public code/dataset download URLs were not provided, so the resource section explicitly leaves these unlinked. The private medical-system repository is not used as a public code link.

## Content provenance

Title, venue, and OpenReview ID are from the [NeurIPS conference page](https://neurips.cc/virtual/2026/poster/152857). Author spelling and affiliations follow the author's corrections, including the full name Caleb Chen Cao. The conference lists “Minimal”; the local revised manuscript uses “Compact.” This website and BibTeX currently use the conference title. Change both together if the final title is updated.

Result values and standard deviations are copied from the active main-results table in the supplied manuscript. The aggregate +8.8% answer-quality and +38.8% Evidence-F1 figures are the paper's reported relative improvements, not percentage-point changes.

Figures are rendered from the supplied manuscript assets, retaining their content, colors, and layout; only exterior white page margins are trimmed. The motivation illustration is not represented as an aggregate evaluation.

This is a project website, not a release of the MEGA implementation or datasets.

`assets/demo.mp4` is a browser-compatible conversion of the supplied `demo.qt`, retaining the complete 57.08-second walkthrough. The video poster is an actual frame from that recording. No autoplay or background video download is enabled.

Institution and conference graphics are downloaded from their official websites. Exact URLs are recorded in `ASSET_SOURCES.md`; these marks are not covered by any new licensing grant from this project.

## Design references

The revised layout follows the traditional academic presentation of [Nerfies](https://nerfies.github.io/), [3D Gaussian Splatting](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/), and [mip-NeRF 360](https://jonbarron.info/mipnerf360/): centered title/authors, rounded icon buttons, sans-serif typography, affiliation superscripts, institution marks, and direct figure/video presentation. The page is independently implemented; their code, graphics, and analytics were not copied. Noto Sans is included locally under the SIL Open Font License, so the website does not depend on an external font service.

## Citation

```bibtex
@inproceedings{guo2026mega,
  title     = {Less Evidence, Better Answering: Gain-Aware Minimal
               Evidence Subset Selection for Medical QA},
  author    = {Guo, Songyue and Chen, Zhao and Cao, Caleb Chen and Chen, Lei},
  booktitle = {Advances in Neural Information Processing Systems},
  year      = {2026},
  url       = {https://openreview.net/forum?id=PsPjtMRFBs}
}
```
