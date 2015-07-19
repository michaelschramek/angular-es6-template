//import "bootstrap/css/bootstrap.css!";

import $ from'jquery';
//import 'github:twbs/bootstrap-sass@3.3.5/js/bootstrap';

import angular from 'angular';
import ngResource from 'angular-resource';

import _ from 'lodash';
window._ = _;
import 'restangular';

import uiRouter from 'angular-ui-router';

import UserComponent from './components/user/user';

var app = angular.module('template', [
	'ui.router',
	'ngResource',
	'restangular',
	UserComponent.name
]);

app.config((RestangularProvider) => {
	// set restful base API Route
	RestangularProvider.setBaseUrl('https://api.github.com');
});