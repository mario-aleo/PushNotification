'use strict';

angular.module('ngapp').controller('MainController', function(global, mainService, $state, $scope, $localStorage){

  var ctrl = this;

  this.storage = $localStorage;

  if(this.storage.swt == null){
    this.storage.swt = true;
  }

  this.swt = { onOff: this.storage.swt };

  $scope.$watch('main.swt.onOff', function(){
    ctrl.storage.swt = ctrl.swt.onOff;
  }, true);
});
