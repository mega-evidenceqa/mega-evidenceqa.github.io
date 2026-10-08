'use strict';

// Respect reduced motion and keep the page fully readable without JavaScript.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function initializeMotion() {
  if (motionPreference.matches || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion-ready');
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, {threshold: .06, rootMargin: '0px 0px -24px 0px'});
  document.querySelectorAll('.teaser,.paper-section>h2,.paper-section>p,.paper-section>figure,.research-highlights>div,.method-steps>li,.results-toolbar,#results-panel,.analysis-grid>figure,.citation-heading,.bibtex').forEach(element => {
    element.classList.add('reveal');
    if (element.parentElement.matches('.method-steps,.research-highlights,.analysis-grid')) {
      const index = [...element.parentElement.children].indexOf(element);
      element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * .08}s`);
    }
    revealObserver.observe(element);
  });
}
initializeMotion();
motionPreference.addEventListener('change', event => {
  if (!event.matches) return;
  revealObserver?.disconnect();
  document.documentElement.classList.remove('motion-ready');
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
});
document.addEventListener('focusin', event => {
  event.target.closest('.reveal')?.classList.add('visible');
});
function revealHashDestination() {
  const destination = document.getElementById(location.hash.slice(1));
  if (!destination) return;
  destination.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
  destination.closest('.reveal')?.classList.add('visible');
}
window.addEventListener('hashchange', revealHashDestination);
revealHashDestination();

// Paper Table 1, active (non-commented) rows. Every cell is [mean, std].
const results = {
  gpt: { name: 'GPT-4.1', rows: [
    ['RAG', [[8.2,.2],[7.5,.3],[47.8,1.1],[72.4,.8],[50.1,1.0],[67.9,.9],[44.5,1.2]]],
    ['Context+LLM', [[8.6,.2],[7.6,.2],[67.1,.9],[78.8,.7],[58.9,.8],[76.2,.7],[60.3,.9]]],
    ['MedRAG', [[8.1,.3],[7.2,.3],[51.9,1.2],[76.5,.9],[48.3,1.1],[78.1,.8],[50.2,1.0]]],
    ['MMed-RAG', [[8.4,.2],[7.6,.3],[52.8,1.0],[75.2,.8],[47.6,1.2],[75.6,.9],[54.6,1.1]]],
    ['DoctorRAG', [[8.7,.2],[8.1,.2],[60.4,1.0],[80.5,.6],[53.3,1.0],[81.4,.6],[53.2,1.1]]],
    ['MEGA', [[9.5,.1],[8.7,.2],[84.9,.6],[82.1,.5],[85.0,.6],[85.4,.5],[83.7,.7]]]
  ] },
  qwen: { name: 'Qwen3.6-35B-A3B', rows: [
    ['RAG', [[7.4,.3],[6.8,.3],[46.5,1.2],[70.9,.9],[44.7,1.2],[65.8,1.0],[46.5,1.3]]],
    ['Context+LLM', [[7.8,.2],[7.4,.3],[52.5,1.0],[73.5,.8],[53.4,.9],[71.0,.9],[54.9,1.0]]],
    ['MedRAG', [[7.7,.3],[6.7,.3],[48.7,1.1],[75.4,.7],[47.3,1.1],[76.2,.8],[48.3,1.2]]],
    ['MMed-RAG', [[7.4,.3],[6.3,.4],[50.9,1.2],[74.1,.8],[43.4,1.3],[73.8,.9],[44.9,1.2]]],
    ['DoctorRAG', [[8.3,.2],[7.8,.2],[51.4,1.1],[75.2,.7],[45.1,1.2],[76.1,.8],[45.4,1.2]]],
    ['MEGA', [[9.3,.1],[8.5,.2],[83.1,.7],[80.7,.6],[83.4,.7],[87.6,.5],[81.9,.8]]]
  ] },
  minimax: { name: 'MiniMax-M2.5-230B', rows: [
    ['RAG', [[8.3,.2],[7.6,.3],[48.3,1.1],[72.4,.8],[49.1,1.1],[67.9,.9],[36.5,1.4]]],
    ['Context+LLM', [[8.5,.2],[7.8,.2],[68.5,.9],[74.8,.8],[62.3,.8],[73.2,.9],[66.3,.9]]],
    ['MedRAG', [[7.9,.3],[6.9,.3],[52.9,1.1],[76.5,.7],[51.5,1.0],[78.1,.8],[53.3,1.1]]],
    ['MMed-RAG', [[8.2,.2],[7.6,.3],[54.9,1.0],[76.4,.8],[55.9,1.0],[76.3,.8],[52.9,1.1]]],
    ['DoctorRAG', [[8.8,.2],[8.2,.2],[53.6,1.1],[78.2,.7],[51.9,1.0],[78.2,.8],[51.8,1.1]]],
    ['MEGA', [[9.6,.1],[9.2,.1],[85.1,.6],[82.4,.5],[85.2,.6],[88.2,.5],[82.1,.7]]]
  ] }
};

const tabs = Array.from(document.querySelectorAll('[data-model]'));
function renderResults(key) {
  const model = results[key];
  if (!model) return;
  const second = Array.from({length: 7}, (_, column) =>
    [...new Set(model.rows.map(row => row[1][column][0]))].sort((a,b) => b-a)[1]);
  const body = document.getElementById('results-body');
  body.replaceChildren(...model.rows.map(([method, cells]) => {
    const tr = document.createElement('tr');
    if (method === 'MEGA') tr.className = 'ours';
    const label = document.createElement('th');
    label.scope = 'row';
    label.textContent = method === 'MEGA' ? 'MEGA (ours)' : method;
    tr.append(label);
    cells.forEach(([mean, std], i) => {
      const td = document.createElement('td');
      const value = document.createElement('span');
      value.textContent = mean.toFixed(1);
      if (mean === second[i]) value.className = 'second-value';
      const uncertainty = document.createElement('span');
      uncertainty.className = 'std';
      uncertainty.textContent = `±${std.toFixed(1)}`;
      td.append(value, uncertainty);
      tr.append(td);
    });
    return tr;
  }));
  tabs.forEach(tab => {
    const active = tab.dataset.model === key;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  document.getElementById('results-panel').setAttribute('aria-labelledby', `tab-${key}`);
  document.querySelector('.results-table caption').textContent =
    `Main results for ${model.name}. Values are mean plus or minus standard deviation over three repeated runs.`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => renderResults(tab.dataset.model));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      tabs[next].focus();
      renderResults(tabs[next].dataset.model);
    }
  });
});
renderResults('gpt');

const dialog = document.getElementById('figure-dialog');
document.querySelectorAll('[data-figure]').forEach(button => {
  button.addEventListener('click', () => {
    const enlarged = document.getElementById('dialog-image');
    enlarged.src = button.dataset.figure;
    enlarged.alt = button.querySelector('img').alt;
    document.getElementById('dialog-caption').textContent = button.dataset.caption;
    dialog.showModal();
    document.getElementById('close-dialog').focus();
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right ||
        event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
});

document.getElementById('copy-citation').addEventListener('click', async event => {
  const button = event.currentTarget;
  const text = document.getElementById('bibtex').textContent.trim() + '\n';
  const status = document.getElementById('copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied ✓';
    status.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = 'Selected — copy';
    status.textContent = 'BibTeX selected. Press Control C or Command C to copy.';
  }
});
