export default function ( isLogin = {}, action ) {
	
	/* La forme de l'objet est 
	isLogin = { status: Boolean, tokenUser: String }
	*/
	
	if ( action.type === 'setLogin' ) {

		return action.login ;
		
	} else {
		
		return isLogin ;
	}

}
