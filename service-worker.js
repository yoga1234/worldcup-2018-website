const CACHE_NAME = "wcwebcache001";
let urlsToCache = [
  "/",
  "/index.html",
  "/register-sw.js",
  "/manifest.json",
  "/push.js",
  "/assets/components/footer.js",
  "/assets/components/modal.js",
  "/assets/components/modal-generator.js",
  "/assets/components/navbar.js",
  "/assets/components/pages/homepage.js",
  "/assets/components/pages/savedTeam.js",
  "/assets/components/pages/teamlist.js",
  "/assets/css/main.css",
  "/assets/css/materialize.min.css",
  "/assets/images/72x72.png",
  "/assets/images/96x96.png",
  "/assets/images/128x128.png",
  "/assets/images/144x144.png",
  "/assets/images/152x152.png",
  "/assets/images/180x180.png",
  "/assets/images/192x192.png",
  "/assets/images/384x384.png",
  "/assets/images/512x512.png",
  "/assets/images/not-found.svg",
  "/assets/images/push-badge.png",
  "/assets/images/save.svg",
  "/assets/images/soccer.svg",
  "/assets/images/tablet.svg",
  "/assets/images/top-icon.png",
  "/assets/js/api.js",
  "/assets/js/contentLoader.js",
  "/assets/js/db.js",
  "/assets/js/idb.js",
  "/assets/js/main.js",
  "/assets/js/materialize.min.js"
];

// adding cache
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// cache if available
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME})
      .then(function(response) {
        if(response != undefined) {
          return response;
        }
        
        return fetch(event.request);
      })
  );
});

// deleting old cache
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(cacheNames != CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// push notification
self.addEventListener('push', function(event) {
  let body;
  if(event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }

  let options = {
    body: body,
    icon: '/assets/images/push-badge.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});