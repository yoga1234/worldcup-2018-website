const CACHE_NAME = "wcwebcache001";
let urlsToCache = [
  "/",
  "/index.html",
  "/register-sw.js",
  "/assets/components/footer.js",
  "/assets/components/modal.js",
  "/assets/components/modal-generator.js",
  "/assets/components/navbar.js",
  "/assets/components/pages/homepage.js",
  "/assets/components/pages/savedTeam.js",
  "/assets/components/pages/teamlist.js",
  "/assets/css/main.css",
  "/assets/css/materialize.min.css",
  "/assets/images/180x180.png",
  "/assets/images/not-found.svg",
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

// // adding cache
// self.addEventListener("install", function(event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache) {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // cache if available
// self.addEventListener("fetch", function(event) {
//   event.respondWith(
//     caches
//       .match(event.request, { cacheName: CACHE_NAME})
//       .then(function(response) {
//         if(response) {
//           console.log("service worker: ", response.url);
//           return response;
//         }

//         console.log("Server: ", event.request.url);
//         return fetch(event.request);
//       })
//   );
// });

// // deleting old cache
// self.addEventListener("activate", function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if(cacheNames != CACHE_NAME) {
//             console.log("Service Worker: Cache " + cacheName + " dihapus");
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });