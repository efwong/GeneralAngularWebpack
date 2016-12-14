import angular from 'angular';

// .directive('userForm', [function(){
  let controller = ['$scope', function($scope){

  }];
//   return{
//     restrict: 'E',
//     controller: controller,
//     scope: {
//     },
//     template: '<div>userform</div>'
//   }
// }]);

let userForm= {
  // bindings: {
  //   user: '='
  // },
  scope:{

  },
  controller: controller,
  template: '<div>userform</div>'
  //templateUrl: 'components/userform/user-form.html'
};

export default userForm;