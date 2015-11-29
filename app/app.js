import angular from 'angular';
import ngRoute from 'angular-route';

import appComponent from './app.component';

import components from  './components/components';
import common from './common/common';

let App = angular.module('app', [
	ngRoute,
	
	components.name,
	common.name
])
.directive('app', appComponent);

angular.bootstrap(document.body, ['app']);