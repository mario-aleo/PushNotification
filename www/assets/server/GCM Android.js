var http = require('http');

var post_data = JSON.stringify({
  to: "m2V5J14Bj1o:APA91bEoajddkW9RKFJMp7YzJ_LFA84MAMEsqUoZkF-3gHfuAmHyHMuccyofYR5Eh8bP43jIiMMiZ-8Y4uSKjOnGLedS6Mu8SpUi6scvpd8x3oIkEWmBCekE4MeD1diDjvTVpPmH76Ui",
  notification: {
    "title": "MobileMaster",
    "text": "I'm Fucking Awesome!"
  }
});

var options = {
  host: 'gcm-http.googleapis.com',
  path: '/gcm/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'key=AIzaSyC-pQwwbViFDmoHVIK9_ZN18uFqFU5nYtQ',
  }
}

var req = http.request(options, function(res){
  console.log('status: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function(chunk){
      console.log("body: " + chunk);
  });
});

req.write(post_data);
req.end();
