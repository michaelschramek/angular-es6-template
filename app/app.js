import angular from 'angular';
import ngResource from 'angular-resource'; 

import { UserController } from './UserController';
import { ProductPageController } from './ProductPageController';
import { RestService } from './RestService';

angular.module('template', ['ngResource'])
.factory('RestService', RestService.factory)
.controller('UserController', UserController)
.controller('ProductPageController', ProductPageController);