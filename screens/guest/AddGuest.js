import React,{useState} from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Icon, Input,Header} from 'react-native-elements';


export default function AddGuest(props) {
  const [modifier,setModifier]=useState(false)
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [birthday, setBirthday]=useState('')
  const [phone, setPhone]=useState('')
  const [mail,setMail]=useState('')
  const [adresse,setAdresse]=useState('')
  const [ville,setVille]=useState('')
  const [codeP,setCodeP]=useState('')
  
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
            centerComponent={{ text: "Ajouter un invité ", style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
            containerStyle={{
                backgroundColor: '#FAEBE4',
                height: 84,
            }}>
        </Header>
    
  <ScrollView style={{flex:1}}>
    <View style={{backgroundColor:"#F5F8FB",flex:1, alignItems:'center', marginTop:40}}>

          
            
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
              placeholder='Email'
              label='Email'
              onChangeText={(val)=>setMail(val)}
            />
              <Input
              containerStyle={{marginTop:15}}
              placeholder='Téléphone'
              label='Téléphone'
              onChangeText={(val)=>setPhone(val)}

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
              onChangeText={(val)=>setCodeP(val) ,console.log(codeP)}
              
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Date de naissance'
              label='Nom de'
              onChangeText={(val) => setBirthday(val)}
            />

            

    </View>
  </ScrollView>
</View>
  )
}
