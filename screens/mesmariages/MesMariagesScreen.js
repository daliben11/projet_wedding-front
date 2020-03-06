import React, { useState, useEffect } from 'react';
//import { connect } from 'react-redux';
import { 
	View, ScrollView, SafeAreaView,
	Text, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';

import { Icon, Header, ListItem, Overlay, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import HeaderNav from '../HeaderNav';
import AddWedding from './AddWedding'


function MesMariagesScreen( props ) {

	const [createNewWed, setCreateNewWed] = useState( false );
	
	const changePage = (val) => {
		console.log('create new wedding (appear the screen AddWedding)  ', createNewWed );
		setCreateNewWed( val );
	}


	if (createNewWed) {
		return(
		
			<AddWedding showPage={changePage} />

		);
	} else {
	
		return(

			<View style={{
					flex:1,
					backgroundColor:'#F5F8FB'
				}}>

				<HeaderNav nom='Mon Mariage'  />
				
				
					
				<ScrollView>
				
				{	[1,2,3,4].map( (el,ind) => {
					var nextPage;
					if( ind === 0 ) {
						nextPage = 'Dashboard';
					} else {
						nextPage = 'GuestPage';
					}
					return(
						
						<ListItem key={ind}
							onPress={ () => props.navigation.navigate( nextPage ) }
							rightAvatar={{ source: require('../../assets/picture-1.jpg') }}
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
							leftAvatar={{ source: require('../../assets/picture-2.jpg') }}
							bottomDivider
						/>
					);
				})
				
					
				}
					
					
				</ScrollView>
				
				<TouchableOpacity
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
				</TouchableOpacity>
				
				<TouchableOpacity 
					style={{
						width:'100%', height:'auto',
						padding: 5,
						backgroundColor: '#fff', 
						flexDirection: 'row', alignItems: 'center', justifyContent:'center'
					}}
					onPress={ () => setCreateNewWed( true ) }>
					
					<Text style={{paddingLeft: 20}}>
						Ajouter mon mariage
					</Text>
					<View style={styles.interSpace}/>
					<Icon name='plus' type='feather' color='grey' />
				</TouchableOpacity>
				
				
				
				
				
				
			</View>
	
		);
	}

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
	}, 
	input: { 
		alignSelf:'flex-start', 
		width: '70%', 
		marginTop: 10,
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom: 20,
		paddingHorizontal: 10
	}
});


export default MesMariagesScreen; 



//					onPress={()=>props.navigation.openDrawer()}

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


			



