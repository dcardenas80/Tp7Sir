'use strict';

/**
 * @ngdoc function
 * @name tp7SirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7SirApp
 */
var mainModule = angular.module('tp7SirApp');
mainModule.controller('MainCtrl',['$scope','getPeople',showPeople]);
mainModule.controller('insertCtrl',['$scope','insertPeople',insertPerson]);
mainModule.constant('baseUrl','/rest/opowerws/');
mainModule.factory('insertPeople', ['$resource', 'baseUrl', function($resource, baseUrl) {
        return $resource(baseUrl + "createperson",{},{
          'save': {
            method: 'POST', 
            cache: false,
            isArray:false,
            headers:{'Content-Type':'application/json; charset=UTF-8'} 
        }
        });
     // Note the full endpoint address
  }]);

  mainModule.factory('getPeople', ['$resource', 'baseUrl', function($resource, baseUrl) {
    return $resource(baseUrl + "getpeople",{},{
        get: {method: "GET"},
    });
}]);

mainModule.factory('exception', exception);
exception.$inject = ['logger'];
function exception(logger) {
    var service = {
        catcher: catcher
    };
    return service;
    function catcher(message) {
        return function(reason) {
            logger.error(message, reason);
        };
    }
  }
  function insertPerson($scope,insertPeople){
    var personObjet = { "name":"", "lastName":"", "email":"","age":0 };
  
    $scope.insertData= function(){
      personObjet.name = $scope.name;
      personObjet.lastName = $scope.lastName;
      personObjet.email = $scope.email;
      personObjet.age = $scope.age;
      personObjet = JSON.stringify(personObjet);

      $scope.name ="";
      $scope.lastName = "";
      $scope.email = "";
      $scope.age = "";
      
      insertPeople.save(personObjet).$promise.then(function (result) {
        $scope.s = result.objectToSave;
      });
    }
  
  }
  function showPeople ($scope,getPeople) {
    
    getPeople.get().$promise.then(function (result) {
      
      $scope.people = result.objectToSave;
      console.log(result.objectToSave);
    });

  };


