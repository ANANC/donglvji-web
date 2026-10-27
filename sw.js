'use strict';
const CACHE='donglvji-static-92f35546a232f570';
const ASSETS=["./.nojekyll","./apple-touch-icon.png","./assets/ai-lhMGXMr3.js","./assets/index-BkejVM1x.js","./assets/index-uonmoL46.css","./assets/location-CZMwpa7P.js","./assets/maplibre-AgMWWGR8.css","./assets/maplibre-DC9zF467.js","./assets/maplibre-gl-worker-DJoMIXcx.js","./assets/placeServices-BftxXwJg.js","./assets/react-C_JW_Gx2.js","./assets/storage-D8L8eDpl.js","./icon-192.png","./icon-512.png","./icon-maskable.png","./icon.svg","./index.html","./manifest.webmanifest","./mobile.html"];
const known=new Set(ASSETS.map(p=>new URL(p,self.location.href).href));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(p=>new Request(p,{cache:'reload'}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('donglvji-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.search||u.hash||u.origin!==self.location.origin||!known.has(u.href)||e.request.mode==='navigate')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});
