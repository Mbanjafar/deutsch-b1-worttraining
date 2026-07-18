// Bump APP_VERSION whenever the app changes. It must match the ?v= value
// on the app.js script tag in index.html, otherwise the offline cache
// misses and the app will not load without a network connection.
const APP_VERSION = "swiss1f";
const CACHE_NAME = `deutsch-b1-worttraining-${APP_VERSION}`;
const APP_FILES = [
  "./",
  "./index.html",
  `./styles.css?v=${APP_VERSION}`,
  `./app.js?v=${APP_VERSION}`,
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
