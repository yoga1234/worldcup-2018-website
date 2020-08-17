let webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BF5xcTeBvVqKGoILUcpBnj8LmS61x1AsUM1ftM1QNvtqbYBQmETlIuP4HskOSwSxjJBdLWUZKBmtZQpGFkxeGk4",
  "privateKey": "ZJ6qwjWr0p7PbezR9mr4TzXkcfH7u-gmSF949R_GMlc"
}

webPush.setVapidDetails(
  'mailto:septianayoga30@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
let pushSubsciption = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dbwlvsQtz6U:APA91bEGQUcbH9R9znoXoqAzZn6hxXFEXUQzfAQhBlsogexOCyubZDMJqhsKla6-EM2VIiCapgwp_ulVu8vo4lem0W0-2_zuJ6rJQbAaZn_i-q3I74MycJYj_UbhTb60-7tL805WEfIE",
  "keys": {
    "p256dh": "BFg9DeJy31BMCG7oFWIH5Tf34XTgFvcD++sMubzzruwaa4fdNObx9dLcBWY/rn+FzfB2KtS55VG83vhV5FZscmo=",
    "auth": "ErN8PlCzlR00lsoeeWlQ6Q=="
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
