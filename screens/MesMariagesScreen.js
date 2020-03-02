import React, { useState, useEffect } from 'react';
//import { connect } from 'react-redux';

import { 
	View, ScrollView, SafeAreaView,
	Text, StyleSheet  } from 'react-native';

import { Icon, ListItem } from 'react-native-elements';




function MesMariagesScreen({navigation}) {
	
	// nav haut
	
	return(
		<SafeAreaView style={{marginTop: 30, width:'100%', flex:1}}>
			<View 
				style={{
					width:'100%', height:60, padding: 20,
					backgroundColor: '#FAEBE4', 
					flexDirection: 'row', alignItems: 'center',
				}}>
				<Icon name='menu' type='material' color='black' />
				<Text 
					style={{ paddingLeft: 20}}
				>
					Mes Mariages
				</Text>
			</View>
				
				
			<ScrollView >
			
			
				<ListItem key={1}
					rightAvatar={{ source: require('../assets/picture-1.jpg') }}
				  title='Mariage John & Janet'
				  titleStyle={styles.titleView}
				  subtitle={
				    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
				    	<View style={styles.subtitleView}>
							  <Icon name='clock' type='evilicon' color='grey' />
							  <Text style={styles.ratingText}>10/02/2020</Text>
					    </View>
					    <View style={styles.subtitleView}>
						    <Icon name='location-on' type='materialIcons' color='grey' />
						    <Text style={styles.ratingText}>Paris</Text>
				      </View>
				    </View>
				  }
				  leftAvatar={{ source: require('../assets/picture-2.jpg') }}
				  bottomDivider
				/>
				<ListItem key={2}
					rightAvatar={{ source: require('../assets/picture-1.jpg') }}
				  title='Mariage John & Janet'
				  titleStyle={styles.titleView}
				  subtitle={
				    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
				    	<View style={styles.subtitleView}>
							  <Icon name='clock' type='evilicon' color='grey' />
							  <Text style={styles.ratingText}>10/02/2020</Text>
					    </View>
					    <View style={styles.subtitleView}>
						    <Icon name='location-on' type='materialIcons' color='grey' />
						    <Text style={styles.ratingText}>Paris</Text>
				      </View>
				    </View>
				  }
				  leftAvatar={{ source: require('../assets/picture-2.jpg') }}
				  bottomDivider
				/>
				<ListItem key={3}
					rightAvatar={{ source: require('../assets/picture-1.jpg') }}
				  title='Mariage John & Janet'
				  titleStyle={styles.titleView}
				  subtitle={
				    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
				    	<View style={styles.subtitleView}>
							  <Icon name='clock' type='evilicon' color='grey' />
							  <Text style={styles.ratingText}>10/02/2020</Text>
					    </View>
					    <View style={styles.subtitleView}>
						    <Icon name='location-on' type='materialIcons' color='grey' />
						    <Text style={styles.ratingText}>Paris</Text>
				      </View>
				    </View>
				  }
				  leftAvatar={{ source: require('../assets/picture-2.jpg') }}
				  bottomDivider
				/>
				
				
			</ScrollView>
			
			<View 
				style={{
					width:'100%', height:'auto',
					padding: 5,
					backgroundColor: '#FAEBE4', 
					flexDirection: 'row', alignItems: 'center', justifyContent:'center'
				}}>
				<Text style={{paddingLeft: 20}}>
				Rejoindre un mariage
				</Text>
				<View style={styles.interSpace}/>
				<Icon name='plus' type='feather' color='grey' />
			</View>
			
			<View 
				style={{
					width:'100%', height:'auto',
					padding: 5,
					backgroundColor: '#fff', 
					flexDirection: 'row', alignItems: 'center', justifyContent:'center'
				}}>
				<Text style={{paddingLeft: 20}}>
					Ajouter mon mariage
				</Text>
				<View style={styles.interSpace}/>
				<Icon name='plus' type='feather' color='grey' />
			</View>
			
				
		</SafeAreaView>
	
	)
	

}


const styles = StyleSheet.create({
	titleView: {
		fontFamily:'catamaran-regular',
		fontWeight:'bold', 
		alignSelf:'center', 
		paddingTop: 10
	},
	subtitleView: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		paddingLeft: 15,
		paddingTop: 5
	},
	ratingText: {
		paddingLeft: 10,
		paddingRight: 10,
		color: 'grey'
	},
	interSpace:{
		paddingLeft: 30,
	}
});


export default MesMariagesScreen; 

//function mapStateToProps(state) {
//  return { 
////  	photoUrlList: state.photoUrlList,
////  	username: state.username,
//  }
//}

//function mapDispatchToProps(dispatch) {
//  return {
////    setPhotoUrlList: function ( photo_url_list ) { 
////       dispatch( { type: 'setLocalList', list: photo_url_list } ) 
////    },
////    deletePhotoUrl: function (i) {
////    	 dispatch( {type: 'deleteUrl', index: i } )
////    }
//  }
////}


//export default connect(
//  null, 
//  null
//)( MesMariagesScreen );


//<View 
//	style={{
//		width:'100%', height:60,
//		padding: '1em',
//		backgroundColor: '#31AE89', 
//		flexDirection: 'row', alignItems: 'center', justifyContent:'space-around'
//	}}>
//	
//	<View>
//		<Icon name='heart' type='evilicon' size='3em' />
//		<Text style={{fontSize: '0.8em'}}>
//			MES MARIAGES
//		</Text>
//	</View>
//	
//	<View>
//		<Icon name='user' type='antdesign' size='2em' />
//		<Text style={{fontSize: '0.8em'}}>
//			MON PROFILE
//		</Text>
//	</View>
//	
//</View>
			



