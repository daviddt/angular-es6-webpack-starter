import angular from 'angular';

let homeConfig = ($routeProvider) => {
  $routeProvider.otherwise('/home');

  $routeProvider.when('/home', {
	  template: '<home></home>'
  });
};

export default homeConfig;