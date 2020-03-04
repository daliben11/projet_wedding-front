import React, {useState} from 'react';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MesMariagesScreen from './screens/MesMariagesScreen'
import ProfileUser  from './screens/ProfileUser';
import connection from './screens/connection';





export default () => {
  const [fontLoaded, setFontLoaded]= useState(false)
  

const bottomNavigator = createBottomTabNavigator({
  'Mon Profil': ProfileUser,
  'Mes Mariages': MesMariagesScreen,
  'connection': connection,
},
{ defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      var iconName, iconType;
      if (navigation.state.routeName == 'Mes Mariages') {
        iconName = 'heart';
        iconType = 'evilicon';
      } else if (navigation.state.routeName == 'Mon Profil') {
        iconName = 'user';
        iconType = 'antdesign';
      }
      
      return <Icon name={iconName} type={iconType} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#1f6a39',
    style: {
    	backgroundColor: '#31AE89',
    }
  },
}
);


async function getFonts(){
  await Font.loadAsync({
    'catamaran-semibold': require ('./assets/fonts/Catamaran-SemiBold.ttf'),
    'catamaran-regular': require ('./assets/fonts/Catamaran-Regular.ttf'),
    'greatvibes': require ('./assets/fonts/GreatVibes-Regular.ttf'),
  })
}

const App = createAppContainer(bottomNavigator);

  
  
  if (fontLoaded){
    return (
      <App/>
          )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish = {()=> setFontLoaded(true)}/>
    )
  }
}
