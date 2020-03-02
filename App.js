import React, {useState} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MesMariagesScreen from './screens/MesMariagesScreen'

import ProfileUser  from './screens/ProfileUser';

const stackNavigator = createStackNavigator({
  'Mon Profil': ProfileUser
})
async function getFonts(){
  await Font.loadAsync({
    'catamaran-semibold': require ('./assets/fonts/Catamaran-SemiBold.ttf'),
    'catamaran-black': require ('./assets/fonts/Catamaran-Black.ttf'),
  })
}

const App = createAppContainer(stackNavigator)

export default () => {
  const [fontLoaded, setFontLoaded]= useState(false)
  if (fontLoaded){
    return (
      <App>
        <MesMariagesScreen/>
      </App>
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish = {()=> setFontLoaded(true)}/>
    )
  }
}