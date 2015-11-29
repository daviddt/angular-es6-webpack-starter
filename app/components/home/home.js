import angular from 'angular';

import homeComponent from './home.component';
import homeConfig from './home.config';

let componentModule = angular.module('home', [
 
])
.directive('home', homeComponent)
.config(homeConfig);

export default componentModule;