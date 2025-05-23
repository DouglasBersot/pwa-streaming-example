self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('streaming-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        'https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
