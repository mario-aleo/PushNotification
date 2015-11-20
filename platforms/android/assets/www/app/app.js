'use strict';

angular.module('ngapp', [ 'ngTouch', 'ui.router', 'uuid4', 'angular-uuid', 'jsonrpc', 'ngMdIcons', 'ngMaterial', 'ngCordova', 'ngStorage' ])

.run(function($rootScope, $cordovaDevice, $state, $cordovaPush, $localStorage){
  document.addEventListener("deviceready", function () {
    $rootScope.$watch("window.StatusBar", function() {
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByName("black");
      $rootScope.$apply();
    });
    window.plugins.orientationLock.lock("portrait");
    document.addEventListener("backbutton", function (e) {
      if($state.is('main')){
        navigator.app.exitApp();
      }
    }, false );

    /*var androidConfig = {
      "senderID": "golsat_mobile_master"
    };

    $cordovaPush.register(androidConfig).then(function(result) {
      console.log(result);
    }, function(err) {
      console.log(err);
    })

    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      switch(notification.event) {
        case 'registered':
          if (notification.regid.length > 0 ) {
            alert('registration ID = ' + notification.regid);
          }
          break;

        case 'message':
          // this is the actual push notification. its format depends on the data model from the push server
          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          break;

        case 'error':
          alert('GCM error = ' + notification.msg);
          break;

        default:
          alert('An unknown GCM event has occurred');
          break;
      }
    });*/

    var push = PushNotification.init({
      "android": {
        "senderID": "pushnotifytest-1135"
        // Api Key: AIzaSyC-pQwwbViFDmoHVIK9_ZN18uFqFU5nYtQ
      },
      "ios": {
        "alert": "true",
        "badge": "true",
        "sound": "false"
      }, "windows": {}
    });

    //if($localStorage.swt == null){
      push.on('registration', function(data) {
        // data.registrationId
        console.log("Registration: " + JSON.stringify(data));
      });
    //}

    push.on('notification', function(data) {
      // data.message,
      // data.title,
      // data.count,
      // data.sound,
      // data.image,
      // data.additionalData
      console.log("Notification: " + JSON.stringify(data));
    });

    push.on('error', function(e) {
      // e.message
      console.log("Error: " + JSON.stringify(e));
    });

    $rootScope.turnNotify = function(param){
      if(param == true){
        push.on('registration', function(data) {
          // data.registrationId
          console.log("Turn On: " + JSON.stringify(data));
        });
      } else{
        push.off('notification', function(data){
          console.log("Turn Off: " + JSON.stringify(data));
        });
      }
    }

  }, false);
});
