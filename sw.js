'use strict';
const CACHE='donglvji-static-1abc5ddc1bf58707';
const ASSETS=["./.nojekyll","./apple-touch-icon.png","./assets/ai-upw8HpA1.js","./assets/index-Boi4uQDd.js","./assets/index-CVo4NMc3.css","./assets/location-klJZpntp.js","./assets/maplibre-COvwXmyv.js","./assets/maplibre-gl-worker-DJoMIXcx.js","./assets/placeServices-u9RsOg7a.js","./assets/react-BpaniaUk.js","./assets/storage-D7NfW6bs.js","./icon-192.png","./icon-512.png","./icon-maskable.png","./icon.svg","./index.html","./manifest.webmanifest"];
const known=new Set(ASSETS.map(p=>new URL(p,self.location.href).href));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(p=>new Request(p,{cache:'reload'}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('donglvji-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.search||u.hash||u.origin!==self.location.origin||!known.has(u.href)||e.request.mode==='navigate')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});
