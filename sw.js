const CACHE_NAME = 'virgilio1-v3';
const ASSETS = [
  '/virgilio1/',
  '/virgilio1/index.html',
  '/virgilio1/piscina2.html',
  '/virgilio1/piscina.html',
  '/virgilio1/piscina_regole.html',
  '/virgilio1/fornitori.html',
  '/virgilio1/documenti.html',
  '/virgilio1/cassa.html',
  '/virgilio1/sala-comune.html',
  '/virgilio1/feste.html',
  '/virgilio1/sondaggi.html',
  '/virgilio1/segnalazioni.html',
  '/virgilio1/bacheca.html',
  '/virgilio1/sudoku.html',
  '/virgilio1/import-spese.html',
  '/virgilio1/import-versamenti.html',
  '/virgilio1/virgilio1-drone.png',
  '/virgilio1/manifest.json',
  '/virgilio1/icons/icon-192.png',
  '/virgilio1/icons/icon-512.png'
];

// Install: pre-cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Activate: remove old caches and take control of all clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener('fetch', event => {
  // Only handle GET requests; let POST/PUT/DELETE (e.g. OneSignal API) pass through unchanged
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Only intercept same-origin requests; skip external CDNs and APIs (e.g. onesignal.com)
  if (url.origin !== self.location.origin) return;
  const isHtml = url.pathname.endsWith('.html') || url.pathname.endsWith('/');

  if (isHtml) {
    // Network first: serve fresh HTML when online, fallback to cache
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, clone))
            .catch(err => console.warn('[SW] Cache put failed:', err));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache first: serve cached assets, fallback to network
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, clone))
            .catch(err => console.warn('[SW] Cache put failed:', err));
          return response;
        });
      })
    );
  }
});
