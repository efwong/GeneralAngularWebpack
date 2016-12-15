/*
* A simple list to display user data
*/

let controller = ['$scope', function($scope){
}];

const userList = [function(){
  return{
    restrict: 'E',
    scope:{
      users: '<',
      test: '<'
    },
    controller: controller,
    template: require('./user-list.html')
  };
}];
export default userList;