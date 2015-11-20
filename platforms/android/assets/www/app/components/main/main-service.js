'use strict';

angular.module('ngapp').service('mainService', function(jsonrpc){
    var service = jsonrpc.newService('eqpEspelhados', 'http://rastrear.golsat.com.br/wsi/mobilev6/delegates.ashx?test');
    this.list = service.createMethod('CapturaEquipamentosEspelhados');
});
