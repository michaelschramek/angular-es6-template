import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {appName, baseUrl} from '../../config/constants';

import { UserController } from './UserController';

import { UserRestService } from './UserRestService';

import { NgResourceUserRestService } from './NgResourceUserRestService';

let UserComponent = angular.module(`${appName}.user`, [  
  'ui.router'
]);

UserComponent
.service('UserRestService', UserRestService)
.service('NgResourceUserRestService', NgResourceUserRestService)
.controller('UserController', UserController)
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