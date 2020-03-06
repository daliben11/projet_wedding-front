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

import ProfilUser from '../screens/profile/ProfileUser';
import ProfilEdit from '../screens/profile/ProfileModif';

import Dashboard from '../screens/Dashboard';
import Invites from '../screens/guest/Guest';
import Budget from '../screens/budget/Budget';
import Tasks from '../screens/tasks/Tasks';
import AddTasks from '../screens/tasks/AddTasks';
import Prestations from '../screens/prestataires/Prestations';





function NavigationController( props ) {
	var App;
	
	console.log('login ', !props.isLogin.status);
	

			
	// Vue des mariages
	const stackMariage = createStackNavigator({ 
		
		'MyWeddings': MesMariagesScreen,
		'GuestPage': GuestPage,
		'Dashboard': Dashboard,
		},  
		{ headerMode: 'none' }
	);


	const stackProfil = createStackNavigator({ 
			'ProfilUser': ProfilUser, 
			'ProfilEdit': ProfilEdit,
			},  
			{ headerMode: 'none' } 
		);
	
	
	// Profil et Espace Perso
	const profilBottom = createBottomTabNavigator({
			'Mes Mariages':	stackMariage,
			'Mon Profil':		stackProfil,
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
	
	//if ( !props.isLogin.status ) {
		
		// Connexion screens à créer que si l'user n'est pas enregistré dans le local storage
		const stackConnexion = createStackNavigator({ 
			'Home': 	connection, 
			'SignIn': signin,
			'SignUp': signup,
			profilBottom: profilBottom,
			},  
			{ headerMode: 'none' } 
		);
		
		//App = createAppContainer( stackConnexion ) ;

	//}
	
	if ( props.myWedding.status ) {	
		// stack des dashboard
		const stackDashboard = createStackNavigator({ 
			'Dashboard': Dashboard,
			'Invites': MesMariagesScreen,
			'Prestations': Prestations,
			'Budget': Budget,
			'Tasks': Tasks		
			},  
			{ headerMode: 'none' }
		);
		
		// bottomtab de mon dashboard view
		const bottomTab = createBottomTabNavigator({
			'HomeDashboard': stackDashboard,
			'My Tasks': Tasks,
			'Invites': Invites, 
			}
		);
		profilBottom = null;
	}


	
	const DrawerNavigator = createDrawerNavigator(
		{		
		   HomeConnection: {
		   // HomeConnection sera effacé du drawer qd on aura fini le dev, car elle ne sera pas définie si le user se connecte pour une deuxième fois.
	      screen: stackConnexion,
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
	      screen: stackProfil,
	      navigationOptions: {
	        title: "Mon Profil",
	        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
	      }
	    },
	    AccueilScreen: {
	      screen: Dashboard,
	      navigationOptions: {
	        title: "Dashboard",
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
