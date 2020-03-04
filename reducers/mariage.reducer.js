export default function ( mariageInfo = {}, action ) {
	
	
	if ( action.type === 'setMyWedding' ) {
		console.log('my wedding on reducer ', action.wedding);
		return action.wedding ;
		
	} else {
		
		return mariageInfo ;
	}

}
