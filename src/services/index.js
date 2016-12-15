import angular from 'angular';
import userService from './users-service';

// services module
const services = angular.module('app.services', []);

// load each service
services.service('usersService', userService);

export default services;