const usersService = ['$http', function($http){

  // Submit a new user
  this.create = (user) => {
    console.log(user);
    $http({
      url: '/users',
      method: "POST",
      data: user,
      headers: {'Content-Type': 'application/json'}
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });
  };

  // Get All users
  this.getAll = () => {
    return $http({
      url: '/users',
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    });
  };
}];

export default usersService;