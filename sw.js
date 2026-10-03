// Application R2.0 : service worker minimal (permet l'installation ; aucune donnée mise en cache).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* tout passe par le réseau */ });
