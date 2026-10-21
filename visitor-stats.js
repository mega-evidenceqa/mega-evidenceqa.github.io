'use strict';

// One counting request per document load; sidebar and footer share the result.
// No third-party JavaScript is loaded or executed.
(() => {
  const counters = [...document.querySelectorAll('[data-visit-count]')];
  const statuses = [...document.querySelectorAll('[data-visit-status]')];
  if (!counters.length) return;
  const mapImage = document.getElementById('visitor-map-image');
  const mapLink = document.getElementById('visitor-map-link');
  const mapStatus = document.getElementById('visitor-map-status');
  const setMapStatus = text => { if (mapStatus) mapStatus.textContent = text; };
  document.documentElement.classList.add('stats-ready');
  document.querySelectorAll('.stats-info').forEach(link => {
    link.addEventListener('click', () => { document.getElementById('traffic-note').open = true; });
  });

  const setStatus = text => statuses.forEach(element => { element.textContent = text; });
  const canonical = 'https://mega-evidenceqa.github.io/';
  // API currently published by https://busuanzi.9420.ltd/js.
  const endpoint = 'https://bsz.iirose.cn/api';
  const storageKey = 'mega-visitor-id';
  const validIdentity = value => typeof value === 'string' && value.length <= 4096 && /^[A-Za-z0-9_.-]+$/.test(value);

  // Previews, forks and automated checks must not inflate the public totals.
  if (location.origin !== new URL(canonical).origin) {
    setStatus('Preview · not counted');
    setMapStatus('Local preview · the live visitor map is not loaded or counted.');
    return;
  }
  const optedOut = new URLSearchParams(location.search).get('stats') === 'off';
  const doNotTrack = [navigator.doNotTrack, window.doNotTrack].some(value => value === '1' || value === 'yes');
  if (optedOut || doNotTrack || navigator.globalPrivacyControl === true) {
    setStatus('Statistics disabled for privacy');
    setMapStatus('The visitor map is disabled by your privacy settings.');
    return;
  }

  // The provider's original image/link are retained. Load only once, without a
  // referring URL, and independently of the PV/UV service's success or failure.
  if (mapImage && mapLink && mapStatus) {
    setMapStatus('Loading visitor map…');
    let mapSettled = false;
    const mapFailed = () => {
      if (mapSettled) return;
      mapSettled = true;
      clearTimeout(mapTimeout);
      mapImage.removeAttribute('src');
      setMapStatus('The visitor map is temporarily unavailable. You can still open the country and region breakdown below.');
    };
    const mapTimeout = setTimeout(mapFailed, 12000);
    mapImage.addEventListener('load', () => {
      if (mapSettled) return;
      if (mapImage.naturalWidth < 100 || mapImage.naturalHeight < 50) return mapFailed();
      mapSettled = true;
      clearTimeout(mapTimeout);
      mapLink.hidden = false;
      mapStatus.hidden = true;
    }, {once:true});
    mapImage.addEventListener('error', mapFailed, {once:true});
    mapImage.src = mapImage.dataset.mapSrc;
  }

  const headers = {'x-bsz-referer':canonical};
  try {
    const identity = localStorage.getItem(storageKey);
    if (validIdentity(identity)) headers.Authorization = `Bearer ${identity}`;
  } catch (_) {
    // Counting still works if browser storage is unavailable.
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  fetch(endpoint, {
    method:'POST', headers, credentials:'omit', cache:'no-store',
    referrerPolicy:'no-referrer', signal:controller.signal
  }).then(async response => {
    if (!response.ok) throw new Error('Counter unavailable');
    const result = await response.json();
    const validCount = value => Number.isSafeInteger(value) && value >= 0;
    if (result.success !== true || !validCount(result.data?.page_pv) || !validCount(result.data?.site_uv)) {
      throw new Error('Invalid counter response');
    }
    const number = new Intl.NumberFormat('en-US');
    counters.forEach(element => { element.textContent = number.format(result.data[element.dataset.visitCount]); });
    setStatus('Since 19 Oct 2026');
    const identity = response.headers.get('Set-Bsz-Identity');
    if (validIdentity(identity)) {
      try { localStorage.setItem(storageKey, identity); } catch (_) { /* Storage is optional. */ }
    }
  }).catch(() => {
    // Do not retry: a failed response may already have incremented the counter.
    counters.forEach(element => { element.textContent = '—'; });
    setStatus('Statistics temporarily unavailable');
  }).finally(() => clearTimeout(timeout));
})();
