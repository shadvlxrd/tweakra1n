const CACHE_NAME="tweakra1n";self.addEventListener("install",(s=>{s.waitUntil(caches.open(CACHE_NAME).then((s=>s.addAll(["/","app.html","css/styles.css","js/app.js","apps.json","https://cdn.jsdelivr.net/npm/framework7@8.3.3/framework7-bundle.min.js","https://cdn.jsdelivr.net/npm/framework7-icons@5.0.5/css/framework7-icons.css","js/instantclick.min.js","https://cdn.jsdelivr.net/npm/framework7@8.3.0/framework7-bundle.min.css"]))))})),self.addEventListener("fetch",(s=>{s.respondWith(fetch(s.request).then((e=>{const t=e.clone();return caches.open(CACHE_NAME).then((e=>e.put(s.request,t))),e})).catch((()=>caches.match(s.request))))}));
