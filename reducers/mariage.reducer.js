export default function ( mariageInfo = {status: false}, action ) {
	
	/* La forme de mariageInfo
	mariageInfo = { 
		status: Boolean, 
		date: Date, 
		bride: String, 
		groom: String, 
		city: String,
		description: String };
	*/
	
	if ( action.type === 'setMyWedding' ) {
		console.log('my wedding on reducer ', action.wedding);
		
		return action.wedding ;
		
	} else {
		
		return mariageInfo ;
	}

}
