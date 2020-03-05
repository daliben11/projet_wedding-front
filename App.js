console.disableYellowBox = true;
import React, {useState} from 'react';

import { connect } from 'react-redux';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import NavigationController from './NavigationController';



export default ( ) => {
  
  const [fontLoaded, setFontLoaded]= useState(false);


	async function getFonts(){
		await Font.loadAsync({
		  'catamaran-semibold': require ('./assets/fonts/Catamaran-SemiBold.ttf'),
		  'catamaran-regular': require ('./assets/fonts/Catamaran-Regular.ttf'),
		  'greatvibes': require ('./assets/fonts/GreatVibes-Regular.ttf'),
		})
	}

		
  if (fontLoaded){
    return (
      <Provider store={store}>
      	<NavigationController/>
      </Provider>
          )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish = {()=> setFontLoaded(true)}/>
    )
  }
}
