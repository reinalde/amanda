// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

// workbox.recipes.googleFontsCache();


self.addEventListener("install", (event) => {
  // event.waitUntil(
  //   caches.open("meu-pwa-cache").then((cache) => {
  //     return cache.addAll([
  //       "/",
  //       "/index.html",
  //       "/slide.css",
  //       "/slide.js",
  //     ]);
  //   })
  // );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const lastUrl = await event.clientId
        ? (await self.clients.get(event.clientId)).postMessage({ type: "getUrl" })
        : null;

      const url = lastUrl || event.request.url;
      return fetch(url);
    })()
  );
});
