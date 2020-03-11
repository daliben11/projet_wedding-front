import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';

import { StyleSheet, View, Text,TouchableOpacity,AsyncStorage } from 'react-native';
import { Avatar, Icon} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import ProfileModif from './ProfileModif';





function ProfileUser ( props ) {

  const [user,setUser] = useState('')	
	const [userToken,setUserToken] = useState("");
	
	console.log("test userToken ", userToken);
	
	
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
		    
		    console.log('get json')
		    setUser(profile);
		    props.setToken(userToken);
    }
    detailProfil();
    console.log('ceci est mon token ', props.isLogin.userToken);
	}, []);
      
  console.log('fetched user data from DB ', user);
  
  return (
    
    <View style={{backgroundColor:"#F5F8FB",flex:1}} >
      <HeaderNav nom='Mon Profil'/> 
          <View style={{flex:1}} >
            <View style={{flex:0.5 ,alignItems:'center'}} >
              <Avatar 
                containerStyle={{marginLeft: 30, marginTop: 10}} 
                size="xlarge" 
                rounded 
                icon={{ name: 'home' }} 
                source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
              />

            </View>

            <View style={{flex:1, alignItems:'flex-start',marginLeft: 20}}>
              <View >
                <Text style={styles.title}>Nom</Text>
                <Text style={styles.description}>{user.userfirstname}</Text>
              </View>
              <View >
                <Text style={styles.title} >Prénom</Text>
                <Text style={styles.description} >{user.userlastname}</Text>
              </View>
              <View >
                <Text style={styles.title}>Téléphone</Text>
                <Text style={styles.description}>{user.phone}</Text>
              </View>
              <View  >
                <Text style={styles.title}>Email</Text>
                <Text style={styles.description}>{user.email}</Text>
              </View>
              <View  >
                <Text style={styles.title}>Adresse</Text>
                <Text style={styles.description}>{user.address}, {user.city}</Text>
              </View>
              <View >
                <Text style={styles.title}>Code Postal</Text>
                <Text style={styles.description}>{user.zipcode}</Text>
              </View>
              <View >
                <Text style={styles.title}>Mot de passe</Text>
                <Text style={styles.description}>**********</Text>
              </View>
              <View >
                <Text style={styles.title}>Sexe</Text>
                <Text style={styles.description}>{user.sexe}</Text>
              </View>

            </View>
          </View>
          <View 
            style={{
              width:'100%', height:'auto',
              padding: 5,
              backgroundColor: '#FAEBE4', 
              flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
            }}>
            <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}  
            	onPress={() => {
            		props.navigation.navigate( 'ProfilEdit' );     		
            	}}>
                <Text style={{ fontFamily:'catamaran-semibold', fontSize:20}}>Modifier mon profil</Text>
                <Icon containerStyle={{paddingLeft: 5}} name='edit' type='feather' color='grey' />
            </TouchableOpacity>
            
          </View>
    	</View>
		);


}

const styles = StyleSheet.create({
  title: {
    fontFamily:'catamaran-semibold',
    fontSize:12,
    letterSpacing:2,
    opacity:0.5,
    lineHeight: 20,
  },
  description: {
    fontFamily:'catamaran-semibold',
    fontSize:17,
    lineHeight: 28,
  },
  input:{
    marginTop:10,
  }

});

function mapStateToProps(state) {
	console.log("TCL: mapStateToProps -> state", state);
	return { 
	 	isLogin: state.isLogin,
	 	myWedding: state.myWedding,
//  	username: state.username,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    setToken: function ( val ) {
    	 dispatch( {type: 'setUserToken', userToken: val } )
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProfileUser);

