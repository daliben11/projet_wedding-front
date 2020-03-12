import React,{useState} from 'react';

import { View, ScrollView, SafeViewArea } from 'react-native';
import { Icon, Input, Header } from 'react-native-elements';




export default function AjoutPresta( props ) {

  const [type_service, setType_service] = useState('')
  const [phone, setPhone] = useState('')
  const [contact_name,setContact_name] = useState('')
  const [website,setWebsite] = useState('')
  
  const [adresse,setAdresse]=useState('')
  const [mail,setMail]=useState('')

  const [prixTotal,setPrixTotal]=useState(0)
  const [zipcode,setZipcode] = useState('')
  
    
  
  
  return (
  <View style={{backgroundColor:"#F5F8FB", flex:1}}>

         <Header
            leftComponent={<Icon
		          onPress={() => {props.toCloseOverlay()}}
		          name='close'
            />}
            rightComponent={<Icon
		          onPress={() => {props.toCloseOverlay()}}
		          name='check'
            />}
            centerComponent={{ text: "Ajouter une presta", 
            	style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } 
            }}
            containerStyle={{
                backgroundColor: '#FAEBE4',
                height: 84,
            }}>
         </Header>
        

          <ScrollView 
          	contentContainerStyle={{
          		backgroundColor:"#F5F8FB",
          		flex:5, alignItems:'center', 
          		marginTop:40
          	}}>
 
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Prestation'
		              onChangeText={(val) => setType_service(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Website'
		              onChangeText={(val) => setWebsite(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Nom du contact'
		              onChangeText={(val) => setContact_name(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Adresse'
		              onChangeText={(val)=>setAdresse(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Email'
		              onChangeText={(val)=>setMail(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Téléphone'
		              onChangeText={(val)=>setPhone(val)}
                />
        
                <Input
		              containerStyle={{marginTop:15}}
		              placeholder='Prix total'
		              onChangeText={(val) => setPrixTotal(val)}
                />

            </ScrollView>
            
   </View>
  )
}
