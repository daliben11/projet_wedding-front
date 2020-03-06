import React from 'react';
import { ListItem, Icon } from 'react-native-elements';

export default function Tasks(props){
  return(
  
  	<ListItem 
		    rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='#31AE89'  size={35}/>}
		    title='Tasks'
		    subtitle='tâches'
		/>
  
  );
}
