'use strict';

angular.module('ngapp').service('loginService', function(jsonrpc){
    var service = jsonrpc.newService('login', 'http://rastrear.golsat.com.br/wsi/mobilev6/delegates.ashx?test');
    this.login = service.createMethod('ValidateUser');
});
