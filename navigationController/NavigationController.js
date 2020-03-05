import React, {useState} from 'react';

import { connect } from 'react-redux';
import { Dimensions } from 'react-native'

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import { createDrawerNavigator, DrawerView } from 'react-navigation-drawer'

import { Feather } from '@expo/vector-icons'
import { Icon } from 'react-native-elements';

import SideBar from './SideBar'

import connection from '../screens/connexion/connection';
import signin from '../screens/connexion/signin';
import signup from '../screens/connexion/signup';
import DeconnexionScreen from '../screens/connexion/DeconnexionScreen';

import MesMariagesScreen from '../screens/mesmariages/MesMariagesScreen'
import GuestPage from '../screens/mesmariages/Guestprogramme';

import ProfileUser from '../screens/profile/ProfileUser';

import Dashboard from '../screens/Dashboard';
import Invites from '../screens/guest/Guest';
import Budget from '../screens/budget/Budget';
import Tasks from '../screens/tasks/Tasks';
import Prestations from '../screens/prestataires/Prestations';





function NavigationController( props ) {
	var App;
	
	const DrawerNavigator = createDrawerNavigator(
		{
		   HomeConnection: {
	      screen: connection,
	      navigationOptions: {
	        title: "Home connection",
	        drawerIcon: ({ tintColor }) => <Feather name="heart" size={16} color={tintColor} />
	      }
	    },
		  MesMariagesScreen: {
	      screen: MesMariagesScreen,
	      navigationOptions: {
	        title: "Mes Mariages",
	        drawerIcon: ({ tintColor }) => <Feather name="heart" size={16} color={tintColor} />
	      }
	    },
	    MonProfilScreen: {
	      screen: ProfileUser,
	      navigationOptions: {
	        title: "Mon Profil",
	        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
	      }
	    },
	    AccueilScreen: {
	      screen: Dashboard,
	      navigationOptions: {
	        title: "Accueil",
	        drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
	      }
	    },
		  DeconnexionScreen: {
	      screen: DeconnexionScreen,
	      navigationOptions: {
	        title: "Déconnexion",
	        drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
	      }
	    } 
		},
		{
			contentComponent: props => <SideBar {...props} />,
			drawerWidth: Dimensions.get("window").width * 0.80,
			hideStatusBar: true,
			contentOptions: {
					activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
					activeTintColor: "#53115B"
			}
		}
	);
	App = createAppContainer( DrawerNavigator ) ;

	

		
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

	console.log('login ', !props.isLogin.status);
	
	if ( !props.isLogin.status ) {
			
		// Connexion screens
		const stackConnexion = createStackNavigator({ 
			'Home': 	connection, 
			'SignIn': signin,
			'SignUp': signup,
			profilBottom: profilBottom
			},  
			{ headerMode: 'none' } 
		);
		
		App = createAppContainer( stackConnexion ) ;

	}
	
	
	return (
		<App />
	);
}



function mapStateToProps(state) {
  return { 
	 	isLogin: state.isLogin,
	 	myWedding: state.myWedding,
//  	username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: function ( val ) {
    	 dispatch( {type: 'setLogin', login: val } )
    }
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)( NavigationController );



/*NousContacterScreen: {
		screen: NousContacterScreen,
		navigationOptions: {
		  title: "Nous Contacter",
		  drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
		}
	}, 
	MentionsLegalesScreen: {
		screen: MentionsLegalesScreen,
		navigationOptions: {
		  title: "Mentions Légales",
		  drawerIcon: ({ tintColor }) => <Feather name="bookmark" size={16} color={tintColor} />
		}
	},
*/
