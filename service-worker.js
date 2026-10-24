const CACHE_NAME = 'ghop-photography-v4';
const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icons/ghop-192.png',
  './assets/icons/ghop-512.png',
  './assets/portrait-purple-gown.jpg',
  './assets/portrait-teal-seated.jpg',
  './assets/portrait-teal-blue.jpg',
  './assets/portrait-editorial-suit.jpg',
  './assets/birthday-portrait.jpg',
  './assets/birthday-with-cake.jpg'
].map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('ghop-photography-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(request);
      } catch (_) {
        return await caches.match(new URL('./index.html', self.registration.scope).href);
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      return await fetch(request);
    } catch (_) {
      return Response.error();
    }
  })());
});
