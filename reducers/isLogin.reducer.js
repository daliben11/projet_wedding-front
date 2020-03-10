export default function ( isLogin = {}, action ) {
	
	/* La forme de l'objet est 
	isLogin = { 
		status: Boolean, 
		tokenUser: String, 
		username: String,
		}
	*/
	
	if ( action.type === 'setLogin' ) {

		return action.login ;
		
	} else if ( action.type === 'setUserToken' ){
		let copy = {...isLogin};
		copy.userToken = action.userToken;
		
		return copy ;
		
	} else if ( action.type === 'saveUsername' ){
		let copy = {...isLogin};
		copy.username = action.username;
		
		return copy ;
		
	} else {
		
		return isLogin ;
	}

}
