import angular from 'angular';

const services = angular.module('app.services', []);

services.service('submitService', ['$http', function($http){
  this.submitForm = (user) => {
    console.log(user);
    $http({
      url: '/user/save',
      method: "POST",
      data: user,
      headers: {'Content-Type': 'application/json'}
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });
    // $http.({
    //   url: '/save',
    //   method: 'POST',
    //   data: user,
    //   headers: {'Content-Type': 'application/json'}
    //   }).success(function (data, status, headers, config) {
    //       $scope.users = data.users;
    //   })
  }
}]);

export default services;