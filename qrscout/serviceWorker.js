const myPWA = "MR-QRScout";
const assets = ['/icons/icon-1024x1024.png', '/icons/icon-144x144.png', '/icons/icon-192x192.png', '/icons/icon-36x36.png', '/icons/icon-384x384.png', '/icons/icon-48x48.png', '/icons/icon-512x512.png', '/icons/icon-72x72.png', '/icons/icon-96x96.png', '/fonts/SF Sports Night NS.ttf', '/fonts/SF Sports Night.ttf', '/assets/index-bTwK4Yzb.css', '/assets/index-On1jl9Yu.js', '/favicon-16x16.png', '/favicon-32x32.png', '/favicon.ico', '/index.html', '/manifest.json', '/serviceWorker.js', 'mr.webp'];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(myPWA).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});