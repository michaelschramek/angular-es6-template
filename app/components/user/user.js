import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {appName, baseUrl} from '../../config/constants';

import { UserController } from './UserController';
import { ProductPageController } from './ProductPageController';

import { RestService } from './RestService';

let UserComponent = angular.module(`${appName}.user`, [  
  'ui.router'
]);

UserComponent
.factory('RestService', RestService.factory)
.controller('UserController', UserController)
.controller('ProductPageController', ProductPageController)
//.config($locationProvider => $locationProvider.html5Mode(true))
.config(($stateProvider) => {
  $stateProvider
    .state('root', {
      url: '/',
      controller: 'UserController',
      controllerAs: 'vm',
      templateUrl: 'app/components/user/user-template.html',
    });
});

export default UserComponent;