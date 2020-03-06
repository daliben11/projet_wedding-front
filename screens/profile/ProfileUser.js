import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,AsyncStorage } from 'react-native';
import { Avatar, Icon, Overlay, Input,Header} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import ProfileModif from './ProfileModif';
import {connect} from 'react-redux';

function ProfileUser({navigation}) {
  const [modifier,setModifier]=useState(false)
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [birthday, setBirthday]=useState('')
  const [phone, setPhone]=useState('')
  const [mail,setMail]=useState('')
  const [adresse,setAdresse]=useState('')
  const [ville,setVille]=useState('')
  const [codeP,setCodeP]=useState('')
  
if (modifier===false) {
  console.log("test1",codeP)

  AsyncStorage.getItem("tokenUser",data)
  console.log(data)
  
  return (
    
    <View style={{backgroundColor:"#F5F8FB",flex:1}} >
      <HeaderNav nom='Mon Profil'/> 
          <View style={{flex:1}} >
            <Avatar 
              containerStyle={{ marginLeft: 30, marginTop: 10}} 
              size="xlarge" 
              rounded 
              icon={{ name: 'home' }} 
              source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
            />
            <View style={{position:'absolute', left:220, top:5}}>
              <Text style={styles.title}>Nom</Text>
              <Text style={styles.description}>Guevara</Text>
            </View>
            <View style={{position:'absolute', left:220, top:55}}>
              <Text style={styles.title} >Prénom</Text>
              <Text style={styles.description} >Marion</Text>
            </View>
            <View style={{position:'absolute', left:220, top:105}}>
              <Text style={styles.title}>Téléphone</Text>
              <Text style={styles.description}>06 12 34 56 78</Text>
            </View>
            <View  style={{position:'absolute', left:20, top:155}}>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.description}>marionguevara@guevara.fr</Text>
            </View>
            <View  style={{position:'absolute', left:20, top:205}}>
              <Text style={styles.title}>Adresse</Text>
              <Text style={styles.description}>24bis rue de la Machine, Paris</Text>
            </View>
            <View style={{position:'absolute', left:20, top:255}}>
              <Text style={styles.title}>Code Postal</Text>
              <Text style={styles.description}>75010</Text>
            </View>
            <View style={{position:'absolute', left:20, top:305}}>
              <Text style={styles.title}>Mot de passe</Text>
              <Text style={styles.description}>***********</Text>
            </View>
          </View>
          <View 
            style={{
              width:'100%', height:'auto',
              padding: 5,
              backgroundColor: '#FAEBE4', 
              flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
            }}>
            <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}  onPress={() => {setModifier(true)}}>
                <Text style={{ fontFamily:'catamaran-semibold', fontSize:20}}>Modifier mon profil</Text>
                <Icon containerStyle={{paddingLeft: 5}} name='edit' type='feather' color='grey' />
            </TouchableOpacity>
            
          </View>
    </View>
  )
} else {
  return (
    <ProfileModif nom='Mon Profil'/>
  )
}

  };
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
    console.log("TCL: mapStateToProps -> state", state)
    
        return { statut : state.modifier}
      }
      
      export default connect(
        mapStateToProps, 
        null
      )(ProfileUser);

