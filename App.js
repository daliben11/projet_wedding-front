console.disableYellowBox = true;
import React, {useState} from 'react';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import connection from './screens/connexion/connection';
import signin from './screens/connexion/signin';
import signup from './screens/connexion/signup';

import MesMariagesScreen from './screens/mesmariages/MesMariagesScreen'
import GuestPage from './screens/mesmariages/Guestprogramme';

import ProfileUser from './screens/profile/ProfileUser';

import Dashboard from './screens/Dashboard';



import myWedding from './reducers/mariage.reducer'; 

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';


const store = createStore(combineReducers( { myWedding } ));


// Vue des mariages
const stackMariage = createStackNavigator({ 
	'Mes Mariages': MesMariagesScreen,
	'GuestPage': GuestPage,
	'Dashboard': Dashboard,
	},  
	{ headerMode: 'none' } 
);


// Profile et Espace Perso
const profilBottom = createBottomTabNavigator({
		'Mes Mariages': stackMariage,
		'Mon Profil': ProfileUser,
		Home: 	connection, 
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
		}
	}
);



// Connexion screens
const stackConnexion = createStackNavigator({ 
	'Home': 	connection, 
	'SignIn': signin,
	'SignUp': signup,
	profilBottom: profilBottom
	},  
	{ headerMode: 'none' } 
);



export default () => {
  const [fontLoaded, setFontLoaded]= useState(false)
  




async function getFonts(){
  await Font.loadAsync({
    'catamaran-semibold': require ('./assets/fonts/Catamaran-SemiBold.ttf'),
    'catamaran-regular': require ('./assets/fonts/Catamaran-Regular.ttf'),
    'greatvibes': require ('./assets/fonts/GreatVibes-Regular.ttf'),
  })
}

const App = createAppContainer(stackConnexion);

  
  
  if (fontLoaded){
    return (
      <Provider store={store}>
      	<App/>
      </Provider>
          )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish = {()=> setFontLoaded(true)}/>
    )
  }
}
