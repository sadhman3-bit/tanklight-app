// Offline shell. Network-first for pages (so updates arrive), cache-first for hashed assets.
const PREFIX = 'tanklight-';
const CACHE = `${PREFIX}v6`;
// The hashed JS/CSS/fonts are listed by the page on first load (see main.tsx) and cached here, so the very first visit works offline.

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './manifest.webmanifest', './icon-192.png', './brand/mark.svg'])));
  self.skipWaiting();
});

self.addEventListener('message', (e) => {
  // One by one: addAll would drop the whole batch if any single file failed.
  if (e.data?.type === 'precache' && Array.isArray(e.data.urls))
    e.waitUntil(caches.open(CACHE).then((c) => Promise.all(e.data.urls.map((u) => c.add(u).catch(() => {})))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      // Only this app's old caches: other apps on the same github.io origin keep theirs.
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate';
  if (isPage) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
          return res;
        })
        .catch(() => caches.match('./')),
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
