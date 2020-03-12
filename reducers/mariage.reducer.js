export default function ( mariageInfo = {status: false, justCreate: false}, action ) {
	
	/* La forme de mariageInfo
	mariageInfo = { 
		status: Boolean,
		justCreate: Boolean, 
		date: Date, 
		bride: String, 
		groom: String, 
		city: String,
		description: String };
	*/
	
	if ( action.type === 'setMyWedding' ) {
		//console.log('my wedding on reducer ', action.wedding);
		
		return action.wedding ;
		
	} else if ( action.type === 'setJustCreateWedding' ) {
		let copy = {...mariageInfo};
		copy.justCreate = action.justCreate ;
		
		return copy ;
		
	} else {
		
		return mariageInfo ;
	}

}
