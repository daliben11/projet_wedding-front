import React,{useState} from 'react';
import {connect} from 'react-redux';

import { View, ScrollView } from 'react-native';
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
  
  const tokenUser = 'LALA';

  
  
  const postProfilEditToBDD = async () => {
  	
  	let obj = { token: tokenUser };
  	void ( prenom !='' && ( obj.userfirstname = prenom ) );
  	void ( nom !='' 	 && ( obj.userlastname = nom ) );
  	void ( mail !='' 	 && ( obj.email = mail ) );
  	//void ( birthday !='' && ( obj.birthday = prenom ) );
  	
  	void ( phone !=''  && ( obj.phone = prenom ) );
  	void (adresse !='' && ( obj.address = adresse ) );
  	void ( ville !=''	 && ( obj.city = ville ) );
  	void ( codeP !=''  && ( obj.zipcode = codeP ) );
  	void (password !=''&& ( obj.password = password ) );
		
		console.log('modifications à faire ', obj );
    //sexe: String,
    //avatar: String,
    //password: String,


  	
  	await fetch('https://weedingplanner.herokuapp.com/profile', {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify( obj )
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
