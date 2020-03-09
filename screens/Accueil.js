import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';


function Accueil () {
  return(
  
  	<View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
  	
  		<TouchableOpacity>
  			<Icon name='flower' type='material-community' color='#31AE89'  size={35}/>
		    <Text>J'organise mon mariage \u263A</Text>
  		</TouchableOpacity>
  		
  		
  		
  		<TouchableOpacity>
  			<Image source={require('../assets/icons/icons8-invitation-100.png')}/>
		    <Text>Je suis invité·e à un mariage</Text>
  		</TouchableOpacity>
  		  
		</View>
  
  );
}

export default Accueil ;

// &nbsp;
