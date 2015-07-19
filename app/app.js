//import "bootstrap/css/bootstrap.css!";

import $ from'jquery';
//import 'github:twbs/bootstrap-sass@3.3.5/js/bootstrap';

import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

import UserComponent from './components/user/user';

var app = angular.module('template', [
	'ngResource', 'ui.router',
	UserComponent.name
]);