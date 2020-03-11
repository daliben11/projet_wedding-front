import React from 'react';

import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function DeconnexionScreen( props ){
  return(
  	<View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
  		<Text>Vous êtes deconnecté·e. Merci !</Text>
  		<Button
			 	title="Aller à la Home"
			 	buttonStyle={{backgroundColor:'#FAEBE4', marginTop: 30}}
			 	titleStyle={{color:"#31AE89"}}
				onPress={ () => {
						props.navigation.navigate('gohome');
				} }
			 />
  	</View>
  );
}
