import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {appName, baseUrl} from '../../config/constants';

import { UserController } from './UserController';

import { UserRestService } from './UserRestService';

let UserComponent = angular.module(`${appName}.user`, [  
  'ui.router'
]);

UserComponent
.service('UserRestService', UserRestService)
.controller('UserController', UserController)
//.config($locationProvider => $locationProvider.html5Mode(true))
.config(($stateProvider, RestangularProvider) => {
  $stateProvider
    .state('root', {
      url: '/',
      controller: 'UserController',
      controllerAs: 'vm',
      templateUrl: 'app/components/user/user-template.html',
    });

  // set restful base API Route
  RestangularProvider.setBaseUrl('https://api.github.com');
});

export default UserComponent;