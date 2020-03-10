export default function ( isLogin = {}, action ) {
	
	/* La forme de l'objet est 
	isLogin = { status: Boolean, tokenUser: String }
	*/
	
	if ( action.type === 'setLogin' ) {

		return action.login ;
		
	} else if ( action.type === 'setUserToken' ){
		let copy = {...isLogin};
		copy.userToken = action.userToken;
		
		return copy ;
		
	} else {
		
		return isLogin ;
	}

}
