let webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BPEeT_WMd0_cMDLiggC6-siDZDAXM2zTNvd9Q7Vwkgkw56-JeduJqbsJdpaimzXGOs_a57BeznbRsRlzCXtL-gM",
  "privateKey": "DPbS6N0LNKtXI3T1FC4q2_5ifP-3du-tWgxQ2hjVCDk"
}

webPush.setVapidDetails(
  'mailto:septianayoga30@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
let pushSubsciption = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/d9hwX002ctw:APA91bHJmwN6Tg0TBXnFPNgKD23dmTx5iKEXIfHjzVn2EB__bVXAwjyjsSQg0pQ3kVOcytivUxOvVCGZuZ1wD_MJPwbpiI4ylySnaoQDP9lQZmZO30nTpoVHDKeZpW5BfQSh7aGC_DHl",
  "keys": {
    "p256dh": "BI1WWOX+Ma+0d1qnfUvAPwq86PYk/Sq1FYuiQpeJeQsUD8FtMO/sOTcyJNsbRHVsYJLQqtxOQXvPtdkNvobm3WI=",
    "auth": "Dc2pRvbTFg4F9M+0maLnSg=="
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