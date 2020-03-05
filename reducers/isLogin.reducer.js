export default function ( isLogin = {}, action ) {
	
	
	if ( action.type === 'setLogin' ) {

		return action.login ;
		
	} else {
		
		return isLogin ;
	}

}
