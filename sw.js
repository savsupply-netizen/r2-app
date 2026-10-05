// Application R2.0 : service worker (installation de l'appli + notifications OneSignal ; aucune donnée mise en cache).
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* tout passe par le réseau */ });
