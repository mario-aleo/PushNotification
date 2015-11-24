var http = require('http');
var apn = require('apn');
var url = require('url');

var myPhone = "1c4c9ac489f14070884a1586b13bf6d8eb8ce48ed27b6b8f9c4953123a3090a1";
var myDevice = new apn.Device(myPhone);

var note = new apn.Notification();
note.alert = {
  "title": "MobileMaster",
  "body" : "I'm Fucking Awesome!"
};

note.device = myDevice;

var callback = function(errorNum, notification){
    console.log('Error is: %s', errorNum);
    console.log("Note " + JSON.stringify(notification));
}
var options = {
    gateway: 'gateway.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
    errorCallback: callback,
    cert: '/Users/mario.aleo/Desktop/cert.pem',
    key: '/Users/mario.aleo/Desktop/key.pem',
    passphrase: 'Maal1278',
    port: 2195,
    enhanced: true,
    cacheLength: 100
}
var apnsConnection = new apn.Connection(options);
apnsConnection.sendNotification(note);
