let webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BJFX7VOHPn6zxVg0ha9urYPwKm3RGY2WXZ5nhqNqXrGsBFvhM0UQHcDmVAhOzkkaWUkWjTrOv47LjgsRm7sYyHU",
  "privateKey": "RBtX33OVqUqm0pKDA0v1w3Ur5DXIOMikx33qCWUEqYs"
}

webPush.setVapidDetails(
  'mailto:septianayoga30@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
let pushSubsciption = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/fNoC8QzU0M4:APA91bGflMdPeDwdF16Ep2I4T-ZuHk_wqW2JP8AaJ0NuGtdi0_5BVBUho8hT3xSvJijlUhFS5BpDaignozpxNDUPMfXa863alRUY_i27R1JVQOM9L_5Se-kvcax8rXgeYu1Y6nQDYq7a",
  "keys": {
    "p256dh": "BNh1a22WxgudQ4RXBhmiCJnk159XGhBer176BWvdHPdiam7hliJ/UMSG+u582mcJH4o/cRX7j/m955maA8Vs9VM=",
    "auth": "FJGatjZL3jkS1QlnNv+NLw=="
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