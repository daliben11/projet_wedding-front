import React from 'react';
import { ListItem, Icon } from 'react-native-elements';

export default function Prestations(props){
  return(
  
  	<ListItem 
		    rightAvatar={ <Icon name='user' type='materialIcons' color='#31AE89'  size={35}/>}
		    title='Prestataires'
		    subtitle='presta'
		/>
  
  );
}
