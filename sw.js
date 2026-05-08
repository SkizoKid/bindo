self.options = {
    "domain": "5gvci.com",
    "zoneId": 3616435
}
self.lary = ""
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')

// PWA fetch handler — diperlukan agar Chrome menampilkan tombol install
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request).catch(function() {
        return caches.match(event.request);
    }));
});
