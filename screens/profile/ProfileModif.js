import React,{ useEffect, useState } from 'react';
import {connect} from 'react-redux';

import { AsyncStorage, View, ScrollView } from 'react-native';
import { Avatar, Icon, Input,Header} from 'react-native-elements';




function ProfileModif( props ) {

  const [nom,setNom] = useState('')
  const [prenom,setPrenom] = useState('')
//  const [birthday, setBirthday] = useState(Date.now());
  
  const [phone, setPhone] = useState('')
  const [mail,setMail] = useState('')
  
  const [adresse,setAdresse] = useState('')
  const [ville,setVille] = useState('')
  const [codeP,setCodeP] = useState('')
  const [password,setPassword] = useState('')
  
	const [userToken, setUserToken] = useState("");
	
	
	useEffect( () => {
			
			( async () => {
				var data = await AsyncStorage.getItem("tokenUser");
				setUserToken(data);
				})();
			//console.log( 'state token profil modif ', userToken );
	}, []);
		    
  
  const postProfilEditToBDD = async () => {
 
		let myForm = new FormData();
		myForm.append('token', userToken );
		void ( prenom !='' && ( myForm.append('userfirstname', prenom ) ) );
		void ( nom !='' 	 && ( myForm.append('userlastname', nom ) ) );
		//void ( birthday !='' && ( myForm.append('birthday', prenom ) ) );
		void ( mail !='' 	 && ( myForm.append('email', mail ) ) );
		void ( phone !=''  && ( myForm.append('phone', prenom ) ) );
		void (adresse !='' && ( myForm.append('address', adresse ) ) );
		void ( ville !=''	 && ( myForm.append('city', ville ) ) );
		void ( codeP !=''  && ( myForm.append('zipcode', codeP ) ) );
		void (password !=''&& ( myForm.append('password',password ) ) );

		
    //sexe: String,
    //avatar: String,
    //password: String,

 	
  	let dataProfile = await fetch('http://10.2.5.206:3000/profile', {//'https://weedingplanner.herokuapp.com
			method: 'PUT',
			body: myForm, 
		});
		
    let response = await dataProfile.json();
  	
  };
  
  
  
  
  return (
  <View style={{backgroundColor:"#F5F8FB",flex:1}}>

      <Header
          leftComponent={<Icon
            onPress={() => { props.navigation.goBack() }}
            name='close'
          />}
          rightComponent={<Icon
            onPress={() => { postProfilEditToBDD(); props.navigation.goBack() }}
            name='check'
          />}
          centerComponent={{ text: "Mon Profil", style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
          containerStyle={{
              backgroundColor: '#FAEBE4',
              height: 84,
          }}>
      </Header>
    
  <ScrollView style={{flex:1}}>
    <View style={{backgroundColor:"#F5F8FB",flex:1, alignItems:'center', marginTop:40}}>

            <Avatar              
              size="xlarge" 
              rounded showEditButton 
              icon={{ name: 'home' }} 
              source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
            />
            
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Nom'
              label='Nom'
              onChangeText={(val) => setNom(val)}
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Prénom'
              label='Prénom'
              onChangeText={(val) => setPrenom(val)}
            />  
            {/*<Input
              containerStyle={{marginTop:15}}
              placeholder='Date de naissance'
              label='Date de naissance'
              onChangeText={(val) => setBirthday(val)}
            />*/}
            
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Téléphone'
              label='Téléphone'
              onChangeText={(val)=>setPhone(val)}

            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Email'
              label='Email'
              onChangeText={(val)=>setMail(val)}
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Adresse'
              label='Adresse'
              onChangeText={(val)=>setAdresse(val)}
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Ville'
              label='Ville'
              onChangeText={(val)=>setVille(val)}
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Code Postal'
              label='Code Postal'
              onChangeText={ (val)=>setCodeP(val) }
              
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Mot de passe'
              label='Mot de passe'
              secureTextEntry={true}
              onChangeText={ (val)=>setPassword(val) ,console.log(password)}
            />
            

    </View>
  </ScrollView>
</View>
  )
}

function mapStateToProps(state) {

	return { 
	 	isLogin: state.isLogin,
  }
}



export default connect(
    mapStateToProps, 
    null
)(ProfileModif);
