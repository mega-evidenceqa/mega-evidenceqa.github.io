# MEGA · NeurIPS 2026

Project website for **Less Evidence, Better Answering: Gain-Aware Minimal Evidence Subset Selection for Medical QA**.

**Songyue Guo¹ · Zhao Chen¹ · Caleb Chen Cao² · Lei Chen¹²**

¹ HKUST(GZ) · ² HKUST

[Project website](https://mega-evidenceqa.github.io/) · [Paper](https://openreview.net/pdf?id=PsPjtMRFBs) · [Live demo](https://mdi.hkust-gz.edu.cn/evidence_qa/) · [OpenReview](https://openreview.net/forum?id=PsPjtMRFBs) · [NeurIPS](https://neurips.cc/virtual/2026/poster/152857)

MEGA retrieves a broad candidate pool, estimates evidence utility using hidden-state Information Gain Scoring, and selects a compact subset under a hard token budget with an FPTAS knapsack selector.

## Website

Buildless HTML, CSS, and JavaScript. No npm install, API keys, analytics, or external UI dependencies.

- Responsive desktop/mobile layout.
- A large evolution-stone-inspired MEGA hero wordmark, restrained violet accents, and locally hosted Noto Sans; explicit author affiliations and unchanged blue/gold institution marks.
- A floating NeurIPS/section navigation bar, without an "Accepted Paper" label, with reading-position highlighting and unobscured anchor destinations.
- Staggered hero entrance and one-time scroll reveals, with visible no-JavaScript fallback and reduced-motion support.
- Centered paper content with a fixed right-side Paper / Code / Data / Live Demo / Video / OpenReview / BibTeX resource rail on screens at least 1,200px wide; the same buttons become inline pills on narrower screens.
- Selective emphasis for MEGA, the core selection steps, and the paper-reported relative gains.
- Original generated transparent PNG wordmark (prompt retained in `assets/MEGA-logo-prompt.md`); its evolution-stone emblem is also the browser favicon and Apple touch icon, with extraction prompt in `assets/MEGA-favicon-prompt.md`. Earlier editable SVG marks are retained as unused assets.
- Paper-reported highlights and four compact method steps; no new experimental claims.
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

Code and Data buttons lead to [mega-evidenceqa/MEGA](https://github.com/mega-evidenceqa/MEGA), a separate curated public research-component repository. The current release includes the available IGS snapshot, evaluation/preparation utilities, and 2,973 text-free evidence-annotation records. It is not the complete final-paper reproduction package: final FPTAS code, exact prepared source texts and CRC-EvidenceQA are still pending. The page states these limitations explicitly. The private medical-system repository is not used as a public code link or made public.

## Content provenance

Title, venue, and OpenReview ID are from the [NeurIPS conference page](https://neurips.cc/virtual/2026/poster/152857). Author spelling and affiliations follow the author's corrections, including the full name Caleb Chen Cao. The conference lists “Minimal”; the local revised manuscript uses “Compact.” This website and BibTeX currently use the conference title. Change both together if the final title is updated.

Result values and standard deviations are copied from the active main-results table in the supplied manuscript. The aggregate +8.8% answer-quality and +38.8% Evidence-F1 figures are the paper's reported relative improvements, not percentage-point changes.

Figures are rendered from the supplied manuscript assets, retaining their content, colors, and layout; only exterior white page margins are trimmed. The motivation illustration is not represented as an aggregate evaluation.

This repository contains the project website only. Research code and annotations are maintained separately in the Code/Data repository.

`assets/demo.mp4` is a browser-compatible conversion of the supplied `demo.qt`, retaining the complete 57.08-second walkthrough. The video poster is an actual frame from that recording. No autoplay or background video download is enabled.

Institution and conference graphics are downloaded from their official websites. Exact URLs are recorded in `ASSET_SOURCES.md`; these marks are not covered by any new licensing grant from this project.

## Design references

The visual hierarchy, large artistic wordmark, and progressive entrance rhythm reference [GenEvolve](https://ephemeral182.github.io/GenEvolve/), while retaining the academic title/authors/resources pattern of [Nerfies](https://nerfies.github.io/). The implementation is original; reference-site code, graphics and analytics were not copied. The evolution-stone motif is an original generated project mark, not an official Pokémon logo or affiliation. Noto Sans is included locally under the SIL Open Font License, so the website does not depend on an external font service.

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
