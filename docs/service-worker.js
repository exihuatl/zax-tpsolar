!function(){"use strict";const e=["client/client.0c5a68e5.js","client/index.d6c13100.js","client/client.92977ea0.js"].concat(["service-worker-index.html",".DS_Store","__index.css","favicon.png","great-success.png","icons/.DS_Store","icons/404.svg","icons/logo.svg","icons/phone.svg","images/.DS_Store","images/1.jpg","images/illustrations/contact-us-bg.svg","images/illustrations/contact-us.svg","images/illustrations/hero.svg","images/logos/.DS_Store","images/logos/1.svg","images/logos/2.svg","images/logos/3.svg","images/logos/4.svg","images/logos/5.svg","images/logos/6.svg","images/logos/7.svg","images/logos/8.svg","images/logos/9.svg","logo-192.png","logo-512.png","manifest.json"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1600969331503").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1600969331503"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1600969331503").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const o=await s.match(e.request);if(o)return o;throw t}}))))})}();
