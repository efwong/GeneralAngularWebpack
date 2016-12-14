// import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// //import './components/home/home.html';

// const app = angular.module('app', [uiRouter])

// app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

//   $urlRouterProvider.otherwise('/home');

//   $stateProvider
//     .state('home',{
//       url: '/home',
//      // template: '<div>sadfsdf</div>'
//       templateUrl: require('./components/home/home.html')
//       // views:{
//       //   '': { templateUrl: require('./components/home/home.html')}
//       // }
//     });

  
//   $locationProvider.html5Mode(true);
// });

// export default app;

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeController from 'home/home';
//import './directives-module';
import './components'
//import todoFactory from 'factories/todo-factory';
//import todosController from 'todos/todos';

const app = angular.module('app', [uiRouter, 'app.directivesModule']);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('home/home.html'),
            controller: homeController
        })
        // .state('about', {
        //     url: '/about',
        //     template: require('about/about.html')
        // });

    $locationProvider.html5Mode(true);
});

export default app;
