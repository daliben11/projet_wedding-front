import React, { useState, useEffect } from 'react';
//import { connect } from 'react-redux';

import { 
	View, ScrollView, SafeAreaView,
	Text, StyleSheet  } from 'react-native';

import { Icon, ListItem } from 'react-native-elements';




function MesMariagesScreen() {
	
	// nav haut
	
	return(
		<SafeAreaView>
			<View 
				style={{
					width:'100%', height:'50px',
					backgroundColor: '#FAEBE4', 
					flexDirection: 'row', alignItems: 'center',
				}}>
				<Icon name='menu' type='material' color='grey' />
				<Text style={{paddingLeft: 20}}>
					Mes Mariages
				</Text>
			</View>
				
				
				
				<ListItem key={1}
				  title='Mariage John & Janet'
				  subtitle={
				    <View style={styles.subtitleView}>
					    <Icon name='clock' type='evilicon' color='grey' />
					    <Text style={styles.ratingText}>10/02/2020</Text>
					    <View style={styles.interSpace}/>
				      <Icon name='location-on' type='materialIcons' color='grey' />
				      <Text style={styles.ratingText}>5 months ago</Text>
				    </View>
				  }
				  rightAvatar={{ source: require('../assets/picture-1.jpg') }}
				  leftAvatar={{ source: require('../assets/picture-2.jpg') }}
				  titleStyle={{paddingTop: 10, paddingLeft: 20}}
				  bottomDivider
				/>
				
				<ListItem
				  title='Mariage John & Janet'
				  subtitle={
				    <View style={styles.subtitleView}>
					    <Icon name='clock' type='evilicon' color='grey' />
					    <Text style={styles.ratingText}>10/02/2020</Text>
					    <View style={styles.interSpace}/>
				      <Icon name='location-on' type='materialIcons' color='grey' />
				      <Text style={styles.ratingText}>5 months ago</Text>
				    </View>
				  }
				  rightAvatar={{ source: require('../assets/picture-1.jpg') }}
				  leftAvatar={{ source: require('../assets/picture-2.jpg') }}
				  titleStyle={{paddingTop: 10, paddingLeft: 20}}
				  bottomDivider
				/>
				
				<ListItem
				  title='Mariage John & Janet'
				  titleStyle={{paddingTop: 10, paddingLeft: 20}}
				  subtitle={
				    <View style={styles.subtitleView}>
					    <Icon name='clock' type='evilicon' color='grey' />
					    <Text style={styles.ratingText}>10/02/2020</Text>
					    <View style={styles.interSpace}/>
				      <Icon name='location-on' type='materialIcons' color='grey' />
				      <Text style={styles.ratingText}>5 months ago</Text>
				    </View>
				  }
				  rightAvatar={{ source: require('../assets/picture-1.jpg') }}
				  leftAvatar={{ source: require('../assets/picture-2.jpg') }}
				  
				  bottomDivider
				/>
				
				
				
		</SafeAreaView>
	
	)
	

}


const styles = StyleSheet.create({
	subtitleView: {
		flexDirection: 'row',
		alignItems: 'end',
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






