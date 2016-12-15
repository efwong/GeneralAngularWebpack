/*
* Home Controller
*/
export default function($scope, usersService) {
  $scope.users = [];

  // initialize home page
  const init = () => {
    // fetch user data
    usersService.getAll()
    .then(function successCallback(response) {
      $scope.users = response.data;
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  init();
};