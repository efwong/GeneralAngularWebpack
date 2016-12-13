import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import './components/home/home.html';

//const app = angular.module('app', []);

export const app = angular.module('app', [uiRouter]).config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url: '/home',
   // template: '<div>sadfsdf</div>'
    templateUrl: require('./components/home/home.html')
    // views:{
    //   '': { templateUrl: require('./components/home/home.html')}
    // }
  });

  
  $locationProvider.html5Mode(true);
});