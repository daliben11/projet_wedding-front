import React, { useState, useEffect } from 'react';
//import { connect } from 'react-redux';
import { 
	View, ScrollView, SafeAreaView,
	Text, StyleSheet, TouchableOpacity, DatePickerIOS  } from 'react-native';

import { Icon, Header, ListItem, Overlay, Input } from 'react-native-elements';

import DateTimePicker from '@react-native-community/datetimepicker';





function MesMariagesScreen({navigation}) {

	const [createNewWed, setCreateNewWed] = useState( false );
	const [myWeddingDate, setMyWeddingDate] = useState( Date.now() );
  const [show, setShow] = useState(false);


 const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || myWeddingDate;
    setMyWeddingDate(currentDate);
    setShow(false);
  };
 
  const showDatepicker = () => {
    setShow(true);
  };

	if (createNewWed) {
		return(
			
			<View 
				containerStyle={{
					flex:1, alignItems:'center',
					backgroundColor:'#F5F8FB'
				}}
			>	
				
				
				<Header
					leftComponent={ 
						<Icon name='close' type='antdesign' color='#000'
							onPress={ () => setCreateNewWed(false) }
						/> 
					}
					centerComponent={{ 
						text: 'Créer mon mariage', 
						style: { fontFamily:'catamaran-regular', color: '#000', fontSize:20} 
					}} // ajout de la police greatvibes avec la bonne taille
					rightComponent={<Icon name='check' type='antdesign' color='#000' onPress={ ()=>{} } />}
					containerStyle={{
						justifyContent: 'center',
						backgroundColor: '#FAEBE4',
						height: 84
					}}
				/>
				<Input
					containerStyle={styles.input}
					label='PRÉNOM DE LA MARIÉE'
					placeholder='Janet'
				/>
				<Input
					containerStyle={styles.input}
					label='PRÉNOM DU MARIÉ'
					placeholder='John'
				/>
				<Input
					containerStyle={styles.input}
					label='VILLE'
					placeholder='Lyon'
				/>
				<DateTimePicker
					value={myWeddingDate}
					mode="date"
					display="default"
					onChange={onChange}
				/>
				
			
			</View>

		);
	}

	return(

		<SafeAreaView style={{flex:1, backgroundColor: '#F5F8FB'}}>

			
			<Header
				leftComponent={{ icon: 'menu', color: '#000' }}
				centerComponent={{ 
					text: 'Mes Mariages', 
					style: { fontFamily:'greatvibes', color: '#000', fontSize:30} 
				}} // ajout de la police greatvibes avec la bonne taille
				containerStyle={{
					backgroundColor: '#FAEBE4',
					justifyContent: 'center',
					height: 84
				}}
			/>
			
				
			<ScrollView>
			
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
			
			<TouchableOpacity 
				style={{
					width:'100%', height:'auto',
					padding: 5,
					backgroundColor: '#fff', 
					flexDirection: 'row', alignItems: 'center', justifyContent:'center'
				}}
				onPress={ () => setCreateNewWed(true) }>
				
				<Text style={{paddingLeft: 20}}>
					Ajouter mon mariage
				</Text>
				<View style={styles.interSpace}/>
				<Icon name='plus' type='feather' color='grey' />
			</TouchableOpacity>
			
			
			
			
			
			
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
	}, 
	input: { 
		alignSelf:'flex-start', 
		width: '70%', 
		marginTop: 10
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


			



