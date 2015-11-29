class UserService {
	constructor() {
		this.user = { name: 'David' }
	};
	
	getUser () {
		return this.user;
	}
};

export default UserService;