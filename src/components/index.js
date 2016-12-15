import angular from 'angular';
import userForm from './userform/user-form';
import userList from './userlist/user-list';

// directives module
const directivesModule = angular.module('app.directivesModule', []);

// load each directive
directivesModule.directive('userForm', userForm);
directivesModule.directive('userList', userList);

export default directivesModule;