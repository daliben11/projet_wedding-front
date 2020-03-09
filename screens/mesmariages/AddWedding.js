import React, { useState } from 'react';
import { connect } from 'react-redux';

import { 
	View,
	StyleSheet, TouchableOpacity, Text  } from 'react-native';

import { Icon, Header, Input, Button } from 'react-native-elements';


import DatePicker from 'react-native-datepicker'



function AddWedding ( props ) {

	const [brideName, setBrideName] = useState('');
	const [groomName, setGroomName] = useState('');
	const [city, setCity] = useState('');
	

	  
	const [date, setDate] = useState('')
	console.log(date)
 
	





	return(
		
			<View 
				containerStyle={{
			    flexbackgroundColor:'#FFF'
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
									status: true,
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
				
				

				


				<View style={{margin: 10}}>
                  <Text style={{marginTop: 10, color: '#636e72', fontWeight: 'bold', fontSize: 16}}>Date du mariage</Text>
                    <DatePicker
                    style={{width: 200, marginTop: 10}}
                    date={date}
                    mode="date"
                    placeholder="Sélectionner une date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1950"
                    maxDate="01-01-2050"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => setDate(date)}
                  />
            </View>




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




function mapStateToProps(state) {
  return { 
	 	isLogin: state.isLogin,
	 	myWedding: state.myWedding,
//  	username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMyWedding: function ( val ) {
    	 dispatch( {type: 'setMyWedding', wedding: val } )
    }
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)( AddWedding );






