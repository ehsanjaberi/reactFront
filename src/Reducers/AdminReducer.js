const AdminReducer = (state, action) => {
	switch (action.type) {
		case 'login':
			localStorage.setItem('user', JSON.stringify(action.payload.inf));
			return {
				...state,
				authenticated : true
			};
		case 'logout':
			localStorage.removeItem('user');
			return {
				...state,
				authenticated : false
			};

		case 'isAuthenticated':
			let user = localStorage.getItem('user');
			if (user) {
				return {
					...state,
					authenticated : true
				};	
			}
				return {
					...state,
					authenticated : false
				};	
		default:
			break;
	}
	return state;
};
export default AdminReducer;
