const CACHE_NAME = "wcwebcache001";
let urlsToCache = [
  "/",
  "/index.html",
  "/register-sw.js",
  "/assets/components/footer.js",
  "/assets/components/navbar.js",
  "/assets/components/pages/homepage.js",
  "/assets/components/pages/savedTeam.js",
  "/assets/components/pages/teamlist.js",
  "/assets/css/main.css",
  "/assets/css/materialize.min.css",
  "/assets/images/180x180.png",
  "/assets/images/save.svg",
  "/assets/images/soccer.svg",
  "/assets/images/tablet.svg",
  "/assets/images/top-icon.png",
  "/assets/js/contentLoader.js",
  "/assets/js/main.js",
  "/assets/js/materialize.min.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});