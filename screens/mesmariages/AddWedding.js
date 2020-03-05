import React, { useState } from 'react';
import { connect } from 'react-redux';

import { 
	View,
	StyleSheet, TouchableOpacity  } from 'react-native';

import { Icon, Header, Input, Button } from 'react-native-elements';

import DateTimePicker from '@react-native-community/datetimepicker';



function AddWedding ( props ) {

	const [brideName, setBrideName] = useState('');
	const [groomName, setGroomName] = useState('');
	const [city, setCity] = useState('');
	const [myWeddingDate, setMyWeddingDate] = useState( Date.now() );
	
  const [show, setShow] = useState(false);

	  
  
	const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || myWeddingDate;
    setMyWeddingDate( currentDate );
  };
 
	
	const dateFormat = (date) => {
	
			if ( typeof(date) != "date" ) {
				date = new Date(date);
			}
			let day = String( date.getDate() ).padStart(2,'0'); 
			let month = String( date.getMonth()+1 ).padStart(2,'0');
		 	let year = String( date.getFullYear() );
		 	
		 	return `${day}/${month}/${year}`;
	}


	const Calendar = () => {
	
		if(show){
			return(
					<DateTimePicker
						value={myWeddingDate}
						mode="date"
						display="default"
						onChange={onChangeDate}
					/>
			);				
		} else {
			return(null); 
		}
	}


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
							onPress={ () => props.showPage(false) }
						/> 
					}
					centerComponent={{ 
						text: 'Créer mon mariage', 
						style: { fontFamily:'catamaran-regular', color: '#000', fontSize:20} 
					}} // ajout de la police greatvibes avec la bonne taille
					rightComponent={
						<Icon name='check' type='antdesign' color='#000' 
							onPress={ () => {
								props.setMyWedding( {
									bride: brideName, 
									groom: groomName, 
									city: city, 
									date: myWeddingDate
								} );
								props.showPage(false)
							} } 
						/>
						}
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
					onChangeText={ (val) => setBrideName(val) }
				/>
				<Input
					containerStyle={styles.input}
					label='PRÉNOM DU MARIÉ'
					placeholder='John'
					onChangeText={ (val) => setGroomName(val) }
		      style={styles.input} 
				/>
				<Input
					containerStyle={styles.input}
					label='VILLE'
					placeholder='Lyon'
					onChangeText={ (val) => setCity(val) }
				/>
				
				<Button
					buttonStyle={{backgroundColor: '#FAEBE4', borderColor:'grey', marginTop: 10}}
					titleStyle={{color: '#000'}}
					containerStyle={{width:'70%', alignSelf:'center'}}
					title={ `Je choisie ma date ${dateFormat(myWeddingDate)}` }
					type="outline"
					onPress={ () => setShow( !show ) }
				/>

				<Calendar/>

			</View>

	);

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
		marginTop: 10,
		height: 40,
		marginBottom: 20
	}
});




//function mapStateToProps(state) {
//  return { 
////  	photoUrlList: state.photoUrlList,
////  	username: state.username,
//  }
//}

function mapDispatchToProps(dispatch) {
  return {
    setMyWedding: function ( val ) {
    	 dispatch( {type: 'setMyWedding', wedding: val } )
    }
  }
}


export default connect(
  null, 
  mapDispatchToProps
)( AddWedding );






