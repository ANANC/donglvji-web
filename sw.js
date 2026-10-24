'use strict';
const CACHE='donglvji-static-331f47cad463fe40';
const ASSETS=["./.nojekyll","./apple-touch-icon.png","./assets/ai-CE8gYLYo.js","./assets/index-BhR_jIEU.css","./assets/index-DgAjhg06.js","./assets/index-DuG9NKq2.js","./assets/location-Dn9QIQFT.js","./assets/maplibre-COvwXmyv.js","./assets/maplibre-gl-worker-DJoMIXcx.js","./assets/mespeak_config-BrFTMR1a.js","./assets/placeServices-COkhgPei.js","./assets/react-DHz4kLit.js","./assets/storage-CrXu8O-q.js","./assets/zh-CRXa83Zj.js","./assets/zh-yue-CVyyBuDo.js","./icon-192.png","./icon-512.png","./icon-maskable.png","./icon.svg","./index.html","./manifest.webmanifest"];
const known=new Set(ASSETS.map(p=>new URL(p,self.location.href).href));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(p=>new Request(p,{cache:'reload'}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('donglvji-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.search||u.hash||u.origin!==self.location.origin||!known.has(u.href)||e.request.mode==='navigate')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});
