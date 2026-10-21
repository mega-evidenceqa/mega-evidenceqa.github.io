# MEGA · NeurIPS 2026

Project website for **Less Evidence, Better Answering: Gain-Aware Minimal Evidence Subset Selection for Medical QA**.

**Songyue Guo¹ · Zhao Chen¹ · Caleb Chen Cao² · Lei Chen¹²**

¹ HKUST(GZ) · ² HKUST

[Project website](https://mega-evidenceqa.github.io/) · [Paper](https://openreview.net/pdf?id=PsPjtMRFBs) · [Live demo](https://mdi.hkust-gz.edu.cn/evidence_qa/) · [OpenReview](https://openreview.net/forum?id=PsPjtMRFBs) · [NeurIPS](https://neurips.cc/virtual/2026/poster/152857)

MEGA retrieves a broad candidate pool, estimates evidence utility using hidden-state Information Gain Scoring, and selects a compact subset under a hard token budget with an FPTAS knapsack selector.

## Website

Buildless HTML, CSS, and JavaScript. No npm install, API keys, or external UI dependencies. Best-effort traffic counting uses the public Busuanzi API, with a separate Flag Counter image for country/region origins; no third-party JavaScript is executed.

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
- A responsive world visitor map near the footer, with country/region breakdown and the original provider attribution retained.

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
| `visitor-stats.js` | PV/UV counting, visitor-map loading, privacy signals, production-host restriction |
| `results.csv` | Downloadable version of the same results |
| `citation.bib` | Paper citation |
| `styles.css` | Colors, spacing, mobile layout |
| `assets/` | Paper figures and social preview |

Code and Data buttons lead to [mega-evidenceqa/MEGA](https://github.com/mega-evidenceqa/MEGA), a separate curated public research-component repository. The current release includes the available IGS snapshot, evaluation/preparation utilities, and 2,973 text-free evidence-annotation records. It is not the complete final-paper reproduction package: final FPTAS code, exact prepared source texts and CRC-EvidenceQA are still pending. The page states these limitations explicitly. The private medical-system repository is not used as a public code link or made public.

## Visitor statistics

- **Page views (PV):** recorded homepage loads. One POST per document load updates both desktop and mobile displays; navigating anchors or model tabs does not send more requests.
- **Visitors (UV):** an approximate deduplicated visitor count, initially based on IP + User-Agent, with a signed browser identity retained in local storage. It is not an exact independent-IP or people count. The provider uses HyperLogLog for UV aggregation.
- The free public [Busuanzi deployment](https://busuanzi.9420.ltd/) and its [documented API/identification scheme](https://github.com/soxft/busuanzi/wiki/usage) are used. The API endpoint `https://bsz.iirose.cn/api` was verified from the provider's current published script on 19 October 2026. Counts begin at deployment; visits before installation cannot be reconstructed. Blocking/privacy tools, bots, shared networks and provider availability can affect the result. There is no SLA, data ownership dashboard, or guaranteed retention on this public service.
- Only `https://mega-evidenceqa.github.io` counts visits. Local previews/forks never contact the service. Use `?stats=off` for production QA without counting, and `&stats=off` if another query is already present. Do Not Track and Global Privacy Control suppress all counter requests.
- The third party necessarily receives the connection IP and browser User-Agent. The custom `x-bsz-referer` header always contains only `https://mega-evidenceqa.github.io/`, never query strings or fragments. No raw IP is displayed publicly, no medical/demo data is sent, no third-party script is loaded, and no cookies are sent with the API request. A signed visitor identity is stored as `mega-visitor-id` in local storage when available.
- Failure/timeout leaves an em dash and an unavailable message, never a fabricated zero. No automatic retry is made, since a timed-out request might already have counted.
- A private raw-IP/geographic dashboard or exact independent-IP totals would require a separately configured analytics backend; this public aggregate counter does not provide one.

### Country and region visitor map

The map added on 21 October 2026 is the original live [Flag Counter](https://flagcounter.com/) image for this project, not an illustration or invented geographic dataset. Registration was completed during setup on 19 October, without an email, paid plan, or management account. The public widget ID is `gaYU` on `s05.flagcounter.com`; the [country/region statistics page](https://info.flagcounter.com/gaYU) is linked from the image and caption. Do not create a new widget on routine edits, or its accumulated geographic counts will be lost. Initial setup and verification visits are included.

- Only the production domain loads the image, once per document load, with `referrerpolicy="no-referrer"`; local previews, `?stats=off`, Do Not Track and Global Privacy Control make no map request. No extra analytics script, geolocation prompt, GPS coordinate or raw-IP display is added.
- The image loads eagerly (at low priority) so visits are not limited to people who reach the footer. Anchor clicks, tab changes and viewport changes do not reload it. A failed/12-second timed-out load shows an unavailable message and leaves the breakdown link usable, without a fake map, broken-image indicator, or automatic retry.
- According to the provider's [FAQ](https://flagcounter.com/faq.html), the default repeat-visitor window is 24 hours and the free embedded image can lag the linked statistics page by roughly five minutes. These country counts are separate from Busuanzi's PV/UV and must not be expected to match exactly. IP geolocation can be affected by VPNs, shared networks and routing. Historical homepage origins cannot be reconstructed.
- According to the provider's [privacy policy](https://flagcounter.com/privacy.html), its free image tallies aggregate countries/regions, uses no cookies, and does not expose raw IPs or precise visitor locations. The provider necessarily receives IP/browser connection data; the project's embed suppresses the referring URL. Clicking through to the provider's statistics website may encounter advertising and cookies. Retain its original image, attribution and statistics link; do not proxy, crop or hide the branding.
- The free provider may remove counters with no new visitor for over 30 days and offers no guaranteed retention. An email was not submitted, so no private management login was created; a different owner-managed solution would need separate setup if required later.

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
