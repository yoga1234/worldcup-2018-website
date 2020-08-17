importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

// check for workbox
if(workbox) {
  console.log("Workbox berhasi dimuat");
} else {
  console.log("Workbox gagal dimuat");
}

workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1'},
  { url: '/register-sw.js', revision: '1'},
  { url: '/manifest.json', revision: '1'},
  { url: '/push.js', revision: '1'},
  { url: '/assets/components/footer.js', revision: '1'},
  { url: '/assets/components/modal.js', revision: '1'},
  { url: '/assets/components/modal-generator.js', revision: '1'},
  { url: '/assets/components/navbar.js', revision: '1'},
  { url: '/assets/components/pages/homepage.js', revision: '1'},
  { url: '/assets/components/pages/savedteam.js', revision: '1'},
  { url: '/assets/components/pages/teamlist.js', revision: '1'},
  { url: '/assets/css/main.css', revision: '1'},
  { url: '/assets/css/materialize.min.css', revision: '1'},
  { url: '/assets/images/72x72.png', revision: '1'},
  { url: '/assets/images/96x96.png', revision: '1'},
  { url: '/assets/images/128x128.png', revision: '1'},
  { url: '/assets/images/144x144.png', revision: '1'},
  { url: '/assets/images/152x152.png', revision: '1'},
  { url: '/assets/images/180x180.png', revision: '1'},
  { url: '/assets/images/192x192.png', revision: '1'},
  { url: '/assets/images/384x384.png', revision: '1'},
  { url: '/assets/images/512x512.png', revision: '1'},
  { url: '/assets/images/not-found.svg', revision: '1'},
  { url: '/assets/images/push-badge.png', revision: '1'},
  { url: '/assets/images/save.svg', revision: '1'},
  { url: '/assets/images/soccer.svg', revision: '1'},
  { url: '/assets/images/tablet.svg', revision: '1'},
  { url: '/assets/images/top-icon.png', revision: '1'},
  { url: '/assets/js/api.js', revision: '1'},
  { url: '/assets/js/contentLoader.js', revision: '1'},
  { url: '/assets/js/db.js', revision: '1'},
  { url: '/assets/js/idb.js', revision: '1'},
  { url: '/assets/js/main.js', revision: '1'},
  { url: '/assets/js/materialize.min.js', revision: '1'},
]);

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
