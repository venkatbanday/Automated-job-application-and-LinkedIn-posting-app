const CACHE='careeros-static-v1.1.0';
const CORE=['./','./index.html','./toolkit.html','./career-hub.html','./job-fit.html','./resume-builder.html','./interview-coach.html','./linkedin-post.html','./carousel-studio.html','./data-tools.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./404.html'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match('./404.html'))))});
