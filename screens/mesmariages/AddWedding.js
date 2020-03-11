import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';

import { 
	View,
	StyleSheet, TouchableOpacity, Text, AsyncStorage, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

import { Icon, Header, Input, Button } from 'react-native-elements';


import DatePicker from 'react-native-datepicker'




function AddWedding ( props ) {
console.log( "je suis dans AddWedding ", props.myWedding );


	const [brideName, setBrideName] = useState('Janet');
	const [groomName, setGroomName] = useState('John');
	const [city, setCity] = useState('');
	const [descriptif, setDescriptif] = useState('');
	const [budget , setBudget] = useState('')
	  
	const [date, setDate] = useState('')
	console.log(date)
	const [dateWedding, setDateWedding] = useState('')
	
	const [userToken,setUserToken] = useState('');
	const [user,setUser] = useState('');

	console.log(dateWedding);
	
 
	useEffect( () => {  
	
		async function detailProfil(){
			var data = await AsyncStorage.getItem("tokenUser");
		  
			setUserToken(data);  
			var dataProfile = await fetch("https://weedingplanner.herokuapp.com/profile",{
			  method: 'POST',
			  headers: {'Content-Type':'application/x-www-form-urlencoded'},
			  body: `tokenUser=${data}`
			});
			var profile = await dataProfile.json();
			 setUser(profile)
			if (profile.sexe=='homme'){
				setGroomName(profile.userlastname)
			} else {
				setBrideName(profile.userlastname)
			}
			console.log('affiche moi le nom du marié', groomName)

			}
			detailProfil();
	
	},[]);

	
	var handleAddWeeding = async () =>{
        let data = await fetch("https://weedingplanner.herokuapp.com/add-wedding",{  
              method: 'POST',
              headers: {'Content-Type':'application/x-www-form-urlencoded'},
              body: `date=${date}&description=${descriptif}&budget=${budget}&tokenUser=${userToken}`
            });
      
            let dataJson = await data.json();
			console.log(dataJson)
			
            

    }
	





	return(
		<ScrollView>
			<KeyboardAvoidingView behavior="padding" style={{flex:1}}>
			<View 
				containerStyle={{
			    flexbackgroundColor:'#FFF'
				}} >	
				
				
				<Header
					leftComponent={ 
						<Icon name='close' type='antdesign' color='#000'
							onPress={ () => props.navigation.goBack() }
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
									justCreate: true,
									date: dateWedding,
									bride: brideName, 
									groom: groomName, 
									city: city, 
									description: descriptif
								} );
								props.navigation.goBack();
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
					placeholder={brideName}
					value={brideName}
					onChangeText={ (val) => setBrideName(val) }
				/>
				<Input
					containerStyle={styles.input}
					label='PRÉNOM DU MARIÉ'
					placeholder={groomName}
					value={groomName}
					onChangeText={ (val) => setGroomName(val) }
		      
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
              date={dateWedding}
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
              onDateChange={(date) => setDateWedding(date)}
            />
      	</View>
				{/* <Input
					containerStyle={styles.input}
					label='Descriptif du mariage'

					onChangeText={ (val) => setCity(val) }
				/> */}
				<TextInput
					style={{
						margin:20, 
						backgroundColor:'white',
						paddingTop: 10}}
					multiline={true}
					numberOfLines={4}
					onChangeText={(text) => setDescriptif({text})}
					placeholder='Veuillez écrire une petite description de votre mariage'
					/>
				<Input
					containerStyle={styles.input}
					label='Budget'
					placeholder='Budget'
					onChangeText={ (val) => setBudget(val) }
				/>



			</View>
			</KeyboardAvoidingView>
		</ScrollView>				
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
//	 	isLogin: state.isLogin,
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






