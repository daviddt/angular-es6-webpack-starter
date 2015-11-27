import angular from 'angular';
import ngRoute from 'angular-route';

import appComponent from './app.component';

let App = angular.module('app', [
	ngRoute
])
.directive('app', appComponent);

angular.bootstrap(document.body, ['app']);