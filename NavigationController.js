import React, {useState} from 'react';

import { connect } from 'react-redux';

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import {createDrawerNavigator} from 'react-navigation-drawer';

import { Icon } from 'react-native-elements';


import connection from './screens/connexion/connection';
import signin from './screens/connexion/signin';
import signup from './screens/connexion/signup';

import MesMariagesScreen from './screens/mesmariages/MesMariagesScreen'
import GuestPage from './screens/mesmariages/Guestprogramme';

import ProfileUser from './screens/profile/ProfileUser';

import Dashboard from './screens/Dashboard';

import Invites from './screens/guest/Guest';

import Budget from './screens/budget/Budget';

import Tasks from './screens/tasks/Tasks';

import Prestations from './screens/prestataires/Prestations';


function NavigationController() {


	console.log('ceci est le store ', store);
		
	// bottom de mon mariage
	const bottomDashboard = createBottomTabNavigator({
		'HomeDashboard': Dashboard,
		'MyTasks': ProfileUser,
		'Budget': GuestPage, 
		}
	);


	// Vue des mariages
	const stackMariage = createStackNavigator({ 
		'MyWeddings': MesMariagesScreen,
		'GuestPage': GuestPage,
		'Dashboard': bottomDashboard,
		},  
		{ headerMode: 'none' }
	);


	// Profil et Espace Perso
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



	const App = createAppContainer( stackConnexion ) ;


}

export default connect()( NavigationController );
