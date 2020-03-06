export default function ( mariageInfo = {status: false}, action ) {
	
	/* La forme de mariageInfo
	mariageInfo = { 
		status: Boolean, 
		date: Date, 
		brideName: String, 
		groomName: String, 
		city: String };
	*/
	
	if ( action.type === 'setMyWedding' ) {
		console.log('my wedding on reducer ', action.wedding);
		return action.wedding ;
		
	} else {
		
		return mariageInfo ;
	}

}
