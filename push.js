let webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BEG-onDHxSsUmYssw5AYfUqFiNRbSw8Za-yTZhqnMi8jTdV2hyfVdd41yRUtZb0T3HaLZkBWekHYUnDgDrRLPXQ",
  "privateKey": "t3uDyWnn_Hdkgxt0Y4-nvu7WVpXA_aqhbIB_IyZ_A4Y"
}

webPush.setVapidDetails(
  'mailto:septianayoga30@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
let pushSubsciption = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/f2GTNLZ88gA:APA91bEgt86eeUF9FKyWgTrzhoji1WIBUD8nCBk2rVbX6Ze__e4cql5Hp8bhbJkPNFMpoxhSfQZ2cl9MrFKJzapKu0YuUYuQmBUvew9YRgHaTqaTMHQpf8n3O7jPETxG9PesKC4BxviF",
  "keys": {
    "p256dh": "BEQb7/Tn/83+NVjbF8jOCA5ePrIuXj+bXxpvm+lxIv1K5Y18hst81TdCxcG3iZayHToWCxPdLvyTsmh6qc2RU4M=",
    "auth": "pNtLoPEmXv8Yqsl+8q+LdQ=="
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