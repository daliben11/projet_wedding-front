export default function ( mariageInfo = {}, action ) {
	
	
	if ( action.type === 'setMyWedding' ) {
		
		return action.wedding ;
		
	} else {
		
		return mariageInfo ;
	}

}
