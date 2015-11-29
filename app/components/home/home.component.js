import controller from './home.controller';
import template from './home.html';

let homeComponent = () => {
	return {
		replace: true,
		restrict: 'E',
		template,
		controller,
		controllerAs: 'vm',
		bindToController: true
	};
};

export default homeComponent;