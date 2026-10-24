'use strict';
const CACHE='donglvji-static-9d38ba112944c6a6';
const ASSETS=["./.nojekyll","./apple-touch-icon.png","./assets/ai-BbFFKf7I.js","./assets/index-BODEn-O-.css","./assets/index-DgAjhg06.js","./assets/index-kcGdOxzj.js","./assets/location-DJYe1pOo.js","./assets/maplibre-COvwXmyv.js","./assets/maplibre-gl-worker-DJoMIXcx.js","./assets/mespeak_config-BrFTMR1a.js","./assets/placeServices-CWoAEzj1.js","./assets/react-DHz4kLit.js","./assets/storage-BrXyjHIn.js","./assets/zh-CRXa83Zj.js","./assets/zh-yue-CVyyBuDo.js","./icon-192.png","./icon-512.png","./icon-maskable.png","./icon.svg","./index.html","./manifest.webmanifest"];
const known=new Set(ASSETS.map(p=>new URL(p,self.location.href).href));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(p=>new Request(p,{cache:'reload'}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('donglvji-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.search||u.hash||u.origin!==self.location.origin||!known.has(u.href)||e.request.mode==='navigate')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});
