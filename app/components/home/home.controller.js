class HomeController {
	constructor(User) {
		this.title = 'I am the home component';
		this.user = User.getUser();
	};
};

HomeController.$inject = [
	'User'
]

export default HomeController;