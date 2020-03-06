import React,{useState} from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Icon, Input,Header} from 'react-native-elements';


export default function AddGuest(props) {

  const [modifier,setModifier]=useState(false)
  const [nom,setNom]=useState('')
  const [desc,setDesc]=useState('')
  const [adresse,setAdresse]=useState('')
  const [mail,setMail]=useState('')
  const [phone, setPhone]=useState(0)
  const [prixTotal,setPrixTotal]=useState(0)
  const [codeP,setCodeP]=useState(0)
  
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
                centerComponent={{ text: "Ajouter un presta ", style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
                containerStyle={{
                    backgroundColor: '#FAEBE4',
                    height: 84,
                }}>
         </Header>
        
 
          <View style={{backgroundColor:"#F5F8FB",flex:1, alignItems:'center', marginTop:40}}>
                
                <Input
                containerStyle={{marginTop:15}}
                placeholder='Nom'
                label='Nom'
                onChangeText={(val) => setNom(val)}
                />
                <Input
                containerStyle={{marginTop:15}}
                placeholder='Description'
                label='Description'
                onChangeText={(val) => setPrenom(val)}
                />  
                <Input
                containerStyle={{marginTop:15}}
                placeholder='Adresse'
                label='Adresse'
                onChangeText={(val)=>setAdresse(val)}
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
                placeholder='Prix total'
                label='Prix total'
                onChangeText={(val) => setBirthday(val)}
                />

            </View>
  
   </View>
  )
}
