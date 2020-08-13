// check for the service worker
if(!('serviceWorker' in navigator)) {
  console.log("Service worker tidak didukung");
} else {
  registerServiceWorker();
  requestPermission();
}

// registering service worker
function registerServiceWorker() {
  return navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log("Register service worker berhasil");
      return registration;
    })
    .catch(function(err) {
      console.error("Registrasi service worker gagal " + err);
    })
}

// run the Notification API
function requestPermission() {
  if('Notification' in window) {
    Notification.requestPermission()
    .then(function(result) {
      if(result === "denied") {
        console.log("Fitur notifikasi tidak diijinkan.");
        return;
      } else if(result === "default") {
        console.log("Pengguna menutup dialog kotak permintaan notifikasi.");
        return;
      }


      if(("PushManager" in window)) {
        navigator.serviceWorker.getRegistration()
        .then(function(registration) {
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array("BJFX7VOHPn6zxVg0ha9urYPwKm3RGY2WXZ5nhqNqXrGsBFvhM0UQHcDmVAhOzkkaWUkWjTrOv47LjgsRm7sYyHU")
          })
          .then(function(subscribe) {
            console.log("Berhasil subscribe dengan endpoint: ", subscribe.endpoint);
            console.log("Berhasil subscribe dengan p256 key: ", btoa(String.fromCharCode.apply(
              null, new Uint8Array(subscribe.getKey('p256dh'))
            )));
            console.log("Berhasil subscribe dengan auth key: ", btoa(String.fromCharCode.apply(
              null, new Uint8Array(subscribe.getKey('auth'))
            )));
          }).catch(function(e) {
            console.error("subscribe gagal: ", e.message + e);
          })
        })
      }
      
    })
  }
}

// change string into Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) %4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for(let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
