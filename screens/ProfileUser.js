import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { Avatar, Icon, Overlay, Input,Header} from 'react-native-elements';
import HeaderNav from './HeaderNav';

export default function ProfileUser({navigation}) {
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
  
  return (
    
    <View style={{backgroundColor:"#F5F8FB",flex:1}} >
      <HeaderNav /> 
      {/* <Header
              leftComponent={{ icon: 'menu', color: '#000' }}
              centerComponent={{ text: 'Mon Profil', style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
              containerStyle={{
                  backgroundColor: '#FAEBE4',
                  height: 84,
                  
              }}
          /> */}
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
    <View style={{backgroundColor:"#F5F8FB",flex:1}}>

      <Header
            leftComponent={<Icon
              onPress={() => {setModifier(false)}}
              name='close'
            />}
            rightComponent={<Icon
              onPress={() => {setModifier(false)}}
              name='check'
            />}
            centerComponent={{ text: 'Mon Profil ', style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
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
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Date de naissance'
              label='Date de naissance'
              onChangeText={(val) => setBirthday(val)}
            />

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
              onChangeText={(val)=>setCodeP(val)}
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Mot de passe'
              label='Mot de passe'
            />
            

    </View>
  </ScrollView>
  </View>
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



