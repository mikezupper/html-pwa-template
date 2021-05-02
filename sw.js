const cacheName = "vanilla-html-pwa-cache";

// Cache all the files to make a PWA
self.addEventListener("install", (e) => {
  console.log("install event", e);
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(["./", "./index.html", "./manifest.json"]);
    })
  );
});

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener("fetch", (event) => {
  console.log("fetching1");
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
