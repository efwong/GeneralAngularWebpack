/*
* A form form submitting user data
*/
import angular from 'angular';
import User from '../../models/user'

let controller = ['$scope', 'usersService', function($scope, usersService){
  $scope.fname = "";
  $scope.lname = "";
  $scope.address = "";
  $scope.submitForm = () => {
    const user = new User($scope.fname, $scope.lname, $scope.address);
    usersService.create(user)
  };
}];

const userForm =[function(){
  return{
    restrict: 'E',
    scope:{
    },
    controller: controller,
    template: require('./user-form.html')
  };
}];

export default userForm;