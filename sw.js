'use strict';
const CACHE='donglvji-static-7efb4ccf42ce1e78';
const ASSETS=["./.nojekyll","./apple-touch-icon.png","./assets/ai-CYEHb_J2.js","./assets/index-BS3-lZo9.js","./assets/index-D54s-lKy.css","./assets/location-D7bCN5n3.js","./assets/maplibre-COvwXmyv.js","./assets/maplibre-gl-worker-DJoMIXcx.js","./assets/placeServices-C7ot9VSr.js","./assets/react-BpaniaUk.js","./assets/storage-DFjqFGpn.js","./icon-192.png","./icon-512.png","./icon-maskable.png","./icon.svg","./index.html","./manifest.webmanifest"];
const known=new Set(ASSETS.map(p=>new URL(p,self.location.href).href));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(p=>new Request(p,{cache:'reload'}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('donglvji-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.search||u.hash||u.origin!==self.location.origin||!known.has(u.href)||e.request.mode==='navigate')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});
