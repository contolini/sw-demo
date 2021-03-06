var cacheVersion = 'v1.4';

filesToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/css/main.css',
  '/js/main.js',
  '/img/gear.png'
]

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(cacheVersion)
    .then(function (cache) {
      return cache.addAll(filesToCache)
        .then(function () {
          return self.skipWaiting();
        });
      }));
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request)
    .then(function (res) {
      return res || fetch(event.request);
  }));
});
