const CACHE_NAME = 'schemesaathi-v1';
const STATIC_ASSETS = [
  './',
  'index.html',
  'schemes.js',
  'agent.js',
  'i18n.js',
  'styles.css',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // Cache-first for static assets
  const isStaticAsset = STATIC_ASSETS.some(asset => {
    if (asset === './') return event.request.url.endsWith('/') || event.request.url.endsWith('/index.html');
    return event.request.url.includes(asset);
  });

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached || fetch(event.request).then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  // Network-first for other API calls with offline JSON fallback
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(
        JSON.stringify({ error: "offline", message: "No internet connection" }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    })
  );
});
