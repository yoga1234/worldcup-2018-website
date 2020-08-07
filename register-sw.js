if("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register('/service-worker.js');
  });
} else {
  alert("Browser anda belum mendukung simpan secara offline.");
}