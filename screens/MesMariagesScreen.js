import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import { 
	View, ScrollView, SafeAreaView,
	Text, StyleSheet  } from 'react-native';

import { Icon, ListItem } from 'react-native-elements';




function MesMariagesScreen() {
	
	// nav haut
	
	return(
		<SafeAreaView>
			<View 
				constainerStyle={{
					backgroundColor: '#FAEBE4', 
					flex:1, alignItems:'center', justifyContent:'center'
				}}>
				<Icon name='ios-menu' type='ionicon' color='#555753' />
				<Text>Mes Mariages</Text>
				
				
				
				
				<ListItem
				  title='Mariage John & Janet'
				  subtitle={
				    <View style={styles.subtitleView}>
				      <Icon name='clockcircleo' type='antDesign' color='grey' />
				      <Text style={styles.ratingText}>10/02/2020</Text>
				      <Icon name='location-on' type='materialIcons' color='grey' />
				      <Text style={styles.ratingText}>5 months ago</Text>
				    </View>
				  }
				  rightAvatar={{ source: require('../images/picture-1.jpg') }}
				/>
				
				
				
				
			</View>
		</SafeAreaView>
	
	)
	
	styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
}


function mapStateToProps(state) {
  return { 
//  	photoUrlList: state.photoUrlList,
//  	username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
//    setPhotoUrlList: function ( photo_url_list ) { 
//       dispatch( { type: 'setLocalList', list: photo_url_list } ) 
//    },
//    deletePhotoUrl: function (i) {
//    	 dispatch( {type: 'deleteUrl', index: i } )
//    }
  }
}


export default connect(
  null, 
  null
)( MesMariagesScreen );
