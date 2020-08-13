let webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BKsLRT_8_G1gzMdWqfY66rpvsSzClLf0p5yXvWycYKoRWL29mCemjWzjIRvbJ87G54Bmln1kyiY3zNwyo0Ehxh4",
  "privateKey": "Q_eqQBQigQpx-Ap30qf49dznxytMfoB4AuRc6-jutqw"
}

webPush.setVapidDetails(
  'mailto:septianayoga30@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
let pushSubsciption = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dsKONJm7rpw:APA91bHPnhwwABoNgXLQFoJfPjaX7-WsN-YCCG4CcZxWX2_eecpS4_xebH-YsMu07cEg6DSYIejN8brkF9jCx93gjy88RrcvVvRtK20LckEOVmYshzk8EsQ2Yr8JeUynV1eVNoCd7hCn",
  "keys": {
    "p256dh": "BKO5hLko1WBBz9NPZS1Fzu5g6WV8JVCcCK1bu/L0ZUNVCkF9E5UXemYOVLjB+LsWXyfX0PYJlGOI5eupM/nkTfI=",
    "auth": "X3PtH1nfyziTOdrUVGXM+w=="
  }
};
let payload = "Aplikasi sudah dapat menerima push notifikasi";

let options = {
  gcmAPIKey: '530308762579',
  TTL: 60
};

webPush.sendNotification(
  pushSubsciption,
  payload,
  options
);