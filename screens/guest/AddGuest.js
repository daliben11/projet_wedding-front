import React,{useState} from 'react';
import { View, Text,ScrollView , TouchableOpacity} from 'react-native';
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

          <View 
            style={{
              width:'100%',
              padding: 5,
              backgroundColor: '#FAEBE4', 
              height: 50,
              flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
            }}>
            <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center' }}   >
                <Text style={{ fontFamily:'catamaran-semibold', fontSize:15}}>Ajouter une nouvelle dépense</Text>
                <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' />
                {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
            </TouchableOpacity>
          </View>


</View>
  )
}
