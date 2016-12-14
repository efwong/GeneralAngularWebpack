import angular from 'angular';
import userForm from './userform/user-form'
//import 'components/userform/user-form'
const directivesModule = angular.module('app.directivesModule', []);

directivesModule.component('userForm', userForm);
export default directivesModule;