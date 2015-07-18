import "bootstrap/css/bootstrap.css!";

import $ from'jquery';

import angular from 'angular';
import ngResource from 'angular-resource';
import 'angular-ui-router';

import { UserController } from './UserController';
import { ProductPageController } from './ProductPageController';
import { RestService } from './RestService';

angular.module('template', ['ngResource', 'ui.router'])
.factory('RestService', RestService.factory)
.controller('UserController', UserController)
.controller('ProductPageController', ProductPageController);