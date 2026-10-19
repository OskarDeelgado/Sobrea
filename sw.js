const V='sobrea-ba2562ed',F=['./','index.html','manifest.webmanifest','xlsx.full.min.js','jspdf.umd.min.js','icon-192.png','icon-512.png','apple-touch-icon.png','inter-latin-wght-normal.woff2','inter-latin-ext-wght-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
