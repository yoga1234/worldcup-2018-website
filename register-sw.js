if("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function() {
        console.log("Pendaftaran service worker berhasil");
      })
      .catch(function() {
        console.log("Pendaftaran service worker gagal");
      });
  });
} else {
  console.log("Service worker belum didukung di browser ini");
}