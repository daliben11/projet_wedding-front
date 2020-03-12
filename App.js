console.disableYellowBox = true;
import React, {useState} from 'react';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import NavigationController from './navigationController/NavigationController';

import myWedding from './reducers/mariage.reducer'; 
import isLogin from './reducers/isLogin.reducer'; 

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers( { myWedding, isLogin } ));




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
      	<NavigationController />
      </Provider>
          )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish = {()=> setFontLoaded(true)}/>
    )
  }
}
