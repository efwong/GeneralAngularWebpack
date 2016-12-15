import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeController from 'areas/home/home';
import './components';
import './services';

const app = angular.module('app', [uiRouter, 'app.directivesModule', 'app.services']);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    // manage state for SPA
    $stateProvider
        .state('home', {
            url: '/',
            template: require('areas/home/home.html'),
            controller: homeController
        });

    $locationProvider.html5Mode(true);
});

export default app;
