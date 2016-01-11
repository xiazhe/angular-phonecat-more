'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


//pagination services
phonecatApp.factory('paginationService',['$http', '$q', function($http, $q){
  var service = {};

  service.maxSize = 10;
  service.pageSize = 10;
  
  service.getList = function () {
    var defer = $q.defer();

    var url = "phones/pagination.json";
    var requestBody = {
      method: 'GET',
      url: url
    };

    $http(requestBody).
        success(function (data, status, headers, config, statusText) {
          defer.resolve(data);
        }).
        error(function (data, status, headers, config, statusText) {
          defer.reject(data);
        });

    return defer.promise;
  };


  service.pageChange = function () {
    
  }



  
  return service;

}]);

