import React, {useState} from 'react';

import { connect } from 'react-redux';
import { Dimensions } from 'react-native'

import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

/* https://reactnavigation.org/docs/drawer-navigator/ */
import { createDrawerNavigator, DrawerView } from 'react-navigation-drawer'

import { Feather } from '@expo/vector-icons'
import { Icon } from 'react-native-elements';

import SideBar from './SideBar'
import HeaderNav from '../screens/HeaderNav'

import Accueil from '../screens/Accueil'

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
import Prestations from '../screens/prestataires/Prestations';






function NavigationController( props ) {
	var App;
	
	
	console.log('myWedding exists? ', props.myWedding.status);
	
	// Vue du user lambda, si myWedding existe, alors, j-ai acces au dashboard
	const stackMariage = props.myWedding.status 	
		? createStackNavigator({ 
			'MyWeddings': MesMariagesScreen,
			'GuestPage': GuestPage,
			'Dashboard': Dashboard,
			},  
			{ headerMode: 'none' } 
			)
		: createStackNavigator({ 
			'MyWeddings': MesMariagesScreen,
			'GuestPage': GuestPage
			},  
			{ headerMode: 'none' }
			) ;



	// Stack Profil et Edition Profil
	const stackProfil = createStackNavigator({ 
		'ProfilUser': ProfilUser, 
		'ProfilEdit': ProfilEdit,
		}, 
		{ headerMode: 'none' } 
	);
	
	
	
	// Tab bottom Espace Perso
	const profilBottom = createBottomTabNavigator({
			'Mes Mariages':	stackMariage,
			'Mon Profil':		stackProfil,
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
						marginTop= 5;
					}
					return <Icon name={iconName} type={iconType} size={25} color={tintColor} />;
				},
			}),
			tabBarOptions: {
				activeTintColor: '#ffffff',
				inactiveTintColor: '#1f6a39',
				style: {
					backgroundColor: '#31AE89',
									height: 40,

				}
			}
		}
	);
	
		
	
	////// Navigation pour MON mariage, Dashboard & Co
	
	// stack du dashboard et pages de gestion du mariage
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
	const dashboardBottom = createBottomTabNavigator({
		'Dashboard': stackDashboard,
		'Mes tâches': Tasks,
		'Invités': Invites,
		'Budget': Budget
		},
		{ defaultNavigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => {
					var iconName, iconType;
					if (navigation.state.routeName == 'Dashboard') {
						iconName = 'home';
						iconType = 'entypo';
					} else if (navigation.state.routeName == 'Mes tâches') {
						iconName = 'tasks';
						iconType = 'font-awesome';
					}
					else if (navigation.state.routeName == 'Invités') {
						iconName = 'md-people';
						iconType = 'ionicon';
					}
					else if (navigation.state.routeName == 'Budget') {
						iconName = 'euro-symbol';
						iconType = 'material';
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
	

	// Ça crée les élements du tiroir selon le type d'utilisateur (avec ou sans mariage propre)
	const ScreensToNavigateDrawer = props.myWedding.status
		?	{		
				MesMariagesScreen: {
					screen: profilBottom,
					navigationOptions: {
					  title: "Mes Mariages",
					  drawerIcon: ({ tintColor }) => <Feather name="heart" size={16} color={tintColor} />
					}
				},
				DashboardScreen: {
					screen: dashboardBottom,
					navigationOptions: {
					  title: "Dashboard",
					  drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
					}
				},
				MonProfilScreen: {
					screen: stackProfil,
					navigationOptions: {
					  title: "Mon Profil",
					  drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
					}
				},
				DeconnexionScreen: {
					screen: DeconnexionScreen,
					navigationOptions: {
					  title: "Déconnexion",
					  drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
					}
				}
			}
		: {		
				MesMariagesScreen: {
				  screen: profilBottom,
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
				DeconnexionScreen: {
				  screen: DeconnexionScreen,
				  navigationOptions: {
				    title: "Déconnexion",
				    drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
				  }
				}
			} ;
	
	
	const DrawerNavigator = createDrawerNavigator(
		ScreensToNavigateDrawer,
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

		
	
	const stackAccueil = createStackNavigator({ 
		'Accueil':	Accueil,
		'Drawer':		DrawerNavigator
		},  
		{ headerMode: 'none' } 
	);
	
	
	//if ( !props.isLogin.status ) { 	//}
		
	// Connexion screens à créer que si l'user n'est pas enregistré dans le local storage
	const stackConnexion = createStackNavigator({ 
		'Home': 	connection, 
		'SignIn': signin,
		'SignUp': signup,
		'Enter':	stackAccueil,
		},  
		{ headerMode: 'none' } 
	);
	
	
	App = props.isLogin.status
		? createAppContainer( stackAccueil )
		: createAppContainer( stackConnexion ) ;
		
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
