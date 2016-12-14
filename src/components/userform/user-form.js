import angular from 'angular';
import User from '../../models/user'

let controller = ['$scope', 'submitService', function($scope, submitService){
  $scope.fname = "";
  $scope.lname = "";
  $scope.address = "";
  $scope.submitForm = () => {
    const user = new User($scope.fname, $scope.lname, $scope.address);
    submitService.submitForm(user)
  };
}];
const template = require('./user-form.html');
let userForm= {
  // bindings: {
  //   user: '='
  // },
  scope:{

  },
  controller: controller,
  template: template
};

export default userForm;